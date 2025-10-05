import { auth } from '@/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import LoginForm from './LoginForm';

export default async function Login() {
  const session = await auth.api.getSession({ headers: await headers() });

  console.log('login session:', session);

  if (session?.user) {
    redirect('/panel');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-md w-full mx-4">
        <LoginForm />
      </div>
    </div>
  );
}
