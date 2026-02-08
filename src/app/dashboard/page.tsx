import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "@/components/auth/sign-out-button";

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // If user is not authenticated, redirect to sign-in
  if (!session) {
    redirect("/sign-in");
  }

  return (
    <div className="flex flex-col gap-4 max-w-2xl mx-auto mt-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome, {session.user.name}!
        </h1>
        <p className="text-gray-600 mb-6">You are successfully logged in.</p>
        <SignOutButton />
      </div>
    </div>
  );
}
