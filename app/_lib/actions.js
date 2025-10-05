'use server';

import { auth } from '@/auth';
import { deletePost, updatePost } from './helpers';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import supabase, { supabaseUrl } from './supabase';

export async function signUp(name, email, password) {
  const result = await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
      callbackURL: 'http://localhost:3000/panel',
    },
  });

  revalidatePath('/');

  return result;
}

export async function signIn(email, password) {
  console.log(email, password);

  try {
    const result = await auth.api.signInEmail({
      body: {
        email,
        password,
        callbackURL: 'http://localhost:3000/panel',
      },
      headers: await headers(),
    });

    revalidatePath('/');
    return result;
  } catch (error) {
    console.error(error.message);
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

  await updatePost(id, updatedPost);
  revalidatePath('/panel');
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
}

export async function deleteArticle(id) {
  deletePost(id);

  revalidatePath('/panel');
}
