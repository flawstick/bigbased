"use client";

import posthog from "posthog-js";

import { PostHogProvider as PHProvider } from "posthog-js/react";
import React from "react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
  });
}

interface Props {
  children: React.ReactNode;
}

export const PostHogProvider: React.FC<Props> = ({ children }) => {
  return <PHProvider client={posthog}>{children}</PHProvider>;
};
