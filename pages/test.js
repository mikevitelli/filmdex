import { connectToDatabase } from "../util/mongodb";

export default function Films({ films }) {
  return (
    <div>
      <h1>Films</h1>

      <ul>
        {films.map((film) => (
          <li>
            <h2>{film.name}</h2>
            <h3>{film.brand}</h3>
            <p>{film.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const films = await db.collection("films").find({}).toArray();
  console.log("worked");

  return {
    props: {
      films: JSON.parse(JSON.stringify(films)),
    },
  };
}
