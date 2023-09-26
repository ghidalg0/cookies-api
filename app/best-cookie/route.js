import { NextResponse } from "next/server";

export async function GET() {
  const cookie = {
    name: "Chocolate Cookie",
    description: "Best cookie ever, so yummy 🍪",
    price: 2.99,
    picture: "choco",
  };

  return NextResponse.json(cookie).status(200);
}
