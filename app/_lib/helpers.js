import { redirect } from 'next/navigation';
import supabase, { supabaseUrl } from './supabase';
import { revalidatePath } from 'next/cache';

export async function getPosts() {
  let { data: posts, error } = await supabase.from('posts').select('*');
  if (error) {
    throw new Error(error.message);
  }
  return posts;
}

export async function getPost(id) {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function deletePost(id) {
  const { error } = await supabase.from('posts').delete().eq('id', id);

  if (error) {
    throw new Error(error.message);
  }
}

export async function updatePost(id, post) {
  const { data, error } = await supabase
    .from('posts')
    .update(post)
    .eq('id', id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function createPost(post) {
  const imageName = post.image.name.replaceAll('/', '');

  const imageUrl = `${supabaseUrl}/storage/v1/object/public/image%20bucket/${imageName}`;

  // https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/
  // public/image%20bucket/
  // ChatGPT%20Image%20Aug%2030,%202025,%2001_11_56%20PM.png

  const { data, error } = await supabase
    .from('posts')
    .insert([{ ...post, image: imageUrl }])
    .select();

  const { error: storageError } = await supabase.storage
    .from('image%20bucket')
    .upload(imageName, post.image);

  if (storageError) await deletePost(data.id);

  if (error) {
    throw new Error(error.message);
  }

  redirect('/panel');
  return data;
}
