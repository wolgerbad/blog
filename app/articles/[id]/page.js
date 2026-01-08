import { getPost, getPosts } from '@/app/_lib/helpers';
import Article from '@/app/components/Article';

export const revalidate = 10;

export async function generateMetadata(props) {
  const id = props.params.id;
  const post = await getPost(id);

  return {
    title: `Article: ${post.title}`,
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    id: String(post.id),
  }));
}

export default async function ArticlePage({ params }) {
  const { id } = params;
  const post = await getPost(id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Article article={post} isPage={true} />
    </div>
  );
}
