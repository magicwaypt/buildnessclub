import "./globals.css";

export const metadata = {
  title: "Buildness Club",
  description: "Intranet premium para PMEs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
