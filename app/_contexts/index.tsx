"use client";

import { Analytics } from "@vercel/analytics/react"

import { PrivyProvider } from "./privy";
import { ColorModeProvider } from "./color-mode";
import { PostHogProvider } from "./posthog";

interface Props {
    children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
    return (
        <PostHogProvider>
            <PrivyProvider>
                <ColorModeProvider>
                    <Analytics />
                    {children}
                </ColorModeProvider>
            </PrivyProvider>
        </PostHogProvider>
    )
}

export default Providers;

export * from "./color-mode"