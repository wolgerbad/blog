import { auth } from '@/auth';
import { getPosts } from '../_lib/helpers';
import TableList from '../components/TableList';
import TableHead from '../components/TableHead';
import Link from 'next/link';
import { headers } from 'next/headers';
import { signOut } from '../_lib/actions';
import { redirect } from 'next/navigation';

export const revalidate = 360;

export default async function Panel() {
  const posts = await getPosts();
  const sortedPosts = posts.sort((a, b) => a.id - b.id);

  const session = await auth.api.getSession({ headers: await headers() });

  const name = session?.user?.name.split(' ').at(0);

  if (!session) {
    redirect('/login');
  }

  if (session.user.role !== 'admin') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center py-16">
            <div className="mb-8">
              <div className="mx-auto w-24 h-24 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">🔒</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Access Restricted
              </h1>
              <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
                Sorry {name}, this admin panel is only accessible to
                administrators. You don&apos;t have the required permissions to
                view this page.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8 max-w-md mx-auto">
              <div className="flex items-center mb-3">
                <span className="text-orange-500 text-xl mr-3">⚠️</span>
                <h3 className="font-semibold text-orange-800">
                  Admin Access Required
                </h3>
              </div>
              <p className="text-orange-700 text-sm">
                Contact your system administrator if you believe you should have
                access to this page.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
              >
                🏠 Go to Home
              </Link>
              <form action={signOut} className="inline">
                <button className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium">
                  🚪 Log out
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {name}! 👋
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your blog posts and content from here
          </p>
        </div>

        <div className="mb-8">
          <Link href="/panel/create">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-md hover:shadow-lg font-medium">
              ✨ Create New Article
            </button>
          </Link>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Your Articles
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <TableHead />
              <tbody className="divide-y divide-gray-200">
                {sortedPosts.map((post) => (
                  <TableList post={post} key={post.id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <form action={signOut}>
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium">
              🚪 Log out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
