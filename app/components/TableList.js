'use client';

import { useState } from 'react';
import Button from './Button';
import Modal from './Modal';
import { deleteArticle } from '../_lib/actions';

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
            <Button
              variant="danger"
              className="px-3 py-1 text-xs"
              onClick={() => deleteArticle(id)}
            >
              🗑️ Delete
            </Button>
          </div>
        </td>
      </tr>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} post={post} />
      )}
    </>
  );
}
