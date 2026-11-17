import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieBanner from "@/components/CookieBanner";
import SchemaOrg from "@/components/SchemaOrg";
import { COMPANY } from "@/config/company";

export const metadata: Metadata = {
  metadataBase: new URL("https://pontualbalancas.com.br"),
  title: {
    default: "Pontual Balanças | Balanças Rodoviárias, Industriais e para Gado em Uberlândia",
    template: "%s | Pontual Balanças",
  },
  description: "Desde 2008 em Uberlândia. Especialistas em venda (novas e seminovas), montagem, conserto e calibração com caminhão de pesos padrão INMETRO de balanças de grande porte no Triângulo Mineiro.",
  keywords: [
    "balança rodoviária Uberlândia",
    "calibração de balança rodoviária",
    "balança para gado Uberlândia",
    "balança industrial Uberlândia",
    "conserto de balança Uberlândia",
    "assistência técnica de balanças Triângulo Mineiro",
    "balança seminova",
    "balança ferroviária",
    "caminhão de calibração INMETRO",
    "assistência autorizada COIMMA Uberlândia",
    "balança de pesagem Tru-Test"
  ],
  authors: [{ name: "Pontual Balanças" }],
  creator: "Pontual Balanças",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://pontualbalancas.com.br",
    title: "Pontual Balanças | Balanças de Grande Porte & Calibração INMETRO",
    description: "Pesagem precisa para quem não pode parar. Venda, montagem, calibração e assistência de balanças rodoviárias, industriais e de gado.",
    siteName: COMPANY.name,
    images: [
      {
        url: "/images/caminhao-pesos-padrao.jpg",
        width: 1200,
        height: 630,
        alt: "Caminhão de calibração com pesos padrão INMETRO - Pontual Balanças",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="h-full scroll-smooth antialiased">
      <head>
        <SchemaOrg />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <CookieBanner />
      </body>
    </html>
  );
}
