'use client';

import { auth } from '@/auth';
import Link from 'next/link';

export default function ReadMore({ url }) {
  return (
    <Link href={url} className="text-blue-600 hover:underline">
      read more...
    </Link>
  );
}
