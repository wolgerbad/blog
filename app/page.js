import { auth } from '@/auth';
import { getPosts } from './_lib/helpers';
import Articles from './components/Articles';

export default async function Home() {
  const session = await auth();
  const posts = await getPosts();
  const main = posts.at(-1);

  return (
    <div>
      <Articles posts={posts} main={main} />
    </div>
  );
}
