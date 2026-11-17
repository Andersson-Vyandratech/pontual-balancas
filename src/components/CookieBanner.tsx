"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, X } from "lucide-react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("pontual_cookies_consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("pontual_cookies_consent", "accepted");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:max-w-lg z-50 bg-slate-900 text-white p-4 sm:p-5 rounded-2xl shadow-2xl border border-slate-700 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-slate-800 rounded-lg text-amber-400 shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="space-y-2 text-xs">
          <p className="font-semibold text-slate-200">
            Privacidade e Proteção de Dados (LGPD)
          </p>
          <p className="text-slate-400 leading-relaxed">
            Utilizamos cookies para aprimorar sua experiência de navegação, analisar tráfego e personalizar seu contato de orçamento. Saiba mais em nossa{" "}
            <Link href="/politica-de-privacidade" className="text-amber-400 underline hover:text-amber-300">
              Política de Privacidade
            </Link>.
          </p>
          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={accept}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-1.5 rounded-lg text-xs transition-colors"
            >
              Concordar e Continuar
            </button>
            <button
              type="button"
              onClick={() => setShow(false)}
              className="text-slate-400 hover:text-slate-200 text-xs px-2 py-1.5"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

