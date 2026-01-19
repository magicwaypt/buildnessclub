export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(1100px_600px_at_80%_-10%,#2743a8_0%,transparent_60%),linear-gradient(#0b1220,#0b1220)]">
      <div className="mx-auto max-w-[1280px] px-4 py-6">{children}</div>
    </div>
  );
}
