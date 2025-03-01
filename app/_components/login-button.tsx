"use client";
import React from "react";
import { useLogin, usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";

const LoginButton: React.FC = () => {
  const router = useRouter();
  const { authenticated, ready } = usePrivy();
  const { login } = useLogin({
    onComplete: (_, __, wasAlreadyAuthenticated) => {
      if (!wasAlreadyAuthenticated) {
        router.replace("/chat");
      }
    },
  });

  const handleLogin = () => {
    if (!authenticated) login();
    else router.replace("/chat");
  };

  // If not ready to show or already logged in, don't show the button
  if (!ready) return null;

  return (
    <button
      onClick={handleLogin}
      className="hidden md:block rounded-full bg-zinc-100 px-4 py-2 font-medium text-zinc-900
                 transition-all duration-300 hover:bg-zinc-600 border-2 border-zinc-900
                 hover:border-zinc-800"
    >
      {authenticated ? "Go to chat" : "Log in"}
    </button>
  );
};

export default LoginButton;
