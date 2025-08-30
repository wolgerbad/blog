import ArticlePreviewItem from './ArticlePreviewItem';

export default function ArticlePreviewList({ posts }) {
  return (
    <div className="max-w-[20rem]">
      {posts.map((post) => (
        <ArticlePreviewItem key={post.id} post={post} />
      ))}
    </div>
  );
}
