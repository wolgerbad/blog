import { getPosts } from '../_lib/helpers';
import Article from './Article';
import ArticlePreviewList from './ArticlePreviewList';

export default async function Articles({ posts, main }) {
  return (
    <div className="flex p-4 justify-between gap-20 mt-5 ">
      <Article article={main} />
      <ArticlePreviewList posts={posts} />
    </div>
  );
}
