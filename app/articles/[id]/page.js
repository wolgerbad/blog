import { getPost } from '@/app/_lib/helpers';
import Article from '@/app/components/Article';
import BackBtn from '@/app/components/BackBtn';

export default async function ArticlePage({ params }) {
  const { id } = params;
  const post = await getPost(id);

  return (
    <div className="p-4 relative">
      <Article article={post} isPage={true} />
    </div>
  );
}
