'use server';

import { auth } from '@/auth';
import { deletePost, updatePost } from './helpers';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import supabase, { supabaseUrl } from './supabase';

export async function signUp(name, email, password) {
  try {
    const result = await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
        callbackURL: '/',
      },
    });
    revalidatePath('/');
    revalidatePath('/login');

    return result;
  } catch (error) {
    return error.message;
  }
}

export async function signIn(email, password) {
  try {
    const result = await auth.api.signInEmail({
      body: {
        email,
        password,
        callbackURL: '/',
      },
      headers: await headers(),
    });

    return result;
  } catch (error) {
    return error.message;
  }
}

export async function signOut() {
  await auth.api.signOut({ headers: await headers() });
  revalidatePath('/');
  redirect('/login');
}

export async function update(formData) {
  const title = formData.get('title');
  const article = formData.get('article');
  const id = formData.get('id');
  const image = formData.get('image');
  const commentsRaw = formData.get('comments');
  const comments = commentsRaw ? JSON.parse(commentsRaw) : [];

  const updatedPost = {
    id,
    title,
    article,
    comments,
    image,
  };

  const { data, error } = await supabase
    .from('posts')
    .update(updatedPost)
    .eq('id', id);

  if (error) {
    return error.message;
  }

  revalidatePath('/');
  revalidatePath('/articles');

  return data;
}

export async function postComment(id, name, comment) {
  let { data: posts, err } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id);

  const comments = posts.at(0).comments;

  const { data, error } = await supabase
    .from('posts')
    .update({ comments: [...comments, { id: Date.now(), name, comment }] })
    .eq('id', id)
    .select();

  revalidatePath('/');
  revalidatePath('/articles');
}

export async function deleteArticle(id) {
  try {
    await deletePost(id);

    revalidatePath('/');
    revalidatePath('/articles');
    revalidatePath('/panel');
  } catch (error) {
    return error.message;
  }
}

export async function createNewPost(formData) {
  const title = formData.get('title');
  const article = formData.get('article');
  const image = formData.get('image');

  const comments = [];
  const post = { title, article, image, comments };

  const imageName = post.image.name.replaceAll('/', '');

  const imageUrl = `${supabaseUrl}/storage/v1/object/public/image%20bucket/${imageName}`;

  // https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/
  // public/image%20bucket/
  // ChatGPT%20Image%20Aug%2030,%202025,%2001_11_56%20PM.png

  const { data: postData, error: createError } = await supabase
    .from('posts')
    .insert([{ ...post, image: imageUrl }])
    .select();

  const { error: storageError } = await supabase.storage
    .from('image%20bucket')
    .upload(imageName, post.image);

  if (createError) {
    return createError.message;
  }

  if (storageError) {
    await deletePost(postData[0].id);
    return `${storageError.message} . Try changing the image name or go for different image`;
  }

  revalidatePath('/');
  revalidatePath('/panel');
  redirect('/panel');
}
