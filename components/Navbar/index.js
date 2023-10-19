import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Links = () => {

  return <>
    <div className="mr-4 text-center lg:text-center">
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow mx-5">
        <Link href="/">
          home
        </Link>
      </button>


      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow mx-5">
        <Link href="/auth/films">
          films
        </Link>
      </button>

      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow mx-5">
        <Link href="/auth/bookmarks">
          saved
        </Link>
      </button>

      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow mx-5">
        <Link href="/auth/logs">
          logs
        </Link>
      </button>

    </div>
  </>;
};

const Navbar = () => {
  const { data: session, status } = useSession()

  if (status === "authenticated") {
   const [image, username ] = [
      session.user.image,
      session.user.name,
    ];

  return (
    <>
      <header className="flex flex-col pt-5 px-10 pb-5 flex-wrap">
        <div className="grid grid-cols-2">
          <div className="col-start-1 col-end-3">
            <img className="h-24 w-24 rounded-full mx-0 mr-5" src={image} />
          </div>

          <div className="text-lg text-right col-start-5">
            Hello!
            <div className="text-lg font-bold ">
              <Link href="/auth/account">
               {username.split(' ')[0]}
              </Link>
              </div>
            <a
              href={`/api/auth/signout`}
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign out
            </a>
          </div>
        </div>
        <div className="mt-4 text-lg font-sans font-bold">
          <Links />
        </div>
      </header>
    </>
  );
};
}

export default Navbar;