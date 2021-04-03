import Head from "next/head";
import styles from "../styles/Home.module.css";
import Login from "./auth/login";
import Films from "./films";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./signup";
import Dashboard from "./dashboard";
import { signIn, signOut, useSession } from "next-auth/client";
import headerStyles from "../styles/Header.module.css";
import Avatar from "@material-ui/core/Avatar";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [session, loading] = useSession();

  return (
    <>
      <Head>
        <title>FilmDex</title>

        <link rel="icon" href="/favicon.ico" />

        <script
          src="https://unpkg.com/@material-ui/core/umd/material-ui.production.min.js"
          crossOrigin="anonymous"
        ></script>

        <script
          src="https://unpkg.com/@material-ui/core@4.11.3/umd/material-ui.development.js"
          crossOrigin="true"
        ></script>

        <script
          src="https://unpkg.com/@material-ui/core@4.11.3/umd/material-ui.production.min.js"
          crossOrigin="true"
        ></script>

        <script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossOrigin="true"
        ></script>

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossOrigin="true"
        ></script>

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossOrigin="true"
        ></script>

        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
      </Head>

      {session && (
        <nav>
          <div className="flex p-10 justify-left">
            <img
              className="h-24 w-24 rounded-full mx-0 mr-5"
              src={session.user.image}
            />
            <div className="text-center md:text-left">
              <h2 className="text-lg">Signed in as</h2>
              <h2 className="text-lg font-bold">
                {session.user.email || session.user.name}
              </h2>
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
        </nav>
      )}

      {/* Lower portion */}

      {!session && (
        <>
          <div className="text-center md:text-left">
            <h1>
              Welcome to <a href="https://filmdex.app">filmDex</a>
            </h1>

            <br />

            <p>The PokeDex for film!</p>

            <br />

            <br />

            <a
              href={`/api/auth/signin`}
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign in
            </a>
          </div>
        </>
      )}

      {session && (
        <>
          <div className="text-center">
            <Link href="/dashboard">
              <a className="text-gray-600">Dashboard &rarr;</a>
            </Link>
            <br />
            <Link href="/films">
              <a className="text-gray-600">Explore &rarr;</a>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
