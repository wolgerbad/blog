import { auth } from '@/auth';
import BackBtn from './BackBtn';
import Comments from './Comments';
import { headers } from 'next/headers';
import Image from 'next/image';

export default async function Article({ article, isPage = false }) {
  const session = await auth.api.getSession({ headers: await headers() });
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
      {isPage && <BackBtn />}
      <div className="relative">
        <Image
          src={article.image}
          alt={article.title}
          width={500}
          height={500}
          className="w-full h-64 sm:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <div className="p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
          {article.title}
        </h1>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4 text-lg">
            {article.article} {article.article}
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <Comments session={session} post={article} />
        </div>
      </div>
    </div>
  );
}
