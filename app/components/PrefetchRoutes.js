'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PrefetchRoutes() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/about');
    router.prefetch('/articles');
    router.prefetch('/login');
    router.prefetch('/panel');
  }, [router]);

  return null;
}
