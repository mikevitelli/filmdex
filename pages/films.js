import Head from "next/head";

import styles from "../styles/Home.module.css";
import FilmCard from "../components/FilmCard";

// // TO USE DATABASE DIRECTLY
// import { connectToDatabase } from "../util/mongodb";
// export async function getStaticProps() {
//   const { db } = await connectToDatabase();

//   const films = await db.collection("films").find().toArray();

//   return {
//     props: {
//       films: JSON.parse(JSON.stringify(films)),
//     },
//   };
// }

export async function getStaticProps() {
  const res = await fetch(`https://filmapi.vercel.app/api/films`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { films: JSON.parse(JSON.stringify(data)) },
  };
}

const Films = ({ films }) => {
  return (
    <>
      <Head>
        <title>Films</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <a href="/">Films</a>
        </h1>
        <div className={styles.grid}>
          {films.map((film) => (
            <FilmCard {...film} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Films;
