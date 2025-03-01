"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  Button,
  Logo,
} from "@/components/ui";
import { useExperimentalConfirmed } from "@/app/(app)/_hooks";
import { BeakerIcon, ShieldCheckIcon } from "lucide-react";

const ExperimentalAlertDialog: React.FC = () => {
  const { confirmed, confirm } = useExperimentalConfirmed();

  return (
    <AlertDialog open={!confirmed}>
      <AlertDialogHeader className="hidden">
        <AlertDialogTitle>Confirm Experimental Features</AlertDialogTitle>
        <AlertDialogDescription>
          Please confirm to continue
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogContent className="overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-grid-gray-900/20" />
        </div>

        <div className="relative flex flex-col items-center justify-center p-6 text-center space-y-6">
          <div className="flex items-center justify-center w-20 h-20 bg-brand-50 dark:bg-brand-950/50 rounded-xl">
            <Logo className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <BeakerIcon className="w-5 h-5 text-brand-500" />
              <h1 className="text-2xl font-bold">Welcome to BigBased Beta</h1>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                You&apos;re about to experience cutting-edge features that are
                still under development.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Responses may be unexpected or contain content you might
                disagree with.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4 w-full">
            <Button
              variant="brand"
              size="lg"
              className="w-full max-w-xs group relative overflow-hidden"
              onClick={confirm}
            >
              <div className="flex items-center justify-center space-x-2">
                <ShieldCheckIcon className="w-4 h-4" />
                <span>I Understand, Continue</span>
              </div>
            </Button>
            <p className="text-xs text-gray-500 dark:text-gray-400 max-w-xs">
              By continuing, you acknowledge that you&apos;re accessing beta
              features
            </p>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ExperimentalAlertDialog;
