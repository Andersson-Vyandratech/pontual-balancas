import React from "react";
import { MessageCircle, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { COMPANY, getWhatsAppLink } from "@/config/company";

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  whatsappMessage?: string;
  variant?: "dark" | "light" | "amber";
}

export default function CtaSection({
  title = "Sua balança precisa de calibração, montagem ou conserto?",
  subtitle = "Não deixe sua produção ou safra parar. Fale com a equipe técnica da Pontual Balanças e tenha atendimento rápido no Triângulo Mineiro.",
  whatsappMessage = "Olá, gostaria de solicitar um atendimento técnico ou orçamento.",
  variant = "dark",
}: CtaSectionProps) {
  if (variant === "amber") {
    return (
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 py-12 px-4 rounded-3xl my-12 shadow-xl">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/60 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900">
            <ShieldCheck className="w-4 h-4" />
            Atendimento Rápido e Preciso
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-950">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-900/90 max-w-2xl mx-auto font-medium">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={getWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-900 text-white font-bold px-7 py-4 rounded-xl shadow-lg transition-all hover:scale-105 text-sm"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>Pedir Orçamento no WhatsApp</span>
            </a>
            <a
              href={COMPANY.phone.link}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-slate-900 font-bold px-7 py-4 rounded-xl shadow transition-all text-sm"
            >
              <Phone className="w-4 h-4 text-blue-900" />
              <span>Ligar {COMPANY.phone.display}</span>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-900 text-white py-14 sm:py-16 px-4 rounded-3xl my-12 shadow-2xl relative overflow-hidden border border-slate-800">
      {/* Background ambient pattern */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-semibold text-amber-400 tracking-wide">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          {COMPANY.sinceText} em Uberlândia • Atendimento Especializado
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
          <a
            href={getWhatsAppLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105 text-base"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Pedir Orçamento no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={COMPANY.phone.link}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold px-7 py-4 rounded-xl transition-all text-base"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Ligar {COMPANY.phone.display}</span>
          </a>
        </div>

        <p className="text-xs text-slate-400 pt-2">
          {COMPANY.hours.weekdays} • Calibração com caminhão de pesos padrão rastreados ao INMETRO
        </p>
      </div>
    </section>
  );
}

