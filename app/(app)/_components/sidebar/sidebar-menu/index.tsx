"use client";

import React from "react";

import { SidebarMenu as SidebarMenuUI } from "@/components/ui";

import ChatsGroup from "./chats-group";
import AccountButton from "./account-button";

const SidebarMenu: React.FC = () => {
  return (
    <SidebarMenuUI className="ml-2">
      <ChatsGroup />
      <AccountButton />
    </SidebarMenuUI>
  );
};

export default SidebarMenu;
