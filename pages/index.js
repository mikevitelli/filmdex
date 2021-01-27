import Head from "next/head";
import styles from "../styles/Home.module.css";
import Login from "./login";
import Films from "./films";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FilmDex</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossorigin
        ></script>

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossorigin
        ></script>

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin
        ></script>

        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://filmdex.app">FilmDex</a>
        </h1>

        <p className={styles.description}>The PokeDex for film!</p>

        <div className={styles.grid}>
          <a href="/login" component={Login} className={styles.card}>
            <h3>Login &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Signup &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="/films" component={Films} className={styles.card}>
            <h3>Explore &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>About &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
