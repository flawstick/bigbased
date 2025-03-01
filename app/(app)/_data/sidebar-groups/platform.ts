import { SidebarGroup } from "../../_types/sidebar";

export const platformGroup: SidebarGroup = {
  label: "Platform",
  items: [
    {
      icon: "MessageSquare",
      label: "Chat",
      href: "/chat",
    },
    {
      icon: "Book",
      label: "Docs",
      href: "https://docs.bigbased.ai",
      external: true,
    },
    {
      icon: "Twitter",
      label: "Follow Us",
      href: "https://x.com/bigbased",
      external: true,
    },
    {
      icon: "Github",
      label: "Source Code",
      href: "https://github.com/flawstick/bigbased",
      external: true,
    },
  ],
};
