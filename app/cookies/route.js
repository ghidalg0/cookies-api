import { NextResponse } from "next/server";

export async function GET() {
  const cookies = [
    {
      name: "Almond Cookie",
      description: "Crispy almonds, so yummy!",
      price: "2.75",
      picture: "almond",
    },
    {
      name: "Honey Cookie",
      description: "For honey lovers, so yummy!",
      price: "2.50",
      picture: "honey",
    },
    {
      name: "White Chocolate Cookie",
      description: "Sweet white chocolate, so yummy!",
      price: "2.75",
      picture: "white",
    },
    {
      name: "Caramel Cookie",
      description: "Sweet caramel, so yummy!",
      price: "1.99",
      picture: "caramel",
    },
    {
      name: "Hazelnut Cookie",
      description: "Hazelnut cream, so yummy!",
      price: "2.75",
      picture: "nuts",
    },
    {
      name: "Caramel Cookie",
      description: "Sweet caramel, so yummy!",
      price: "1.99",
      picture: "caramel",
    },
  ];

  return NextResponse.json(cookies).status(200);
}
