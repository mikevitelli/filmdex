import styles from "../styles/Home.module.css";
import FilmGrid from "../components/FilmGrid";
import { connectToDatabase } from "../util/mongodb";

const Films = (props) => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <a href="https://filmdex.app">Films</a>
        </h1>
        <div className={styles.grid}>
          <FilmGrid {...props} />
        </div>
      </div>
    </>
  );
};

export default Films;

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const films = await db.collection("films").find().toArray();

  return {
    props: {
      films: JSON.parse(JSON.stringify(films)),
    },
  };
}
