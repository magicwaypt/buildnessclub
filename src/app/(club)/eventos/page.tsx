"use client";

import { useMemo, useState } from "react";

const events = [
  {
    title: "Mesa redonda: pricing e margens em PMEs B2B",
    date: "Hoje",
    time: "17:00",
    format: "Online",
    level: "Executive",
    type: "Roundtable",
    location: "Zoom",
    host: "Curadoria Buildness",
  },
  {
    title: "Mastery: Procurement colaborativo (casos reais)",
    date: "Amanhã",
    time: "09:30",
    format: "Presencial",
    level: "Pro",
    type: "Masterclass",
    location: "Lisboa · Sede Buildness",
    host: "Comissão de Compras",
  },
  {
    title: "Networking dirigido: Energia & Utilities",
    date: "Qui",
    time: "18:30",
    format: "Presencial",
    level: "Investor",
    type: "Networking",
    location: "Porto · Palácio Bolsa",
    host: "Communities Team",
  },
];

const weekAgenda = [
  { day: "Seg", count: 2 },
  { day: "Ter", count: 1 },
  { day: "Qua", count: 3 },
  { day: "Qui", count: 2 },
  { day: "Sex", count: 1 },
];

const filters = [
  "Presencial",
  "Online",
  "Executive",
  "Investor",
  "Networking",
  "Masterclass",
  "Roundtable",
];

const weekCalendar = [
  {
    day: "Seg",
    date: "21",
    slots: [
      { time: "09:30", title: "Mastery: Procurement colaborativo", format: "Presencial" },
    ],
  },
  {
    day: "Ter",
    date: "22",
    slots: [],
  },
  {
    day: "Qua",
    date: "23",
    slots: [
      { time: "17:00", title: "Mesa redonda: pricing e margens", format: "Online" },
    ],
  },
  {
    day: "Qui",
    date: "24",
    slots: [
      { time: "18:30", title: "Networking dirigido: Energia & Utilities", format: "Presencial" },
    ],
  },
  {
    day: "Sex",
    date: "25",
    slots: [],
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[rgb(var(--line))] bg-slate-100/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600">
      {children}
    </span>
  );
}

