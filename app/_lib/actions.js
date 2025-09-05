'use server';

import { signIn, signOut } from '@/auth';
import { updatePost } from './helpers';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
// import { revalidatePath } from 'next/cache';

export async function login() {
  await signIn('google', {
    redirectTo: '/panel',
  });
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

export async function logout() {
  await signOut({
    redirectTo: '/',
  });
}
