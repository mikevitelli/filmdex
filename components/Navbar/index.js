import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Links = () => {
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
        <Link href="/auth/logs">
          <a>logs</a>
        </Link>
      </div>
    </>
  );
};




// import { useSession } from "next-auth/react"

// export default function Component() {
//   const { data: session, status } = useSession()

//   if (status === "authenticated") {
//     return <p>Signed in as {session.user.email}</p>
//   }

//   return <a href="/api/auth/signin">Sign in</a>
// }

const Navbar = () => {
  const { data: session, status } = useSession()



  if (status === "authenticated") {
    const [image, email, username] = [
      session.user.image,
      // session.user.email,
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
            Signed in as
            <div className="text-lg font-bold ">{username}</div>
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