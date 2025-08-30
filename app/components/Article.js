import Comments from './Comments';

export default function Article({ article }) {
  return (
    <div className="max-w-4xl mx-auto ">
      <img
        src={article.image}
        alt={article.title}
        className="w-full max-h-96 object-cover mb-10 rounded-lg"
      />

      <h1 className="text-center mb-6 text-3xl">{article.title}</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        {article.article} {article.article}
      </p>

      <Comments article={article} />
    </div>
  );
}
