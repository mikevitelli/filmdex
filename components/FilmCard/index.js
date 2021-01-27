import styles from "../../styles/Home.module.css";
import Image from "next/Image";
import "../../next.config";

const FilmCard = () => {
  return (
    <>
      <a className={styles.card}>
        <Image
          src="https://cdn.imgbin.com/16/7/19/imgbin-photographic-film-kodak-portra-photography-negative-video-roll-iUwXTjHmdhdz5TscBCqgcsbRG.jpg"
          width={100}
          height={100}
        />
        <h3>Title</h3>
        <h2>Description</h2>
      </a>
    </>
  );
};

export default FilmCard;
