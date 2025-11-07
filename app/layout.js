import localFont from 'next/font/local';
import './globals.css';
import { auth } from '@/auth';
import { headers } from 'next/headers';
import PrefetchRoutes from './components/PrefetchRoutes';
import RouteLoader from './components/RouteLoader';
import Navbar from './components/Navbar';

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

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen`}
      >
        <RouteLoader />
        <PrefetchRoutes />
        <Navbar session={session} />
        <main className="flex-grow">{children}</main>

        <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <p className="text-gray-600">
                &copy; Next Blog | by{' '}
                <a
                  href="https://github.com/wolgerbad"
                  className="hover:underline"
                >
                  Emir Işık
                </a>
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
