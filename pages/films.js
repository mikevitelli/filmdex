import styles from "../styles/Home.module.css";
// import FilmGrid from "../components/FilmGrid";
import { connectToDatabase } from "../util/mongodb";
import FilmCard from "../components/FilmCard";

export async function getStaticProps() {
  const { db } = await connectToDatabase();

  const films = await db.collection("films").find().toArray();

  return {
    props: {
      films: JSON.parse(JSON.stringify(films)),
    },
  };
}

const Films = ({ films }) => {
  return (
    <>
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
