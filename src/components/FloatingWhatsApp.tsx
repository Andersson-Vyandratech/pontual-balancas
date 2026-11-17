"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { COMPANY, getWhatsAppLink } from "@/config/company";

interface FloatingWhatsAppProps {
  customMessage?: string;
}

export default function FloatingWhatsApp({ customMessage }: FloatingWhatsAppProps) {
  const [showTooltip, setShowTooltip] = useState(true);

  const link = getWhatsAppLink(customMessage || COMPANY.whatsapp.defaultMessage);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 flex-col sm:flex-row">
      {/* Tooltip convidativo */}
      {showTooltip && (
        <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-3 max-w-xs text-xs text-slate-700 animate-in fade-in slide-in-from-bottom-2 duration-300 relative">
          <button 
            type="button" 
            onClick={() => setShowTooltip(false)}
            className="absolute top-1 right-1 text-slate-400 hover:text-slate-600 p-1"
            title="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="font-bold text-slate-900">Atendimento Pontual Balanças</span>
          </div>
          <p className="text-slate-600">
            Precisa de orçamento para balança ou calibração no local? Fale conosco agora!
          </p>
        </div>
      )}

      {/* Botão flutuante */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp com a Pontual Balanças"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </a>
    </div>
  );
}

