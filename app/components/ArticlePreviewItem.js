import Image from 'next/image';
import ReadMore from './ReadMore';

export default function ArticlePreviewItem({ post }) {
  const article = post.article.slice(0, 80);

  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-3">
        <Image
          src={post.image}
          alt={post.title}
          width={500}
          height={500}
          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
        {post.title}
      </h3>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article}...</p>
      <div className="flex items-center justify-between">
        <span className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200">
          <ReadMore url={`/articles/${post.id}`} />
        </span>
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      </div>
    </div>
  );
}
