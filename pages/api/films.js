import { connectToDatabase } from "../../util/mongodb";
export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const films = await db.collection("films").find({}).toArray();

  return {
    props: {
      films: JSON.parse(JSON.stringify(films)),
    },
  };
}
