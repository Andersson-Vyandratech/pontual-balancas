import React from "react";
import { Metadata } from "next";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Accessibility, 
  ExternalLink,
  ShieldCheck,
  Mail
} from "lucide-react";
import { COMPANY, getWhatsAppLink } from "@/config/company";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contato e Orçamento | Pontual Balanças Uberlândia - MG",
  description: "Fale com a Pontual Balanças: telefone (34) 3236-2016, WhatsApp (34) 99124-0204, endereço na Av. Cesário Crosara, 1480 no bairro Presidente Roosevelt.",
};

export default function ContatoPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-950 text-xs font-bold uppercase tracking-wider">
          <Phone className="w-4 h-4 text-amber-500" />
          Canais de Atendimento
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
          Fale com a Pontual Balanças
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Estamos prontos para atender produtores rurais, armazéns, indústrias e frotistas em Uberlândia e em todo o Triângulo Mineiro.
        </p>
      </section>

      {/* Grid Principal: Informações de Contato + Formulário */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Coluna de Informações e Contatos Diretos */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Cards de Contato Direto */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-slate-800">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Contatos Comerciais</span>
              </h2>

              <div className="space-y-5 text-sm">
                
                {/* Telefone Fixo */}
                <div className="flex items-start gap-3.5">
                  <div className="p-3 bg-slate-800 rounded-xl text-amber-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">Telefone Fixo</span>
                    <a 
                      href={COMPANY.phone.link} 
                      className="text-lg font-bold text-white hover:text-amber-400 transition-colors"
                    >
                      {COMPANY.phone.display}
                    </a>
                    <p className="text-xs text-slate-400 mt-0.5">Atendimento em horário comercial</p>
                  </div>
                </div>

                {/* WhatsApp Principal */}
                <div className="flex items-start gap-3.5">
                  <div className="p-3 bg-emerald-950/80 rounded-xl text-emerald-400 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">WhatsApp Comercial</span>
                    <a 
                      href={getWhatsAppLink()} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      {COMPANY.whatsapp.display}
                    </a>
                    <p className="text-xs text-slate-400 mt-0.5">Canal mais rápido para cotações e laudos</p>
                  </div>
                </div>

                {/* Celular / WhatsApp Secundário */}
                <div className="flex items-start gap-3.5">
                  <div className="p-3 bg-slate-800 rounded-xl text-amber-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">Atendimento Operacional</span>
                    <a 
                      href={getWhatsAppLink("Olá! Gostaria de falar com o plantão operacional.", COMPANY.whatsapp.altNumber)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-base font-bold text-slate-200 hover:text-amber-400 transition-colors"
                    >
                      {COMPANY.whatsapp.altDisplay}
                    </a>
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start gap-3.5">
                  <div className="p-3 bg-slate-800 rounded-xl text-amber-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">E-mail</span>
                    <p className="text-sm font-semibold text-slate-300">
                      {COMPANY.email.display}
                    </p>
                  </div>
                </div>

              </div>

              {/* Horário */}
              <div className="pt-4 border-t border-slate-800 flex items-start gap-3 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{COMPANY.hours.weekdays}</p>
                  <p className="text-slate-400">{COMPANY.hours.weekend}</p>
                </div>
              </div>

            </div>

            {/* Endereço & Acessibilidade */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 space-y-4 border border-slate-200 shadow-sm text-sm">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-900" />
                <span>Nossa Oficina e Sede</span>
              </h3>

              <div className="text-slate-700 space-y-1">
                <p className="font-semibold">{COMPANY.address.street}</p>
                <p>Bairro {COMPANY.address.neighborhood}</p>
                <p>{COMPANY.address.city} - {COMPANY.address.state}, CEP {COMPANY.address.cep}</p>
              </div>

              <div className="pt-2 flex items-start gap-2.5 text-xs text-emerald-800 bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                <Accessibility className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Acessibilidade:</strong> {COMPANY.address.accessibility}.</span>
              </div>

              <div className="pt-1">
                <a
                  href={COMPANY.address.googleProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-950 hover:text-amber-600 underline"
                >
                  <span>Abrir perfil oficial no Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Coluna do Formulário de Contato */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* Mapa do Google Incorporado */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-md space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2 px-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Localização no Bairro Presidente Roosevelt
              </h3>
              <p className="text-xs text-slate-500">
                {COMPANY.address.full}
              </p>
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY.address.full)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-3.5 py-2 rounded-lg transition-colors"
            >
              <span>Traçar rota no GPS</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200">
            <iframe
              src={COMPANY.address.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização da Pontual Balanças em Uberlândia"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}

