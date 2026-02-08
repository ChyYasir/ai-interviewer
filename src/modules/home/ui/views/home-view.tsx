import { redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "@/components/auth/sign-out-button";

export const HomeView = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // If user is not authenticated, redirect to sign-in
  if (!session) {
    redirect("/sign-in");
  }

  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl font-bold">Welcome, {session.user.name}!</h1>
      <p className="text-gray-600">You are logged in to the AI Interviewer</p>
      <div className="flex gap-2 justify-center">
        <Link href="/dashboard">
          <Button className="cursor-pointer">Go to Dashboard</Button>
        </Link>
        <SignOutButton />
      </div>
    </div>
  );
};
