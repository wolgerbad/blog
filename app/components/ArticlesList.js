import { getPosts } from '../_lib/helpers';
import ReadMore from './ReadMore';

export default async function ArticlesList() {
  const articles = await getPosts();

  return (
    <div className="px-8">
      <h1 className="mb-3 text-xl text-gray-600">Articles</h1>
      <div className="flex flex-wrap gap-8">
        {articles.map((article) => (
          <div key={article.id} className="max-w-80">
            <img src={article.image} className="max-w-full" />
            <h2>{article.title}</h2>
            <p>{article.article.slice(0, 80)}..</p>
            <ReadMore url={`/articles/${article.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
