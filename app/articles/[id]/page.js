import { getPost } from '@/app/_lib/helpers';
import Article from '@/app/components/Article';

export default async function ArticlePage({ params }) {
  const { id } = params;
  const post = await getPost(id);

  return (
    <div>
      <Article article={post} />
    </div>
  );
}
