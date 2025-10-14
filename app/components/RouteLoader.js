'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RouteLoader() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const stop = () => setLoading(false);
    router.events?.on('routeChangeStart', start);
    router.events?.on('routeChangeComplete', stop);
    router.events?.on('routeChangeError', stop);
    return () => {
      router.events?.off('routeChangeStart', start);
      router.events?.off('routeChangeComplete', stop);
      router.events?.off('routeChangeError', stop);
    };
  }, [router]);

  return loading ? (
    <div className="fixed inset-0 flex items-center justify-center bg-background/70 z-50">
      <div className="h-6 w-6 animate-spin border-4 border-primary border-t-transparent rounded-full" />
    </div>
  ) : null;
}
