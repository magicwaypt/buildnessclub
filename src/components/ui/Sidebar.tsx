"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/dashboard", label: "Início", icon: HomeIcon },
  { href: "/eventos", label: "Eventos", icon: CalendarIcon },
  { href: "/forum", label: "Fórum", icon: MessageIcon },
  { href: "/negociacoes", label: "Negociações", icon: DealIcon },
  { href: "/membros", label: "Membros", icon: UsersIcon },
  { href: "/notificacoes", label: "Notificações", icon: BellIcon },
];


export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[72px] md:w-[240px] shrink-0 bg-[rgb(var(--sidebar))] text-white border-r border-white/10">
      <div className="h-full flex flex-col">
        <div className="px-4 py-6 border-b border-white/10">
          <div className="hidden md:block text-sm font-semibold tracking-tight">Buildness</div>
          <div className="hidden md:block text-xs text-white/60 mt-1">Intranet</div>
          <div className="mx-auto md:mx-0 mt-2 md:mt-4 h-[2px] w-10 md:w-14 bg-[rgb(var(--bronze))]" />
        </div>

        <nav className="px-2 md:px-3 py-4 space-y-1">
          {nav.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "group flex items-center gap-3 px-3 md:px-4 py-3 text-sm transition",
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/85 hover:text-white hover:bg-white/5",
                ].join(" ")}
              >
                <span
                  className={[
                    "grid h-7 w-7 place-items-center rounded-lg border transition",
                    isActive
                      ? "border-[rgb(var(--bronze))] bg-white/10"
                      : "border-white/10 bg-white/5 group-hover:border-white/20",
                  ].join(" ")}
                >
                  <Icon
                    className={[
                      "h-4 w-4",
                      isActive ? "text-[rgb(var(--bronze))]" : "text-white/70",
                    ].join(" ")}
                  />
                </span>
                <span className="hidden md:inline-flex flex-1">{item.label}</span>
                {isActive && (
                  <span className="hidden md:inline-flex h-1.5 w-1.5 rounded-full bg-[rgb(var(--bronze))]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto px-4 py-6 border-t border-white/10">
          <button className="w-full px-3 py-3 text-sm font-medium bg-[rgb(var(--sidebar2))] hover:bg-white/10 border border-white/10 transition">
            <span className="hidden md:inline">Convidar membro</span>
            <span className="md:hidden">+</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

function HomeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 10.5L12 3l9 7.5" />
      <path d="M5 9.5v10h14v-10" />
      <path d="M9 19v-6h6v6" />
    </svg>
  );
}

function CalendarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  );
}

function MessageIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 5h16v11H8l-4 4V5z" />
    </svg>
  );
}

function DealIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12h6l2 2h4l2-2h4" />
      <path d="M6 9V7a2 2 0 0 1 2-2h3" />
      <path d="M18 9V7a2 2 0 0 0-2-2h-3" />
      <path d="M9 14l-2 3" />
      <path d="M15 14l2 3" />
    </svg>
  );
}

function UsersIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3z" />
      <path d="M6 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3z" />
      <path d="M6 13c-2.2 0-4 1.6-4 3.5V19h8v-2.5C10 14.6 8.2 13 6 13z" />
      <path d="M16 13c-2.2 0-4 1.6-4 3.5V19h10v-2.5C22 14.6 18.2 13 16 13z" />
    </svg>
  );
}

function BellIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9a6 6 0 0 1 12 0v4l2 2H4l2-2z" />
      <path d="M9.5 19a2.5 2.5 0 0 0 5 0" />
    </svg>
  );
}
