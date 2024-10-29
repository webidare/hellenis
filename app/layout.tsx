import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { ModeToggle } from "@/components/ui/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hellenis",
  description: "Hellenis, solusi sedot WC terpercaya di Yogyakarta! Profesional, harga terjangkau, tim berpengalaman & truk modern.",
  keywords:
    "sedot WC, sedot WC Yogyakarta, Hellenis,  Yogyakarta, layanan sedot WC,  septic tank, WC mampet, saluran mampet,  pelancaran saluran, pembuatan septic tank,  profesional,  terjangkau, berpengalaman, truk modern",
  authors: [{ name: "Hellenis", url: "https://hellenis.au" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:title"
          content="TWBlocks - Free SaaS website blocks"
        />
        <meta
          property="og:description"
          content="Free SaaS website blocks based on React with shadcn & Tailwind"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/tommyjepsen/twblocks/main/public/hero4.png?raw=true"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <ModeToggle />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
