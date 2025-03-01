"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/logo";
import ChatInput from "./input";
import StarterButtons from "./starter-buttons";

const EmptyChat: React.FC = () => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center w-full h-full px-4",
      )}
    >
      <div className="flex flex-col items-center justify-center w-full max-w-2xl gap-8 md:gap-12">
        <div className="flex flex-col gap-6 items-center justify-center">
          <Logo className="w-24 h-24 shadow-lg" />
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-center text-3xl text-neutral-800 dark:text-neutral-100">
              How can <span className="text-brand-600 font-extrabold">We</span>{" "}
              help you?
            </h1>
            <p className="text-center text-base text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
              Start a conversation with a based herd of agents to traverse the
              crypto universe.
            </p>
          </div>
        </div>
        <ChatInput />
        <StarterButtons />
      </div>
    </div>
  );
};

export default EmptyChat;
