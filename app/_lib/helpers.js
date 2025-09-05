import { revalidatePath } from 'next/cache';
import supabase from './supabase';

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

export async function createPost(post) {
  const { data, error } = await supabase.from('posts').insert(post).select();

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath('/panel');
  return data;
}

export async function deletePost(id) {
  const { error } = await supabase.from('posts').delete().eq('id', id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath('/panel');
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
