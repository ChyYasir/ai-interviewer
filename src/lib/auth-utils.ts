import { auth } from "@/lib/auth";

export async function getSession() {
  const session = await auth.api.getSession();
  return session;
}
