import { connectToDatabase } from "../../util/mongodb";
export default async (req, res) => {
  const { db } = await connectToDatabase();
  const films = await db.collection("films").find().toArray();
  res.json(films);
};
