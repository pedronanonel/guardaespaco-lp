import type { Metadata } from "next";
import "./globals.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-headline",
});

export const metadata: Metadata = {
  title: "Guarda Espaço | O Melhor Preço em Maringá",
  description: "Self-storage de alto padrão em Maringá com o compromisso do melhor preço da região. A partir de R$ 50/m².",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn("scroll-smooth", inter.variable, plusJakartaSans.variable)}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
          }
          body { font-family: var(--font-body), sans-serif; }
          h1, h2, h3, h4, h5, h6, .font-headline, .font-\\[\\'Plus_Jakarta_Sans\\'\\] { font-family: var(--font-headline), sans-serif; }
          .font-\\[\\'Inter\\'\\] { font-family: var(--font-body), sans-serif; }
        `}} />
      </head>
      <body className="bg-background text-on-background antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
