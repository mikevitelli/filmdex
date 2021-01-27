import styles from "../../styles/Home.module.css";
import Image from "next/Image";

const FilmCard = () => {
  return (
    <>
      <a className={styles.card}>
        <Image src="/film_guy512.png" width={200} height={200} />
        <h3>Title</h3>
        <h2>Description</h2>
      </a>
    </>
  );
};

export default FilmCard;
