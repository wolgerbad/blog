import Link from 'next/link';
import ArticlePreviewItem from './ArticlePreviewItem';

export default function ArticlePreviewList({ posts }) {
  return (
    <div className="max-w-[20rem] relative">
      <Link
        href="/articles"
        className="absolute cursor-pointer -top-8 right-0 underline text-blue-600"
      >
        Other articles...
      </Link>
      {posts.map((post) => (
        <ArticlePreviewItem key={post.id} post={post} />
      ))}
    </div>
  );
}
