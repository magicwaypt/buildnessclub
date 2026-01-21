"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [collapsed, setCollapsed] = useState(false);

  const widthClass = collapsed ? "w-[72px]" : "w-[240px]";
  const navPaddingClass = collapsed ? "px-1" : "px-2 md:px-3";
  const labelClass = collapsed ? "hidden" : "inline-flex flex-1";
  const headerContentClass = collapsed ? "hidden" : "hidden md:flex flex-col gap-2";

  return (
    <aside
      className={`${widthClass} shrink-0 bg-[rgb(var(--sidebar))] text-white border-r border-white/10 transition-all duration-200`}
    >
      <div className="h-full flex flex-col">
        <div className="px-4 py-6 border-b border-white/10 flex items-center justify-between gap-3">
          <div className={headerContentClass}>
            <div className="h-16 w-full">
              <Image
                src="/buildness-club-logo.png"
                alt="Buildness Club"
                width={280}
                height={112}
                className="h-[3.75rem] w-auto md:h-16"
                priority
              />
            </div>
          </div>
          <button
            onClick={() => setCollapsed((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
            aria-label={collapsed ? "Expandir menu" : "Colapsar menu"}
          >
            <ChevronIcon direction={collapsed ? "right" : "left"} className="h-4 w-4" />
          </button>
        </div>
        <div className="mx-auto md:mx-0 h-[2px] w-10 md:w-14 bg-[rgb(var(--bronze))]" />

        <nav className={`${navPaddingClass} py-4 space-y-1`}>
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
                <span className={labelClass}>{item.label}</span>
                {isActive && !collapsed && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--bronze))]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className={`${navPaddingClass} mt-3`}>
          <button className="w-full rounded-2xl border border-white/20 bg-white/5 px-3 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            <span className={labelClass}>Convidar membro</span>
            {collapsed && (
              <span className="sr-only">Convidar membro</span>
            )}
          </button>
        </div>

        <div className="mt-auto px-4 py-6 border-t border-white/10 space-y-3">
          <div className="h-1" />
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

function ChevronIcon({
  direction = "left",
  className = "",
}: {
  direction?: "left" | "right";
  className?: string;
}) {
  return (
    <svg
      className={`${className} ${direction === "left" ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}
