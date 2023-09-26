export async function GET() {
  const cookie = {
    name: "Chocolate Cookie",
    description: "Best cookie ever, so yummy 🍪",
    price: 2.99,
    picture: "choco",
  };

  return new Response(JSON.stringify({ cookie }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
