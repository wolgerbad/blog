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
