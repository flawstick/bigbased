"use client";

import React from "react";
import { useLogin } from "@privy-io/react-auth";
import { Button, Card } from "@/components/ui";
import { Lock } from "lucide-react";

const NotLoggedIn: React.FC = () => {
  const { login } = useLogin();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <Card className="w-full max-w-md overflow-hidden">
        <div className="p-8 flex flex-col items-center space-y-6">
          <div className="rounded-full bg-gray-100 dark:bg-gray-800 p-3">
            <Lock className="w-8 h-8 text-gray-600 dark:text-gray-300" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              Account Access Required
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm mx-auto">
              To view your account details and access all features, please log
              in using your preferred method.
            </p>
          </div>
          <Button
            className="w-full bg-gray-800 hover:bg-gray-700 text-white dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
            onClick={() => login()}
          >
            Log in to Your Account
          </Button>
        </div>
        <div className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            By logging in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default NotLoggedIn;
