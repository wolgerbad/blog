'use client';

import { useFormStatus } from 'react-dom';
import { signOut } from '../_lib/actions';

export default function LogOutForm() {
  return (
    <div className="mt-8 pt-6 border-t border-gray-200">
      <form action={signOut}>
        <LogOutButton />
      </form>
    </div>
  );
}

function LogOutButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className={`${
        pending
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-red-500 hover:bg-red-600 transition-colors duration-200 '
      }   text-white px-6 py-2 rounded-lg font-medium`}
    >
      {pending ? '🚪 Logging out...' : '🚪 Log out'}
    </button>
  );
}
