'use server'
import { BASE_URL } from "@/constants";
import { User } from "@/types";
import { cookies } from 'next/headers';
export async function retrieveUserInfo(
  role: "admin" | "cashier" = "admin"
): Promise<User> {
  console.log("diosmio");
  const session = cookies().get("SESSION_TOKEN")?.value;
  console.log("session", session);

  if (role === "admin") {
    const response = await fetch(`${BASE_URL}/admin/me`, {
      headers: {
        Cookie: `SESSION_TOKEN=${session}`,
      },
    });
    const user = await response.json();
    console.log("info del usuario:", user);
    return user;
  } else {
    const response = await fetch(`${BASE_URL}/cashier/me`, {
      headers: {
        Cookie: `SESSION_TOKEN=${session}`,
      },
    });
    const user = await response.json();
    console.log("info del usuario:", user);
    return user;
  }
}