import ReadMore from './ReadMore';

export default function ArticlePreviewItem({ post }) {
  const article = post.article.slice(0, 60);

  return (
    <div className="mb-4">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover mb-2"
      />
      <h2 className="font-semibold mb-1 text-gray-800 text-center">
        {post.title}
      </h2>
      <p className="inline">{article}..</p>
      <span className="text-blue-400 ml-2">
        <ReadMore url={`/articles/${post.id}`} />
      </span>
    </div>
  );
}
