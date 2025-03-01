import Chat from "./_components/chat";

import NotLoggedInAlert from "./_components/not-logged-in-alert";

export default function Home() {
  return (
    <div className="flex-1 h-0 overflow-y-hidden w-full">
      <Chat />
      <NotLoggedInAlert />
    </div>
  );
}
