"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const planOptions = [
  "Buildness Club Free",
  "Buildness Club Pro",
  "Buildness Club Executive",
  "Buildness Investor",
];

export default function AdesaoPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 550));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-3xl space-y-6">
        <nav className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white bg-white/80 px-5 py-4 shadow-sm shadow-slate-200">
          <Link href="/" className="text-lg font-semibold text-slate-900">
            Buildness Club
          </Link>
          <Link
            href="/planos"
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
          >
            Ver planos
          </Link>
        </nav>

        <header className="rounded-3xl bg-white/80 p-8 shadow-lg shadow-slate-300/40">
          <div className="text-[11px] font-semibold tracking-[0.3em] text-slate-400 uppercase">
            Subscrição
          </div>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900">Forma de Adesão</h1>
          <p className="mt-2 text-sm text-slate-600">
            Conta-nos o plano que desejas e como a tua empresa quer contribuir com inteligência coletiva
            para gerar oportunidades reais.
          </p>
        </header>

        <form
          className="space-y-5 rounded-3xl border border-white bg-white/90 p-8 shadow-sm"
          onSubmit={onSubmit}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-1 text-sm text-slate-600">
              Nome completo
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
                placeholder="Ex. Ana Pereira"
              />
            </label>
            <label className="space-y-1 text-sm text-slate-600">
              Cargo
              <input
                type="text"
                name="role"
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
                placeholder="Ex. CEO, Diretor Comercial"
              />
            </label>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-1 text-sm text-slate-600">
              Empresa
              <input
                type="text"
                name="company"
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
                placeholder="Ex. Atelier do Futuro"
              />
            </label>
            <label className="space-y-1 text-sm text-slate-600">
              NIF
              <input
                type="text"
                name="nif"
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
                placeholder="Ex. 507123456"
              />
            </label>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-1 text-sm text-slate-600">
              Email profissional
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
                placeholder="nome@empresa.pt"
              />
            </label>
            <label className="space-y-1 text-sm text-slate-600">
              Telefone/WhatsApp
              <input
                type="tel"
                name="phone"
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
                placeholder="+351 912 345 678"
              />
            </label>
          </div>

          <label className="space-y-1 text-sm text-slate-600">
            Plano de interesse
            <select
              name="plan"
              required
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
              defaultValue={planOptions[0]}
            >
              {planOptions.map((plan) => (
                <option key={plan} value={plan}>
                  {plan}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-1 text-sm text-slate-600">
            Objetivos & contexto
            <textarea
              name="context"
              rows={4}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
              placeholder="Explica brevemente o tipo de desafios que a tua empresa quer resolver com o Buildness Club."
            />
          </label>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-xs text-slate-500">
              Ao submeter, um gestor Buildness entrará em contacto para validar o teu acesso.
            </div>
            <button
              type="submit"
              className="rounded-2xl bg-[rgb(var(--bronze))] px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:opacity-90"
              disabled={submitting}
            >
              {submitting ? "Enviando..." : "Submeter adesão"}
            </button>
          </div>

          {submitted && (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              Obrigado! Recebemos o teu pedido e entraremos em contacto em breve.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
