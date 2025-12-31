import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { HeaderNav } from "@/components/ui/HeaderNav";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MM Renovacao 2025 | Proposta de Trafego Pago",
  description: "Performance dos ultimos 6 meses e proposta de renovacao para gestao de trafego pago.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.variable} font-sans antialiased bg-gray-50 min-h-screen`}>
        <HeaderNav />
        <main className="max-w-6xl mx-auto px-4 py-6 md:py-8">
          {children}
        </main>
        <footer className="border-t border-gray-200 mt-12 py-6">
          <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500">
            <p>MM Renovacao 2025 | Dados de Jul-Dez/2025</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
