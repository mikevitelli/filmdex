import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Links = () => {
  let pages = [];
  pages = [
    { href: "/dashboard", title: "dash" },
    { href: "/bookmarks", title: "bookmarks" },
    { href: "/", title: "home" },
  ];
  return <>
    <div className="mr-4 text-center lg:text-left">
      <Link href="/">
        home
      </Link>{" "}
      /{" "}
      <Link href="/auth/films">
        films
      </Link>{" "}
      /{" "}
      <Link href="/auth/bookmarks">
        bookmarks
      </Link>{" "}
      /{" "}
      <Link href="/auth/logs">
        logs
      </Link>
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