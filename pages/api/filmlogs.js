import { connectMongoDB } from "../../lib/mongodb";
import FilmLog from "../../models/filmlog";

export default async function POST(req, res) {
  const { location, cameraSettings, filmStockId, other } = await req.body;

  await connectMongoDB();

  await FilmLog.create({
    location,
    cameraSettings,
    filmStockId,
    other,
  });

  console.log("Film Logged");

  return res.status(200).json({ message: "Film Logged!" });
}
