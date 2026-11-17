import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Scale, ArrowRight, CheckCircle2, MessageCircle, Truck, Building2, TrainTrack, Milk } from "lucide-react";
import { PRODUCTS, COMPANY, getWhatsAppLink } from "@/config/company";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Balanças de Grande Porte em Uberlândia | Rodoviária, Industrial, Ferroviária e Gado",
  description: "Conheça as linhas prioritárias de balanças da Pontual Balanças: rodoviária para caminhões, industrial de fluxo e piso, pesagem ferroviária e balanças para gado.",
};

export default function BalancasPage() {
  const getProductIcon = (slug: string) => {
    switch (slug) {
      case "rodoviaria":
        return <Truck className="w-5 h-5 text-amber-500" />;
      case "industrial":
        return <Building2 className="w-5 h-5 text-amber-500" />;
      case "ferroviaria":
        return <TrainTrack className="w-5 h-5 text-amber-500" />;
      case "gado":
        return <Milk className="w-5 h-5 text-amber-500" />;
      default:
        return <Scale className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-950 text-xs font-bold uppercase tracking-wider">
          <Scale className="w-4 h-4 text-amber-500" />
          Catálogo Completo
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
          Balanças de Grande Porte
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          O forte da Pontual Balanças em Uberlândia e Triângulo Mineiro. Equipamentos novos e seminovos com montagem, calibração com caminhão de pesos padrão INMETRO e garantia técnica.
        </p>
      </section>

      {/* Grid de Balanças */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.slug}
              className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all group"
            >
              <div>
                <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {prod.badge && (
                    <span className="absolute top-4 left-4 bg-amber-500 text-slate-950 font-black text-xs uppercase px-3 py-1 rounded-lg shadow">
                      {prod.badge}
                    </span>
                  )}
                </div>

                <div className="p-6 sm:p-8 space-y-5">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-slate-100 rounded-lg">
                        {getProductIcon(prod.slug)}
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-950 transition-colors">
                        {prod.name}
                      </h2>
                    </div>
                    <p className="text-xs font-bold text-amber-600 uppercase tracking-wide">
                      {prod.tagline}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {prod.shortDescription}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Principais Aplicações:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {prod.applications.slice(0, 4).map((app, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">Setores atendidos:</span>{" "}
                    {prod.sectors.join(", ")}.
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href={`/balancas/${prod.slug}`}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-blue-950 hover:bg-blue-900 text-white font-bold py-3 px-5 rounded-xl text-sm transition-colors"
                >
                  <span>Página Completa</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppLink(prod.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-5 rounded-xl text-sm transition-colors shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaSection
          title="Precisa de auxílio técnico para escolher a balança ideal?"
          subtitle="Nossos técnicos avaliam o fluxo, peso máximo e dimensões da sua operação para indicar o melhor modelo novo ou seminovo."
          whatsappMessage="Olá! Gostaria de consultoria técnica para compra de balança."
        />
      </div>
    </div>
  );
}

