import { Bell } from "lucide-react";

function Topbar() {
  const userName = "Ange";

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-end gap-5 px-6">
      <button
        aria-label="Notifications"
        className="relative text-ink-soft hover:text-ink transition-colors"
      >
        <Bell size={19} strokeWidth={1.8} />
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-alert" />
      </button>

      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center text-sm font-medium">
          {userName.charAt(0)}
        </div>
        <span className="text-sm font-medium text-ink-soft">{userName}</span>
      </div>
    </header>
  );
}

export default Topbar;