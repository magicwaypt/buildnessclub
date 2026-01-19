import { Sidebar } from "@/components/ui/Sidebar";
import { Topbar } from "@/components/ui/Topbar";
import { AssistantWidget } from "@/components/ui/AssistantWidget";

export default function ClubLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[rgb(var(--bg))]">
      <div className="flex min-h-screen">
        {/* Sidebar (fixa à esquerda) */}
        <Sidebar />

        {/* Área principal */}
        <div className="flex-1 min-w-0">
          {/* Topbar (fixa em cima) */}
          <Topbar />

          {/* Conteúdo */}
          <main className="px-8 py-8">
            <div className="mx-auto max-w-[1400px]">{children}</div>
          </main>
        </div>
      </div>

      {/* Assistente global (widget flutuante) */}
      <AssistantWidget />
    </div>
  );
}
