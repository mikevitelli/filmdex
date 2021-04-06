import { signIn, signOut, useSession } from "next-auth/client";

const Welcome = () => {
  const [session, loading] = useSession();

  return (
    <div className="text-center h-screen align-middle content-center">
      <div>
        Welcome to <a href="https://filmdex.app">filmDex</a>
      </div>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mx-5"
        href={`/api/auth/signin`}
        onClick={(e) => {
          e.preventDefault();
          signIn();
        }}
      >
        Sign in
      </button>
    </div>
  );
};

export default Welcome;
