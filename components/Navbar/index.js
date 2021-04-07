import { signOut, useSession } from "next-auth/client";
import Link from "next/link";

export const Links = () => {
  let pages = [];
  pages = [
    { href: "/dashboard", title: "dash" },
    { href: "/bookmarks", title: "bookmarks" },
    { href: "/", title: "home" },
  ];
  return (
    <>
      <div className="mr-4 text-center lg:text-left">
        <Link href="/">
          <a>home</a>
        </Link>{" "}
        /{" "}
        <Link href="/auth/films">
          <a>films</a>
        </Link>{" "}
        /{" "}
        <Link href="/auth/bookmarks">
          <a>bookmarks</a>
        </Link>{" "}
        /{" "}
        <Link href="/">
          <a>logs</a>
        </Link>
      </div>
    </>
  );
};

const Navbar = () => {
  const [session, loading] = useSession();

  const image = session.user.image;
  const email = session.user.email;
  const username = session.user.name;

  return (
    <>
      <header className="flex flex-col pt-5 px-10 pb-5 flex-wrap">
        <div className="grid grid-cols-2">
          <div className="col-start-1 col-end-3">
            <img className="h-24 w-24 rounded-full mx-0 mr-5" src={image} />
          </div>

          <div className="text-lg text-right col-start-5">
            Signed in as
            <div className="text-lg font-bold ">
              {email.substring(0, 20) || username}
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

export default Navbar;
