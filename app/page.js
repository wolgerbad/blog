import { getPosts } from './_lib/helpers';
import Articles from './components/Articles';

export default async function Home() {
  const posts = await getPosts();
  const main = posts.at(-1);
  console.log(posts);
  return (
    <div>
      <Articles posts={posts} main={main} />
    </div>
  );
}
