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

export default function Home() {
  const [session, loading] = useSession();

  return (
    <div className={styles.container}>
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

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://filmdex.app">filmDex</a>
        </h1>

        <br></br>

        <p className={styles.description}>The PokeDex for film!</p>

        <br />

        <div className={headerStyles.signedInStatus}>
          <p
            className={`nojs-show ${
              !session && loading ? headerStyles.loading : headerStyles.loaded
            }`}
          >
            {!session && (
              <>
                <a
                  href={`/api/auth/signin`}
                  className={headerStyles.buttonPrimary}
                  onClick={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                >
                  Sign in
                </a>
              </>
            )}
            {session && (
              <>
                <h3 className={headerStyles.signedInText}>
                  <h4>Signed in as</h4> <br />
                  <strong>{session.user.email || session.user.name}</strong>
                  <br />
                  <br />
                  <br />
                  <a
                    href={`/api/auth/signout`}
                    className={headerStyles.buttonPrimary}
                    onClick={(e) => {
                      e.preventDefault();
                      signOut();
                    }}
                  >
                    Sign out
                  </a>
                  <br />
                  <br />
                  {/* <a
                    href="/dashboard"
                    component={Dashboard}
                    className={headerStyles.button}
                  >
                    <h3>Dashboard &rarr;</h3>
                  </a>
                  <br />
                  <a
                    href="/films"
                    component={Films}
                    className={headerStyles.button}
                  >
                    <h3>Explore &rarr;</h3>
                  </a> */}
                </h3>
              </>
            )}
          </p>
        </div>
        <div className={headerStyles.signedInStatus}>
          {" "}
          <p
            className={`nojs-show ${
              !session && loading ? headerStyles.loading : headerStyles.loaded
            }`}
          >
            {session && (
              <>
                <h3 className={headerStyles.signedInText}>
                  <a
                    href="/dashboard"
                    component={Dashboard}
                    className={headerStyles.button}
                  >
                    <h3>Dashboard &rarr;</h3>
                  </a>
                  <br />
                  <a
                    href="/films"
                    component={Films}
                    className={headerStyles.button}
                  >
                    <h3>Explore &rarr;</h3>
                  </a>
                </h3>
              </>
            )}
          </p>
        </div>
      </main>
    </div>
  );
}