export default function EventosPage() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [view, setView] = useState<"lista" | "calendario">("lista");

  const filteredEvents = useMemo(() => {
    if (activeFilters.length === 0) {
      return events;
    }

    return events.filter((event) => {
      const tags = [event.format, event.level, event.type];
      return activeFilters.some((filter) => tags.includes(filter));
    });
  }, [activeFilters]);

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter) ? prev.filter((item) => item !== filter) : [...prev, filter]
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-[11px] font-semibold tracking-[0.2em] text-slate-500">EVENTOS</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            Calendário do clube
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Sessões estratégicas, networking e masterclasses pensadas para o seu plano.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            className="rounded-xl px-4 py-2.5 text-sm font-semibold border border-[rgb(var(--line))] bg-white hover:bg-slate-50 transition"
            onClick={() => setView("calendario")}
          >
            Ver calendário
          </button>
          <button className="rounded-xl px-4 py-2.5 text-sm font-semibold border border-[rgb(var(--line))] bg-white hover:bg-slate-50 transition">
            Sugerir tema
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-5">
          <section className="rounded-3xl bg-white border border-[rgb(var(--line))] shadow-sm">
            <header className="px-6 py-5 border-b border-[rgb(var(--line))] flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-slate-900">Próximos eventos</div>
                <div className="text-xs text-slate-500 mt-1">
                  Curadoria com base nos seus interesses e sector.
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-[rgb(var(--line))] bg-white p-1 text-xs font-semibold">
                <button
                  onClick={() => setView("lista")}
                  className={`rounded-full px-3 py-1 transition ${
                    view === "lista" ? "bg-[rgb(var(--ink))] text-white" : "text-slate-600"
                  }`}
                >
                  Lista
                </button>
                <button
                  onClick={() => setView("calendario")}
                  className={`rounded-full px-3 py-1 transition ${
                    view === "calendario" ? "bg-[rgb(var(--ink))] text-white" : "text-slate-600"
                  }`}
                >
                  Calendário
                </button>
              </div>
            </header>
            <div className="p-6 space-y-4">
              {view === "lista" ? (
                filteredEvents.length > 0 ? (
                  filteredEvents.map((event, idx) => (
                    <div
                      key={event.title}
                      className="rounded-2xl border border-[rgb(var(--line))] bg-slate-50 p-4"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <Tag>{event.format}</Tag>
                            <Tag>{event.level}</Tag>
                            <Tag>{event.type}</Tag>
                            <span className="text-xs text-slate-500">
                              {event.date} · {event.time}
                            </span>
                          </div>
                          <div className="mt-2 text-sm font-semibold text-slate-900">
                            {event.title}
                          </div>
                          <div className="mt-1 text-xs text-slate-500">
                            {event.location} · {event.host}
                          </div>
                        </div>
                        <button className="rounded-xl px-4 py-2.5 text-sm font-semibold bg-[rgb(var(--bronze))] text-white shadow-sm hover:opacity-90 transition">
                          Ver detalhes
                        </button>
                      </div>
                      {idx < filteredEvents.length - 1 && (
                        <div className="mt-4 h-px bg-[rgb(var(--line))]" />
                      )}
                    </div>
                  ))
                ) : (
                  <div className="rounded-2xl border border-[rgb(var(--line))] bg-slate-50 p-6 text-sm text-slate-600">
                    Sem eventos para os filtros selecionados.
                  </div>
                )
              ) : (
                <div className="rounded-2xl border border-[rgb(var(--line))] bg-slate-50 p-4">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                    {weekCalendar.map((day) => (
                      <div
                        key={day.day}
                        className="rounded-2xl border border-[rgb(var(--line))] bg-white p-3"
                      >
                        <div className="flex items-center justify-between">
                          <div className="text-xs font-semibold text-slate-500">{day.day}</div>
                          <div className="text-xs text-slate-400">{day.date}</div>
                        </div>
                        <div className="mt-3 space-y-2">
                          {day.slots.length > 0 ? (
                            day.slots.map((slot) => (
                              <div
                                key={`${day.day}-${slot.time}`}
                                className="rounded-xl border border-[rgb(var(--line))] bg-slate-50 px-3 py-2"
                              >
                                <div className="text-[11px] font-semibold text-slate-500">
                                  {slot.time}
                                </div>
                                <div className="text-xs font-semibold text-slate-900">
                                  {slot.title}
                                </div>
                                <div className="text-[11px] text-slate-500">{slot.format}</div>
                              </div>
                            ))
                          ) : (
                            <div className="rounded-xl border border-dashed border-[rgb(var(--line))] px-3 py-6 text-center text-[11px] text-slate-400">
                              Sem sessões
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          <section className="rounded-3xl bg-white border border-[rgb(var(--line))] shadow-sm">
            <header className="px-6 py-5 border-b border-[rgb(var(--line))]">
              <div className="text-sm font-semibold text-slate-900">Agenda da semana</div>
              <div className="text-xs text-slate-500 mt-1">
                Visão rápida do número de eventos por dia.
              </div>
            </header>
            <div className="p-6">
              <div className="grid grid-cols-5 gap-3">
                {weekAgenda.map((day) => (
                  <div
                    key={day.day}
                    className="rounded-2xl border border-[rgb(var(--line))] bg-slate-50 p-4 text-center"
                  >
                    <div className="text-xs font-semibold text-slate-500">{day.day}</div>
                    <div className="mt-2 text-lg font-semibold text-slate-900">{day.count}</div>
                    <div className="text-[11px] text-slate-500">eventos</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-5">
          <section className="rounded-3xl bg-white border border-[rgb(var(--line))] shadow-sm">
            <header className="px-6 py-5 border-b border-[rgb(var(--line))]">
              <div className="text-sm font-semibold text-slate-900">Filtros</div>
              <div className="text-xs text-slate-500 mt-1">
                Ajuste por formato, nível e tipo.
              </div>
            </header>
            <div className="p-6 flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => toggleFilter(filter)}
                  className={[
                    "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition",
                    activeFilters.includes(filter)
                      ? "border-[rgb(var(--bronze))] bg-[rgba(197,151,96,0.14)] text-slate-900"
                      : "border-[rgb(var(--line))] bg-white text-slate-700 hover:bg-slate-50",
                  ].join(" ")}
                >
                  {filter}
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-white border border-[rgb(var(--line))] shadow-sm">
            <header className="px-6 py-5 border-b border-[rgb(var(--line))]">
              <div className="text-sm font-semibold text-slate-900">Recomendados para si</div>
              <div className="text-xs text-slate-500 mt-1">
                Baseado nas suas preferências recentes.
              </div>
            </header>
            <div className="p-6 space-y-3">
              <div className="rounded-2xl border border-[rgb(var(--line))] bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-900">
                    Sessão privada com parceiros estratégicos
                  </div>
                  <Tag>Pro</Tag>
                </div>
                <div className="mt-2 text-xs text-slate-500">Sex · 15:00 · Online</div>
                <button className="mt-3 w-full rounded-xl px-4 py-2.5 text-sm font-semibold bg-[rgb(var(--bronze))] text-white shadow-sm hover:opacity-90 transition">
                  Reservar lugar
                </button>
              </div>

              <div className="rounded-2xl border border-[rgb(var(--line))] bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-900">
                    Roundtable: supply chain resiliente
                  </div>
                  <Tag>Executive</Tag>
                </div>
                <div className="mt-2 text-xs text-slate-500">Seg · 11:30 · Lisboa</div>
                <button className="mt-3 w-full rounded-xl px-4 py-2.5 text-sm font-semibold border border-[rgb(var(--line))] bg-white hover:bg-slate-50 transition">
                  Ver agenda
                </button>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white border border-[rgb(var(--line))] shadow-sm">
            <header className="px-6 py-5 border-b border-[rgb(var(--line))]">
              <div className="text-sm font-semibold text-slate-900">Organização</div>
              <div className="text-xs text-slate-500 mt-1">Gestão rápida dos seus eventos.</div>
            </header>
            <div className="p-6 space-y-2 text-sm text-slate-700">
              <div className="flex items-center justify-between">
                <span>Eventos confirmados</span>
                <span className="font-semibold text-slate-900">3</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Em lista de espera</span>
                <span className="font-semibold text-slate-900">1</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Sessões gravadas</span>
                <span className="font-semibold text-slate-900">5</span>
              </div>
              <button className="mt-4 w-full rounded-xl px-4 py-2.5 text-sm font-semibold border border-[rgb(var(--line))] bg-white hover:bg-slate-50 transition">
                Ver histórico completo
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
