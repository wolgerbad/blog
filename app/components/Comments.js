export default function Comments({ article }) {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 border-t">
      <h2 className="text-2xl mb-4">Comments</h2>
      <p className="text-gray-600">Comments section for: {article.title}</p>
      {article.comments && article.comments.length > 0 ? (
        <ul className="mt-4 space-y-4">
          {article.comments.map((comment, index) => (
            <li key={index} className="border p-4 rounded">
              <p className="font-semibold">Anon user</p>
              <p>{comment.comment}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 mt-4">
          No comments yet. Be the first to comment!
        </p>
      )}
    </div>
  );
}
