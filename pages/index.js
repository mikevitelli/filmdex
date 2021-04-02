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

        <div id="fb-root"></div>

        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0"
          nonce="AJlVc1v2"
        ></script>

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

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.container}>
        <div className={headerStyles.navContainer}>
          <div
            className={`nojs-show ${
              !session && loading ? headerStyles.loading : headerStyles.loaded
            }`}
          >
            {session && (
              <nav className={headerStyles.nav}>
                <ul className={headerStyles.headerUl}>
                  <li className={headerStyles.headerLi}>
                    <h4>Signed in as</h4>{" "}
                  </li>
                  <li
                    style={{
                      marginLeft: "50px",
                      marginRight: "50px",
                    }}
                    className={headerStyles.headerLi}
                  >
                    <strong>{session.user.email || session.user.name}</strong>
                  </li>

                  <li
                    className={headerStyles.headerLi}
                    style={{
                      marginRight: "50px",
                    }}
                  >
                    {session.user.image && (
                      <Image
                        className={headerStyles.image}
                        width={"50px"}
                        height={"50px"}
                        src={session.user.image}
                        eager
                      />
                    )}
                  </li>

                  <li className={headerStyles.headerLi}>
                    <a
                      href={`/api/auth/signout`}
                      className={headerStyles.buttonSignOut}
                      onClick={(e) => {
                        e.preventDefault();
                        signOut();
                      }}
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>

        {/* Lower portion */}
        <div
          className={`nojs-show ${
            !session && loading ? headerStyles.loading : headerStyles.loaded
          }`}
        >
          <div className={styles.container}>
            {!session && (
              <>
                <div className={styles.container}>
                  <h1 className={styles.title}>
                    Welcome to <a href="https://filmdex.app">filmDex</a>
                  </h1>

                  <br />

                  <p className={styles.description}>The PokeDex for film!</p>

                  <br />

                  <br />

                  <a
                    href={`/api/auth/signin`}
                    className={headerStyles.buttonSignIn}
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
                <Link href="/">
                  <a className={headerStyles.title}>filmDex</a>
                </Link>

                <div className={headerStyles.navContainer}>
                  <div className={headerStyles.linkContainer}>
                    <Link href="/dashboard">
                      <a className={headerStyles.link}>Dashboard &rarr;</a>
                    </Link>
                  </div>
                  <br />
                  <div className={headerStyles.linkContainer}>
                    <Link href="/films">
                      <a className={headerStyles.link}>Explore &rarr;</a>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
