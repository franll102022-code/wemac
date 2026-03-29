import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WEMAC",
  description: "Productos de higiene, dispensadores y abastecimiento profesional.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
