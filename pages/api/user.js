import { connectMongoDB } from "../../lib/mongodb";
import User from "../../models/user";

export default async function POST(req, res) {
  const { name, email } = await req.body;
  await connectMongoDB();
  await User.create({ name, email });
  console.log("User Registered");
  return res.status(200).json({ message: "User registered" });
}
