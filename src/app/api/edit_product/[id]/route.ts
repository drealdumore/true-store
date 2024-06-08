import Product from "@/lib/models/Products";
import { connectMongoDB } from "@/lib/mongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, params: any) {
  try {
    const body = await req.json();
    const id = params.params.id;

    const { name, category, price } = body;

    await connectMongoDB();

    const data = await Product.findByIdAndUpdate(id, {
      name,
      category,
      price,
    });

    return NextResponse.json({ msg: "updated successfully!!", data });
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
