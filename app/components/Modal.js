'use client';

import { useFormStatus } from 'react-dom';
import { update } from '../_lib/actions';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Modal({ onClose, post }) {
  const [error, setError] = useState('');

  const router = useRouter();

  async function handleEdit(formData) {
    setError('');
    formData.set('comments', JSON.stringify(post?.comments ?? []));
    const result = await update(formData);

    if (typeof result === 'string') {
      setError(result);
    } else {
      router.refresh();
      onClose();
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <form
        action={handleEdit}
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

        {error && <p className="text-red-500">{error}</p>}
        <div className="flex justify-end">
          <EditButton />
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

function EditButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`${
        pending
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-500 hover:bg-blue-600'
      }  text-white px-4 py-2 rounded mr-2 `}
    >
      {pending ? 'Confirming...' : 'Confirm'}
    </button>
  );
}
