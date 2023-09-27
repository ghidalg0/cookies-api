import { NextResponse } from "next/server";

export async function GET() {
  const cookie = {
    name: "Chocolate Cookie",
    description: "Best cookie ever, so yummy 🍪",
    price: 2.99,
    picture: "choco",
  };

  // Add a delay of 2 seconds before sending the response
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Use NextResponse to set the JSON response and status code
  return NextResponse.json(cookie);
}
