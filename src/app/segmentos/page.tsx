import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle, 
  Scale, 
  AlertTriangle,
  Lightbulb
} from "lucide-react";
import { SECTORS, COMPANY, getWhatsAppLink } from "@/config/company";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Soluções por Segmento | Fazendas, Confinamentos, Indústrias, Frigoríficos e Reciclagem",
  description: "Balanças rodoviárias, industriais e de gado dimensionadas para as necessidades de cada setor em Uberlândia e Triângulo Mineiro. Pontual Balanças.",
};

export default function SegmentosPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-950 text-xs font-bold uppercase tracking-wider">
          <Building2 className="w-4 h-4 text-amber-500" />
          Mercados Atendidos
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
          Soluções Especializadas por Segmento
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Conhecemos a realidade e o ritmo operacional de quem produz, transporta e processa em Uberlândia e no Triângulo Mineiro.
        </p>
      </section>

      {/* Blocos por Segmento */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {SECTORS.map((sec, index) => (
          <div
            key={sec.id}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-2xl overflow-hidden h-64 sm:h-72 bg-slate-100">
                  <img
                    src={sec.image}
                    alt={sec.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs text-slate-500">
                  <strong>Quem decide:</strong> {sec.target}
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                    Segmento {index + 1} de 5
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                    {sec.title}
                  </h2>
                </div>

                {/* Dor do cliente */}
                <div className="p-4 rounded-2xl bg-red-50/70 border border-red-100 space-y-1.5 text-xs text-red-950">
                  <div className="font-bold flex items-center gap-1.5 text-red-800 uppercase tracking-wide">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span>A Dor Típica deste Negócio:</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed pl-5">
                    {sec.pain}
                  </p>
                </div>

                {/* Solução Pontual Balanças */}
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 space-y-1.5 text-xs text-emerald-950">
                  <div className="font-bold flex items-center gap-1.5 text-emerald-800 uppercase tracking-wide">
                    <Lightbulb className="w-4 h-4 text-emerald-600" />
                    <span>Como a Pontual Balanças Resolve:</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed pl-5">
                    {sec.solution}
                  </p>
                </div>

                {/* Produtos mais relevantes */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Produtos e Equipamentos Recomendados:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {sec.products.map((p, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-blue-50 text-blue-900 text-xs font-bold border border-blue-100"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ações */}
                <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-3">
                  <Link
                    href={sec.link}
                    className="inline-flex items-center gap-2 bg-blue-950 hover:bg-blue-900 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors"
                  >
                    <span>Conhecer a balança recomendada</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={getWhatsAppLink(`Olá, tenho uma demanda no segmento de ${sec.title} e gostaria de falar com um especialista.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors shadow"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Orçamento para {sec.title}</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        ))}
      </section>

      {/* CTA Final */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaSection
          title="Seu segmento precisa de pesagem confiável?"
          subtitle="Converse com a Pontual Balanças e tenha suporte técnico sob medida em Uberlândia e Triângulo Mineiro."
          whatsappMessage="Olá! Gostaria de um orçamento para a minha empresa/fazenda."
        />
      </div>

    </div>
  );
}

