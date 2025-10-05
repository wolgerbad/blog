'use client';

import { postComment } from '../_lib/actions';

export default function Comments({ post, session }) {
  const { id, title, comments } = post;

  async function handleComment(formData) {
    const name = formData.get('name');
    const comment = formData.get('comment');

    await postComment(id, name, comment);
  }

  return (
    <div className="mt-8 pt-6 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Comments</h2>
      <p className="text-gray-600 mb-6">
        Share your thoughts on:{' '}
        <span className="font-semibold text-gray-900">{title}</span>
      </p>

      {session?.user ? (
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Leave a Comment
          </h3>
          <form action={handleComment} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
            <textarea
              name="comment"
              rows="3"
              placeholder="Your comment..."
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Post Comment
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center">
            <p className="text-yellow-800 font-medium">
              You must be logged in to comment
            </p>
          </div>
        </div>
      )}

      {comments && comments.length > 0 ? (
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-4 border border-gray-200"
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  A
                </div>
                <span className="ml-3 font-semibold text-gray-900">
                  {comment.name}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed">{comment.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 bg-gray-50 rounded-lg border border-gray-200">
          <div className="text-gray-400 text-4xl mb-4">💬</div>
          <p className="text-gray-500 text-lg">
            No comments yet. Be the first to share your thoughts!
          </p>
        </div>
      )}
    </div>
  );
}
