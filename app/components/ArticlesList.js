import Image from 'next/image';
import { getPosts } from '../_lib/helpers';
import ReadMore from './ReadMore';
import Link from 'next/link';

export default async function ArticlesList() {
  const articles = await getPosts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">All Articles</h1>
        <p className="text-gray-600">
          Discover our latest stories and insights
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            href={`/articles/${article.id}`}
            key={article.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
          >
            <div className="relative overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                width={500}
                height={500}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {article.article.slice(0, 120)}...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-blue-600 hover:underline">
                  read more...
                </span>
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
