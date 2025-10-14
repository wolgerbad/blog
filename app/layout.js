import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';
import { auth } from '@/auth';
import { headers } from 'next/headers';
import PrefetchRoutes from './components/PrefetchRoutes';
import RouteLoader from './components/RouteLoader';
import Image from 'next/image';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Next Blog',
  description: 'A beautiful and modern blog platform',
};

export default async function RootLayout({ children }) {
  const session = await auth.api.getSession({ headers: await headers() });
  console.log(session);

  const userImage = session?.user?.image;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen`}
      >
        <RouteLoader />
        <PrefetchRoutes />
        <nav className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <Link
                  href="/"
                  className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  prefetch
                >
                  Next Blog
                </Link>
                <div className="hidden md:flex space-x-6">
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                    prefetch
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                    prefetch
                  >
                    About
                  </Link>
                  <Link
                    href="/articles"
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                    prefetch
                  >
                    Articles
                  </Link>
                </div>
              </div>
              {session?.user ? (
                <Link
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-md hover:shadow-lg"
                  href="/panel"
                  prefetch
                >
                  <span className="font-medium">Admin Panel</span>
                </Link>
              ) : (
                <Link
                  className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-md hover:shadow-lg"
                  href="/login"
                  prefetch
                >
                  <span className="font-medium">Login</span>
                </Link>
              )}
            </div>
          </div>
        </nav>
        <main className="flex-grow">{children}</main>

        <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <p className="text-gray-600">
                &copy; {new Date().getFullYear()} Modern Blog. All rights
                reserved.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Built with Next.js and Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
