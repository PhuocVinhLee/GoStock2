// pages/api/auth/login.ts
import { fakeUsers } from "@/lib/fakeUsers";
import { sign } from "jsonwebtoken";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = fakeUsers.find((user) => user.email === email);

  if (!user) {
    return new Response(
      JSON.stringify({ message: "Invalid email" }),
      {
        status: 401,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  if (user.password !== password) {
    return new Response(
      JSON.stringify({ message: "Invalid password" }),
      {
        status: 401,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const token = sign({ email: user.email }, "it-lost-time", {
    expiresIn: "23h", // Set token expiration
  });

  // Set the token in an HTTP-only cookie
  return new Response(
    JSON.stringify({ message: "Login successful" }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": `authToken=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=3600`, // Set additional cookie options
      },
    }
  );
}
