"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY, PRODUCTS, getWhatsAppLink } from "@/config/company";
import { 
  Phone, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  Scale, 
  MessageCircle,
  Truck,
  Building2,
  TrainTrack,
  Milk
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [balancasDropdownOpen, setBalancasDropdownOpen] = useState(false);
  const pathname = usePathname();

  const getProductIcon = (slug: string) => {
    switch (slug) {
      case "rodoviaria":
        return <Truck className="w-4 h-4 text-amber-500" />;
      case "industrial":
        return <Building2 className="w-4 h-4 text-amber-500" />;
      case "ferroviaria":
        return <TrainTrack className="w-4 h-4 text-amber-500" />;
      case "gado":
        return <Milk className="w-4 h-4 text-amber-500" />;
      default:
        return <Scale className="w-4 h-4 text-amber-500" />;
    }
  };

  const navLinks = [
    { name: "Início", href: "/" },
    { 
      name: "Balanças", 
      href: "/balancas", 
      hasDropdown: true,
      items: PRODUCTS.map(p => ({
        name: p.name,
        href: `/balancas/${p.slug}`,
        desc: p.tagline,
        icon: getProductIcon(p.slug)
      }))
    },
    { name: "Serviços", href: "/servicos" },
    { name: "Segmentos", href: "/segmentos" },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Contato", href: "/contato" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-200">
      {/* Top bar de credibilidade e contato direto */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold tracking-wide">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {COMPANY.sinceText} em Uberlândia (MG)
            </span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              Bairro Pres. Roosevelt – Atendimento no Triângulo Mineiro
            </span>
            <span className="hidden lg:flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {COMPANY.hours.weekdays}
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a 
              href={COMPANY.phone.link} 
              className="flex items-center gap-1.5 hover:text-white transition-colors font-medium"
              title="Ligar para Pontual Balanças"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY.phone.display}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={getWhatsAppLink("Olá! Gostaria de falar com o atendimento comercial da Pontual Balanças.")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
              title="Conversar no WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{COMPANY.whatsapp.display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-blue-950 rounded-lg flex items-center justify-center text-amber-400 shadow group-hover:bg-blue-900 transition-colors">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-black tracking-tight text-blue-950 uppercase">
                  PONTUAL
                </span>
                <span className="text-sm font-bold tracking-wider text-amber-600 uppercase">
                  BALANÇAS
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-tight -mt-0.5">
                Balanças de Grande Porte & Calibração INMETRO
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => setBalancasDropdownOpen(true)}
                    onMouseLeave={() => setBalancasDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      className={`px-3.5 py-2 rounded-md text-sm font-semibold flex items-center gap-1 transition-colors ${
                        isActive(link.href)
                          ? "text-blue-950 bg-slate-100"
                          : "text-slate-700 hover:text-blue-950 hover:bg-slate-50"
                      }`}
                      onClick={() => setBalancasDropdownOpen(!balancasDropdownOpen)}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${balancasDropdownOpen ? "rotate-180" : ""}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {balancasDropdownOpen && (
                      <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Balanças de Grande Porte
                        </div>
                        {link.items?.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-start gap-3 px-3 py-2.5 hover:bg-slate-50 transition-colors group"
                            onClick={() => setBalancasDropdownOpen(false)}
                          >
                            <div className="p-1.5 bg-slate-100 rounded-lg group-hover:bg-amber-100 transition-colors mt-0.5">
                              {item.icon}
                            </div>
                            <div>
                              <div className="text-sm font-bold text-slate-800 group-hover:text-blue-950">
                                {item.name}
                              </div>
                              <div className="text-xs text-slate-500 line-clamp-1">
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-md text-sm font-semibold transition-colors ${
                    isActive(link.href)
                      ? "text-blue-950 bg-slate-100"
                      : "text-slate-700 hover:text-blue-950 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppLink("Olá! Gostaria de solicitar um orçamento para balança ou serviço.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2.5 rounded-lg text-sm shadow-sm transition-all hover:shadow hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 text-slate-950" />
              <span>Solicitar Orçamento</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-emerald-50 text-emerald-600 rounded-lg font-medium text-xs flex items-center gap-1 sm:hidden"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-blue-950 hover:bg-slate-100"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Início
          </Link>

          {/* Balanças sub-list */}
          <div className="pt-1 pb-1">
            <div className="px-3 text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              Balanças (Forte da Empresa)
            </div>
            {PRODUCTS.map(p => (
              <Link
                key={p.slug}
                href={`/balancas/${p.slug}`}
                className="flex items-center gap-2.5 px-3 py-2 pl-6 rounded-md text-sm font-semibold text-slate-700 hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {getProductIcon(p.slug)}
                <span>{p.name}</span>
              </Link>
            ))}
          </div>

          <Link
            href="/servicos"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Serviços Técnicos & Calibração
          </Link>
          <Link
            href="/segmentos"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Segmentos Atendidos
          </Link>
          <Link
            href="/sobre"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sobre a Pontual Balanças
          </Link>
          <Link
            href="/contato"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Fale Conosco
          </Link>

          <div className="pt-3 border-t border-slate-200 space-y-2">
            <a
              href={getWhatsAppLink("Olá! Gostaria de um orçamento via WhatsApp.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-emerald-600 text-white font-bold py-3 rounded-lg text-sm shadow"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Orçamento via WhatsApp ({COMPANY.whatsapp.display})</span>
            </a>
            <a
              href={COMPANY.phone.link}
              className="flex items-center justify-center gap-2 w-full bg-slate-800 text-white font-bold py-3 rounded-lg text-sm"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Ligar {COMPANY.phone.display}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

