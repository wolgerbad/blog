import { auth, signOut } from '@/auth';
import { getPosts } from '../_lib/helpers';
import Button from '../components/Button';
import Modal from '../components/Modal';
import TableList from '../components/TableList';
import { logout } from '../_lib/actions';

export default async function Panel() {
  const session = await auth();
  const posts = await getPosts();
  const sortedPosts = posts.sort((a, b) => a.id - b.id);

  const name = session?.user?.name.split(' ').at(0);

  return (
    <div className="flex flex-col gap-4">
      <h1>Welcome to the admin panel {name}</h1>
      <p>Here you can manage your posts and users</p>
      <div>
        <table className="table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Article</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedPosts.map((post) => (
              <TableList post={post} key={post.id} />
            ))}
          </tbody>
        </table>
      </div>
      <form action={logout}>
        <button className="flex-start">Log out</button>
      </form>
    </div>
  );
}
