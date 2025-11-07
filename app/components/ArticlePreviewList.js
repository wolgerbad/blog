'use client';

import Link from 'next/link';
import ArticlePreviewItem from './ArticlePreviewItem';

export default function ArticlePreviewList({ posts }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Latest Articles</h2>
        <Link
          href="/articles"
          className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
        >
          View All →
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <ArticlePreviewItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
