"use client";

import Link from "next/link";
import { companies, type Company } from "@/lib/companies";

type CompanyMarqueeProps = {
  heading?: string;
  caption?: string;
};

export function CompanyMarquee({
  heading = "Empresas membros",
  caption,
}: CompanyMarqueeProps) {
  return (
    <section className="rounded-3xl border border-[rgb(var(--line))] bg-white shadow-sm">
      <div className="px-6 py-3 flex items-center justify-between">
        <div className="text-[11px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
          {heading}
        </div>
        <div className="h-[2px] w-10 bg-[rgb(var(--bronze))]" />
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />

        <div className="marquee py-4">
          <div className="marquee__track">
            {[...companies, ...companies].map((company, idx) => (
              <Link
                key={`${company.slug}-${idx}`}
                href={`/empresas/${company.slug}`}
                className="flex items-center gap-3 border border-[rgb(var(--line))] bg-white px-4 py-3 transition hover:bg-slate-50"
              >
                <div className="h-10 w-10 rounded-full grid place-items-center bg-[rgb(var(--ink))] text-white text-xs font-semibold border border-[rgb(var(--bronze))]">
                  {company.logo}
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-slate-900">{company.name}</div>
                  <div className="text-xs text-slate-500">{company.tagline}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {caption && (
        <div className="px-6 pb-5 pt-3 text-xs text-slate-500">{caption}</div>
      )}

      <style jsx global>{`
        .marquee__track {
          display: flex;
          gap: 14px;
          width: max-content;
          animation: marquee 40s linear infinite;
          padding-left: 24px;
          padding-right: 24px;
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50%));
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee__track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
