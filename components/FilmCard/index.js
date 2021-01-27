import styles from "../../styles/Home.module.css";
import Image from "next/Image";
// import filmGuy from "../../public/film_guy.png";

// const myLoader = ({ src, width, quality }) => {
//   return `https://static.wikia.nocookie.net/cartoonica/images/c/cb/${src}?w=${width}&q=${
//     quality || 75
//   }`;
// };

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
