'use client';

import { useState } from 'react';
import Button from './Button';
import Modal from './Modal';
import { deleteArticle } from '../_lib/actions';
import { useFormStatus } from 'react-dom';

export default function TableList({ post }) {
  const [isOpen, setIsOpen] = useState(false);

  const { id, title, article } = post;
  const filteredArticle = article.slice(0, 50);

  return (
    <>
      <tr className="hover:bg-gray-50 transition-colors duration-150">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          #{id}
        </td>
        <td className="px-6 py-4 text-sm text-gray-900 font-medium">
          <div className="max-w-xs truncate" title={title}>
            {title}
          </div>
        </td>
        <td className="px-6 py-4 text-sm text-gray-600">
          <div className="max-w-xs truncate" title={article}>
            {filteredArticle}...
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
          <div className="flex items-center space-x-2">
            <Button
              onClick={() => setIsOpen(true)}
              variant="outline"
              className="px-3 py-1 text-xs"
            >
              ✏️ Edit
            </Button>
            <form action={async () => await deleteArticle(id)}>
              <DeleteButton />
            </form>
          </div>
        </td>
      </tr>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} post={post} />
      )}
    </>
  );
}

function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className={`${
        pending
          ? 'bg-gray-400 cursor-not-allowed'
          : 'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-red-500  hover:bg-red-600 focus:ring-red-500'
      } rounded-lg font-medium text-white px-6 py-3 text-xs`}
    >
      {pending ? '🗑️ Deleting...' : '🗑️ Delete'}
    </button>
  );
}
