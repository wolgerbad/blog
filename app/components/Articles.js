import { getPosts } from '../_lib/helpers';
import Article from './Article';
import ArticlePreviewList from './ArticlePreviewList';

export default async function Articles({ posts, main }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Article article={main} />
        </div>
        <div className="lg:col-span-1">
          <ArticlePreviewList posts={posts} />
        </div>
      </div>
    </div>
  );
}
