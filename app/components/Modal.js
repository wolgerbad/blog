'use client';

import { update } from '../_lib/actions';

export default function Modal({ onClose, post }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <form
        action={async (formData) => {
          formData.set('comments', JSON.stringify(post?.comments ?? []));
          await update(formData);
        }}
        className="bg-white p-6 rounded shadow-lg w-1/3"
      >
        <h2 className="text-xl mb-4">Title</h2>
        <label className="block mb-2">
          Name:
          <input
            type="text"
            className="border border-gray-300 p-2 w-full mt-1"
            defaultValue={post?.title}
            name="title"
          />
        </label>
        <label className="block mb-4">
          Article:
          <textarea
            className="border border-gray-300 p-2 w-full mt-1"
            rows="8"
            cols="50"
            defaultValue={post?.article}
            name="article"
          ></textarea>
        </label>
        <input type="hidden" name="id" value={post.id} />
        <input type="hidden" name="image" value={post.image} />

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
          >
            Confirm
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
