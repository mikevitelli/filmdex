import { connectMongoDB } from "../../lib/mongodb";
import User from "../../models/user";
import { NextResponse } from "next/server";

export default async function POST (req, res) {
    const { name, email } = await req.body;
    await connectMongoDB();
    await User.create({name, email});
    return res.status(200).json({ message: "registered"})
};

