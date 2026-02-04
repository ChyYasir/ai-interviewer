"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function Home() {
  const { data: session } = authClient.useSession();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if (session) {
    return (
      <div className="flex flex-col gap-4 max-w-sm mx-auto mt-20">
        <h2>Welcome, {session.user.name}!</h2>
        <p>Your email: {session.user.email}</p>
        <Button variant="default" onClick={() => authClient.signOut()}>
          Sign Out
        </Button>
      </div>
    );
  }

  const onSignUp = async () => {
    const { data, error } = await authClient.signUp.email(
      {
        name,
        email,
        password,
      },
      {
        onSuccess: (data) => {
          console.log("Sign up successful:", data);
          window.alert(
            "Sign up successful! Please check your email to verify your account.",
          );
        },
        onError: (error) => {
          console.error("Sign up error:", error);
          window.alert(`Sign up failed`);
        },
      },
    );
  };
  return (
    <div className="flex flex-col gap-4 max-w-sm mx-auto mt-20">
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="default" onClick={onSignUp}>
        Sign Up
      </Button>
    </div>
  );
}
