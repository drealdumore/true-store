import Product from "@/lib/models/Products";
import { connectMongoDB } from "@/lib/mongoConnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();

    const data = await Product.find();

    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err,
        msg: "something went wrong!",
      },
      { status: 400 }
    );
  }
}
