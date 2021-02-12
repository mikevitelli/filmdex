import Head from "next/head";

import styles from "../styles/Home.module.css";
import FilmCards from "../components/FilmCards";
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

const Films = (props) => {
  return (
    <>
      <Head>
        <title>Films</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        {/* HEADER */}
        <h1 className={styles.title} style={{ marginTop: "15px" }}>
          <a href="/">Films</a>
        </h1>

        {/* GRID COMPONENT */}

        <FilmCards {...props} />
      </div>
    </>
  );
};

export default Films;
