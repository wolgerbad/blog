'use client';

import { createNewPost } from '@/app/_lib/actions';

import Button from '@/app/components/Button';

export default function CreateClient() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create New Article
          </h1>
          <p className="text-gray-600">Share your thoughts with the world</p>
        </div>

        <form action={createNewPost} className="space-y-6">
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

            <Button className="px-8 py-3">✨ Create Article</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
