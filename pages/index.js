import Head from "next/head";
import styles from "../styles/Home.module.css";
import Login from "./login";
import Films from "./films";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./signup";

export default function Home() {
  return (
    <div className={styles.container}>
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

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://filmdex.app">filmDex</a>
        </h1>

        <br></br>

        <p className={styles.description}>The PokeDex for film!</p>

        <div className={styles.grid}>
          <a href="/films" component={Films} className={styles.card}>
            <h3>Explore &rarr;</h3>
            <p>Discover new types of film and much more! </p>
          </a>

          <a href="https://mikevitelli.info" className={styles.card}>
            <h3>About &rarr;</h3>
            <p>Learn more about FilmDex and the team behind it!</p>
          </a>

          <a href="/login" component={Login} className={styles.card}>
            <h3>Login &rarr;</h3>
            <p>Login to add more films to our database, comment, and more!</p>
          </a>

          <a href="/signup" component={SignUp} className={styles.card}>
            <h3>Sign Up &rarr;</h3>
            <p>Sign up for an account to become a verified user!</p>
          </a>
        </div>
      </main>
    </div>
  );
}
