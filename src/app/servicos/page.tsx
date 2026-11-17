import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { 
  Wrench, 
  Truck, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  ArrowRight, 
  Scale, 
  Award,
  Layers
} from "lucide-react";
import { SERVICES, COMPANY, getWhatsAppLink } from "@/config/company";
import ContactForm from "@/components/ContactForm";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Serviços de Calibração, Montagem e Conserto de Balanças em Uberlândia",
  description: "Calibração de balanças com caminhão de pesos padrão INMETRO no local, assistência técnica autorizada, venda de novas e seminovas e montagem técnica pela Pontual Balanças.",
};

export default function ServicosPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-950 text-xs font-bold uppercase tracking-wider">
          <Wrench className="w-4 h-4 text-amber-500" />
          Serviços de Ponta a Ponta
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
          Serviços Especializados em Balanças
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Assistência técnica autorizada, conserto multimarcas, montagem de estruturas pesadas e calibração no local com caminhão de pesos padrão INMETRO.
        </p>
      </section>

      {/* Destaque Central: Calibração com Caminhão de Pesos Padrão INMETRO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
                Nosso Grande Diferencial Técnico
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Calibração em Campo com Caminhão de Pesos Padrão INMETRO
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                A calibração de balanças rodoviárias e de grande porte não pode ser feita apenas por métodos teóricos. Nós possuímos um <strong>caminhão munck próprio carregado com massas padrão rastreadas e certificadas</strong>, que vai diretamente ao seu pátio de pesagem ou fazenda.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300">
                    <strong>Sem desmontagem:</strong> testamos a balança na sua posição real de trabalho, com cargas de prova pontuais e distribuídas.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300">
                    <strong>Laudo e Conformidade:</strong> atendimento aos critérios metrológicos vigentes, garantindo tranquilidade perante fiscalizações do IPEM/INMETRO.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300">
                    <strong>Eliminação de perdas financeiras:</strong> ajuste milimétrico das células de carga para você não perder nem cobrar gramas ou quilos a mais.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={getWhatsAppLink("Olá! Gostaria de agendar a calibração com caminhão de pesos padrão na minha empresa/fazenda.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-xl text-sm shadow transition-transform hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Agendar Calibração no Local</span>
                </a>
                <a
                  href={COMPANY.phone.link}
                  className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm border border-slate-700"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Ligar {COMPANY.phone.display}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700">
                <img
                  src="/images/caminhao-pesos-padrao.jpg"
                  alt="Caminhão munck com pesos padrão INMETRO"
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <p className="font-bold text-white mb-0.5">Guindaste Munck</p>
                  Movimentação ágil dos blocos de 500kg
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <p className="font-bold text-white mb-0.5">Triângulo Mineiro</p>
                  Atendimento em Uberlândia e cidades vizinhas
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Lista detalhada dos 4 Serviços com o formato "Como Funciona" em passos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Nossos Serviços em Detalhes
          </h2>
          <p className="text-sm text-slate-600">
            Veja como funciona o processo de atendimento de cada serviço:
          </p>
        </div>

        <div className="space-y-12">
          {SERVICES.map((serv, index) => (
            <div
              key={serv.id}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-4 space-y-4">
                  <div className="rounded-2xl overflow-hidden h-56 bg-slate-100">
                    <img
                      src={serv.image}
                      alt={serv.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {serv.highlight && (
                    <span className="inline-block bg-amber-500 text-slate-950 font-black text-xs uppercase px-3 py-1 rounded-md">
                      {serv.highlight}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-slate-900">
                    {serv.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {serv.description}
                  </p>
                  <a
                    href={getWhatsAppLink(serv.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-950 hover:bg-blue-900 text-amber-400 font-bold px-5 py-2.5 rounded-xl text-xs shadow transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Solicitar Orçamento deste Serviço</span>
                  </a>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Como funciona este serviço passo a passo:
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {serv.steps.map((st) => (
                      <div
                        key={st.step}
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 text-xs font-black flex items-center justify-center">
                            {st.step}
                          </span>
                          <span className="text-sm font-bold text-slate-900">
                            {st.title}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed pl-8">
                          {st.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-xs text-emerald-900 flex items-center justify-between flex-wrap gap-2">
                    <span className="flex items-center gap-2 font-semibold">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Garantia técnica e peças originais
                    </span>
                    <a
                      href={COMPANY.phone.link}
                      className="font-bold text-slate-800 hover:text-emerald-700 underline"
                    >
                      Dúvidas? Ligue {COMPANY.phone.display}
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formulário de Orçamento para Serviços */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Agendamento de Serviços
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              Precisa de Calibração, Montagem ou Conserto?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Envie sua solicitação pelo formulário. Nossa equipe técnica entrará em contato para alinhar os detalhes e agendar a visita no seu endereço.
            </p>
            <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-700 space-y-1">
              <p><strong>Horário de Atendimento:</strong> {COMPANY.hours.weekdays}</p>
              <p><strong>Oficina & Pátio:</strong> {COMPANY.address.full}</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm defaultService="Calibração com Caminhão de Pesos Padrão" />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaSection
          title="Não deixe a calibração da sua balança vencer."
          subtitle="Agende a visita técnica do nosso caminhão de calibração em Uberlândia e região."
          whatsappMessage="Olá! Preciso de calibração para minha balança com urgência."
        />
      </div>

    </div>
  );
}

