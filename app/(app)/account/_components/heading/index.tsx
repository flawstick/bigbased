"use client";

import React, { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  Separator,
} from "@/components/ui";
import Address from "@/app/_components/address";
import { type User } from "@privy-io/react-auth";
import ChangePfp from "./change-pfp";
import { Loader2, Calendar, Wallet, Fingerprint } from "lucide-react";
import { pfpURL } from "@/lib/pfp";

interface Props {
  user: User;
}

const AccountHeading: React.FC<Props> = ({ user }) => {
  const [isUploading, setIsUploading] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-6 w-full">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
        Account Overview
      </h1>
      <Card className="overflow-hidden rounded-xl bg-white dark:bg-zinc-900">
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16 border-4 border-gray-100 dark:border-gray-700 shadow-lg">
                <AvatarFallback className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                  {isUploading ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    user.wallet?.address.slice(0, 2)
                  )}
                </AvatarFallback>
                <AvatarImage src={pfpURL(user)} />
              </Avatar>
              <div>
                {user.wallet ? (
                  <Address
                    address={user.wallet.address}
                    className="text-lg font-bold text-gray-800 dark:text-gray-200"
                  />
                ) : (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    No wallet connected
                  </p>
                )}
                <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-1" />
                  Joined on {user.createdAt.toLocaleDateString()}
                </div>
              </div>
            </div>
            <ChangePfp
              user={user}
              isUploading={isUploading}
              setIsUploading={setIsUploading}
            />
          </div>

          <Separator className="bg-gray-200 dark:bg-gray-700" />

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Fingerprint className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                User ID
              </p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 pl-7">
              {user.id.slice(10)}
            </p>
          </div>

          <Separator className="bg-gray-200 dark:bg-gray-700" />

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Wallet className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Connected Wallets
              </p>
            </div>
            {user.linkedAccounts
              .filter((account) => account.type === "wallet")
              .map((account) => (
                <p
                  className="text-sm text-gray-600 dark:text-gray-400 pl-7"
                  key={account.address}
                >
                  {account.address}
                </p>
              ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AccountHeading;
