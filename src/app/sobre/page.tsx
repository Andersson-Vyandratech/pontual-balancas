import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { 
  Building2, 
  ShieldCheck, 
  Star, 
  Truck, 
  MapPin, 
  Clock, 
  Accessibility, 
  Scale, 
  ExternalLink,
  MessageCircle,
  Phone,
  CheckCircle2
} from "lucide-react";
import { COMPANY, getWhatsAppLink } from "@/config/company";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Sobre a Pontual Balanças | Quase 18 Anos em Uberlândia - MG",
  description: "Fundada em dezembro de 2008 no bairro Presidente Roosevelt em Uberlândia. Conheça a história, equipe e diferenciais da Pontual Balanças.",
};

export default function SobrePage() {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-950 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-amber-500" />
          {COMPANY.sinceText} em Uberlândia
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
          Tradição, Confiabilidade e Rigor Metrológico
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Quase duas décadas dedicadas ao comércio, assistência técnica, montagem e calibração de balanças de grande porte no Triângulo Mineiro.
        </p>
      </section>

      {/* História e Fotos Reais */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Nossa Trajetória
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                A <strong>Pontual Balanças</strong> nasceu em <strong>dezembro de 2008</strong> em Uberlândia (MG), com o propósito de atender a crescente demanda do agronegócio e das indústrias por pesagens precisas e sem interrupções.
              </p>
              <p>
                Ao longo de quase 18 anos de operação contínua, nos especializamos nas soluções que exigem a maior responsabilidade técnica do mercado: <strong>balanças rodoviárias, balanças industriais de fluxo e piso, pesagem ferroviária e balanças para gado</strong>.
              </p>
              <p>
                Com sede própria no bairro <strong>Presidente Roosevelt</strong>, dispomos de oficina equipada para assistência técnica autorizada, estoque de peças e veículos operacionais prontos para atender chamados no campo e nas fábricas.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="text-2xl font-black text-blue-950">Dezembro/2008</div>
                <div className="text-xs text-slate-500">Fundação em Uberlândia</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="text-2xl font-black text-amber-500 flex items-center gap-1">
                  <span>{COMPANY.reviews.rating}</span>
                  <Star className="w-4 h-4 fill-amber-500" />
                </div>
                <div className="text-xs text-slate-500">{COMPANY.reviews.count} avaliações no Google</div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href={COMPANY.reviews.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-950 hover:text-amber-600 underline"
              >
                <span>Ver perfil da Pontual Balanças no Google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="/images/fachada-pontual-balancas.jpg"
                alt="Fachada da Pontual Balanças na Av. Cesário Crosara em Uberlândia"
                className="w-full h-72 sm:h-80 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow border border-slate-200">
                <img
                  src="/images/logo-fachada.jpg"
                  alt="Identificação da empresa e telefones"
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow border border-slate-200">
                <img
                  src="/images/veiculo-operacional.jpg"
                  alt="Veículo técnico de atendimento de campo"
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Diferenciais da Empresa */}
      <section className="bg-slate-900 text-white py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
              Por que nos escolher
            </span>
            <h2 className="text-3xl font-black text-white">
              Nossos Principais Diferenciais
            </h2>
            <p className="text-slate-400 text-sm">
              Trabalhamos com fatos, transparência e investimento contínuo em equipamentos certificados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY.differentials.map((diff, index) => (
              <div
                key={diff.id}
                className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="h-36 rounded-xl overflow-hidden bg-slate-900">
                    <img
                      src={diff.image}
                      alt={diff.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                    {diff.highlight}
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {diff.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estrutura e Acessibilidade */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          
          <div className="flex items-start gap-3">
            <div className="p-3 bg-blue-100 rounded-xl text-blue-900 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Localização em Uberlândia</h4>
              <p className="text-xs text-slate-600">
                {COMPANY.address.street}, Bairro {COMPANY.address.neighborhood}, CEP {COMPANY.address.cep}.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-3 bg-amber-100 rounded-xl text-amber-900 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Horário de Funcionamento</h4>
              <p className="text-xs text-slate-600">
                {COMPANY.hours.weekdays}. Atendimento para emergências sob consulta.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-3 bg-emerald-100 rounded-xl text-emerald-900 shrink-0">
              <Accessibility className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Acessibilidade Garantida</h4>
              <p className="text-xs text-slate-600">
                {COMPANY.address.accessibility}.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Final */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaSection
          title="Quer conversar com quem entende de balanças em Uberlândia?"
          subtitle="Entre em contato hoje mesmo e agende uma visita técnica ou cotação."
          whatsappMessage="Olá! Conheci a história da Pontual Balanças pelo site e gostaria de solicitar um orçamento."
        />
      </div>

    </div>
  );
}

