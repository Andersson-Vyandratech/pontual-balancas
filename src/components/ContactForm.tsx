"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageCircle, PhoneCall, Loader2 } from "lucide-react";
import { COMPANY } from "@/config/company";

interface ContactFormProps {
  defaultProduct?: string;
  defaultService?: string;
  className?: string;
}

export default function ContactForm({ defaultProduct, defaultService, className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    nome: "",
    empresaOuFazenda: "",
    cidadeUf: "",
    telefone: "",
    email: "",
    tipoBalanca: defaultProduct || "Balança Rodoviária",
    servicoDesejado: defaultService || "Calibração com Caminhão de Pesos Padrão",
    mensagem: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format WhatsApp message
    const textMsg = `*Solicitação de Orçamento - Site Pontual Balanças*
*Nome:* ${formData.nome}
*Empresa/Fazenda:* ${formData.empresaOuFazenda || "Não informado"}
*Cidade/UF:* ${formData.cidadeUf}
*Telefone/WhatsApp:* ${formData.telefone}
*E-mail:* ${formData.email || "Não informado"}
*Balança:* ${formData.tipoBalanca}
*Serviço:* ${formData.servicoDesejado}
*Mensagem:* ${formData.mensagem || "Sem observações adicionais."}`;

    // Emulate swift process and offer instant WhatsApp redirection
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const encoded = encodeURIComponent(textMsg);
      const whatsappUrl = `https://wa.me/${COMPANY.whatsapp.number}?text=${encoded}`;
      window.open(whatsappUrl, "_blank");
    }, 600);
  };

  if (isSubmitted) {
    return (
      <div className={`bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4 ${className}`}>
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">
          Solicitação de Orçamento Gerada!
        </h3>
        <p className="text-slate-600 max-w-md mx-auto text-sm">
          Sua mensagem foi formatada para o nosso WhatsApp comercial. Se a janela não abriu automaticamente, clique no botão abaixo para falar agora mesmo com nossa equipe técnica:
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/${COMPANY.whatsapp.number}?text=${encodeURIComponent(
              `Olá, enviei uma solicitação pelo site em nome de ${formData.nome} (${formData.tipoBalanca} - ${formData.servicoDesejado}).`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl shadow transition-colors text-sm"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Abrir WhatsApp ({COMPANY.whatsapp.display})</span>
          </a>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="text-xs text-slate-500 hover:text-slate-700 underline py-2"
          >
            Enviar outra solicitação
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 space-y-5 ${className}`}>
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <span>Solicitar Orçamento Rápido</span>
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Preencha os dados abaixo para receber uma cotação direta da nossa equipe técnica.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Seu Nome *
          </label>
          <input
            type="text"
            required
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            placeholder="Ex.: Carlos Silva"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Empresa ou Fazenda
          </label>
          <input
            type="text"
            value={formData.empresaOuFazenda}
            onChange={(e) => setFormData({ ...formData, empresaOuFazenda: e.target.value })}
            placeholder="Ex.: Fazenda Esperança / Grãos Ltda"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Telefone / WhatsApp *
          </label>
          <input
            type="tel"
            required
            value={formData.telefone}
            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
            placeholder="(34) 99999-9999"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Cidade / UF *
          </label>
          <input
            type="text"
            required
            value={formData.cidadeUf}
            onChange={(e) => setFormData({ ...formData, cidadeUf: e.target.value })}
            placeholder="Ex.: Uberlândia - MG"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
          E-mail para Contato
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="seuemail@empresa.com.br"
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Tipo de Balança *
          </label>
          <select
            value={formData.tipoBalanca}
            onChange={(e) => setFormData({ ...formData, tipoBalanca: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent bg-white"
          >
            <option value="Balança Rodoviária">Balança Rodoviária (Caminhões)</option>
            <option value="Balança para Gado">Balança para Gado (Pecuária)</option>
            <option value="Balança Industrial">Balança Industrial (Fluxo/Piso)</option>
            <option value="Balança Ferroviária">Balança Ferroviária (Vagões)</option>
            <option value="Outro Modelo">Outro Modelo de Balança</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Serviço Desejado *
          </label>
          <select
            value={formData.servicoDesejado}
            onChange={(e) => setFormData({ ...formData, servicoDesejado: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent bg-white"
          >
            <option value="Calibração com Caminhão de Pesos Padrão">Calibração com Peso Padrão INMETRO</option>
            <option value="Compra de Balança Nova">Compra de Balança Nova</option>
            <option value="Compra de Balança Seminova">Compra de Balança Seminova</option>
            <option value="Montagem e Instalação Técnica">Montagem e Instalação Técnica</option>
            <option value="Conserto e Manutenção Corretiva">Conserto e Manutenção Corretiva</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
          Mensagem ou Detalhes da Necessidade
        </label>
        <textarea
          rows={3}
          value={formData.mensagem}
          onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
          placeholder="Descreva a capacidade desejada, modelo da balança atual ou qualquer urgência operacional..."
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all resize-none"
        ></textarea>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 bg-blue-950 hover:bg-blue-900 text-amber-400 font-bold px-6 py-3.5 rounded-xl text-base shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-75 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Processando orçamento...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Enviar Pedido de Orçamento</span>
            </>
          )}
        </button>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100">
        <span className="flex items-center gap-1">
          <PhoneCall className="w-3 h-3 text-slate-400" />
          Resposta ágil em horário comercial
        </span>
        <span>Privacidade garantida sob a LGPD</span>
      </div>
    </form>
  );
}

