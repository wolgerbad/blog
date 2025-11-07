'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/articles', label: 'Articles' },
];

export default function Navbar({ session }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isAuthenticated = Boolean(session?.user);

  const cta = isAuthenticated
    ? {
        href: '/panel',
        label: 'Admin Panel',
        gradient: 'from-blue-500 to-purple-500',
        hover: 'hover:from-blue-600 hover:to-purple-600',
      }
    : {
        href: '/login',
        label: 'Login',
        gradient: 'from-green-500 to-blue-500',
        hover: 'hover:from-green-600 hover:to-blue-600',
      };

  return (
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
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  prefetch
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              className={`hidden md:inline-flex items-center gap-2 bg-gradient-to-r ${cta.gradient} text-white px-4 py-2 rounded-lg ${cta.hover} transition-all duration-200 shadow-md hover:shadow-lg`}
              href={cta.href}
              prefetch
            >
              <span className="font-medium">{cta.label}</span>
            </Link>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-controls="mobile-nav"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Toggle navigation</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden border-t border-gray-200 bg-white/95 shadow-inner transition-all duration-200 ease-in-out overflow-hidden ${
          isOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              prefetch
            >
              {label}
            </Link>
          ))}
          <Link
            className={`inline-flex w-full justify-center items-center gap-2 bg-gradient-to-r ${cta.gradient} text-white px-4 py-2 rounded-lg ${cta.hover} transition-all duration-200 shadow-md hover:shadow-lg`}
            href={cta.href}
            prefetch
          >
            <span className="font-medium">{cta.label}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
