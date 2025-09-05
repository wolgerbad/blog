'use client';

import { useState } from 'react';
import Button from './Button';
import Modal from './Modal';
import { deletePost } from '../_lib/helpers';

export default function TableList({ post }) {
  const [isOpen, setIsOpen] = useState(false);

  const { id, title, article } = post;
  const filteredArticle = article.slice(0, 30);
  return (
    <>
      <tr>
        <td className="border border-gray-300 px-4 py-2">{id}</td>
        <td className="border border-gray-300 px-4 py-2">{title}</td>
        <td className="border border-gray-300 px-4 py-2">
          {filteredArticle}...
        </td>
        <td className="border border-gray-300 px-4 py-2">
          <Button onClick={() => setIsOpen(true)}>Edit</Button> /{' '}
          <Button
            variant="danger"
            className="ml-2"
            onClick={() => deletePost(id)}
          >
            Delete
          </Button>
        </td>
      </tr>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} post={post} />
      )}
    </>
  );
}
