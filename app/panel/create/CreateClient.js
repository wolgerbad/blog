'use client';

import { createNewPost } from '@/app/_lib/actions';
import { useState } from 'react';

import { useFormStatus } from 'react-dom';

export default function CreateClient() {
  const [error, setError] = useState('');

  async function handleNewPost(formData) {
    const postError = await createNewPost(formData);

    postError ? setError(postError) : setError('');
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create New Article
          </h1>
          <p className="text-gray-600">Share your thoughts with the world</p>
        </div>

        <form action={handleNewPost} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Article Title
            </label>
            <input
              type="text"
              name="title"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your article title..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Article Content
            </label>
            <textarea
              name="article"
              minLength={100}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              rows={12}
              placeholder="Write your article content here..."
            />
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <div className="flex items-center">
              <input
                type="file"
                name="image"
                className="hidden"
                id="image-upload"
                accept="image/*"
                required
              />
              <label
                htmlFor="image-upload"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg cursor-pointer transition-colors duration-200 font-medium"
              >
                📷 Upload Image
              </label>
            </div>
            {error && <p className="text-red-800">{error}</p>}
            <CreateArticleButton />
          </div>
        </form>
      </div>
    </div>
  );
}

function CreateArticleButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className={`${
        pending
          ? 'bg-gray-400 cursor-not-allowed'
          : 'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-md hover:shadow-lg focus:ring-blue-500'
      } rounded-lg font-medium px-8 py-3 text-white `}
    >
      {pending ? 'Creating Article...' : '✨ Create Article'}
    </button>
  );
}
