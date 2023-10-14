import { signIn, signOut, useSession } from "next-auth/react";

const Welcome = () => {
  const { data: session } = useSession();
  return (
    <>
      <div className="containter mx-auto my-80 align-middle text-center">
        <div
          className="text-5xl font-sans
      mb-5 "
        >
          {/* Welcome to{" "} */}
          <div className="text-gray-600">
            <a href="/">filmDex</a>
          </div>{" "}
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
    </>
  );
};

export default Welcome;
