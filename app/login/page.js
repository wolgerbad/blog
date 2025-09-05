import { login } from '../_lib/actions';

export default function Login() {
  return (
    <div className="text-center ">
      <h1 className="mb-4">Press the button below to Sign In with Google!</h1>
      <form action={login}>
        <button className="bg-black/60 p-4 text-white font-bold rounded-md">
          🔐 Sign in with Google!
        </button>
      </form>
    </div>
  );
}
