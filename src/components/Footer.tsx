import React from "react";
import Link from "next/link";
import { COMPANY, PRODUCTS, getWhatsAppLink } from "@/config/company";
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Star, 
  Scale, 
  Accessibility, 
  ExternalLink,
  MessageCircle,
  Truck
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Faixa pré-rodapé com credenciais */}
      <div className="bg-blue-950/80 border-b border-blue-900/40 py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2.5 bg-blue-900/60 rounded-xl text-amber-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">{COMPANY.sinceText}</div>
              <div className="text-xs text-slate-400">Quase 18 anos de mercado</div>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2.5 bg-blue-900/60 rounded-xl text-amber-400">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">Pesos Padrão INMETRO</div>
              <div className="text-xs text-slate-400">Caminhão munck próprio para calibração</div>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2.5 bg-blue-900/60 rounded-xl text-amber-400">
              <Star className="w-6 h-6 fill-amber-400" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">Nota {COMPANY.reviews.rating} no Google</div>
              <div className="text-xs text-slate-400">Com base em {COMPANY.reviews.count} avaliações reais</div>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2.5 bg-blue-900/60 rounded-xl text-amber-400">
              <Accessibility className="w-6 h-6" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">Acessibilidade Total</div>
              <div className="text-xs text-slate-400">{COMPANY.address.accessibility}</div>
            </div>
          </div>

        </div>
      </div>

      {/* Conteúdo principal do rodapé */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Coluna 1: Sobre e Identificação */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-slate-950">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black text-white uppercase tracking-tight">
                  PONTUAL
                </span>{" "}
                <span className="text-sm font-bold text-amber-400 uppercase">
                  BALANÇAS
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              {COMPANY.slogan} Especialistas em venda, montagem, conserto e calibração de balanças de grande porte no Triângulo Mineiro.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-300">{COMPANY.corporateName}</p>
              <p>CNPJ: {COMPANY.cnpj}</p>
              <p className="italic text-amber-400/90 font-medium">"{COMPANY.secondarySlogan}"</p>
            </div>

            {/* Avaliação Google */}
            <div className="pt-3">
              <a
                href={COMPANY.reviews.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              >
                <div className="flex text-amber-400">
                  {"★".repeat(5)}
                </div>
                <span><strong>{COMPANY.reviews.rating}</strong> ({COMPANY.reviews.count} avaliações)</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Linhas de Balança (Forte da empresa) */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Nossas Balanças
            </h3>
            <ul className="space-y-2.5 text-sm">
              {PRODUCTS.map(p => (
                <li key={p.slug}>
                  <Link 
                    href={`/balancas/${p.slug}`}
                    className="text-slate-400 hover:text-amber-400 transition-colors flex items-center justify-between"
                  >
                    <span>{p.name}</span>
                    <span className="text-[10px] uppercase font-semibold text-slate-600 bg-slate-900 px-1.5 py-0.5 rounded">
                      Ver mais
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link 
                  href="/balancas"
                  className="text-amber-400 hover:text-amber-300 text-xs font-semibold flex items-center gap-1"
                >
                  Ver catálogo completo de balanças →
                </Link>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Marcas Autorizadas
              </h4>
              <p className="text-xs text-slate-400">
                COIMMA • Datamars / Tru-Test • RDA Sistemas
              </p>
            </div>
          </div>

          {/* Coluna 3: Links Rápidos & Serviços */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Serviços & Institucional
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/servicos" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Calibração com Caminhão INMETRO
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Venda (Novas e Seminovas)
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Montagem e Instalação no Local
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Conserto e Assistência Técnica
                </Link>
              </li>
              <li>
                <Link href="/segmentos" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Soluções por Segmento
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-slate-400 hover:text-amber-400 transition-colors">
                  História e Empresa
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Fale com um Especialista
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="text-slate-500 hover:text-slate-400 text-xs transition-colors">
                  Política de Privacidade (LGPD)
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Endereço e Contato Central */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Atendimento e Localização
            </h3>

            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200">{COMPANY.address.street}</p>
                  <p>Bairro {COMPANY.address.neighborhood}</p>
                  <p>{COMPANY.address.city} - {COMPANY.address.state}, CEP {COMPANY.address.cep}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={COMPANY.phone.link} className="hover:text-white transition-colors text-slate-200 font-semibold">
                  {COMPANY.phone.display}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={getWhatsAppLink()} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-300 text-emerald-400 font-bold transition-colors"
                >
                  {COMPANY.whatsapp.display} (WhatsApp)
                </a>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-400 pt-1">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <p>{COMPANY.hours.weekdays}</p>
                  <p className="text-slate-500">{COMPANY.hours.weekend}</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY.address.googleMapsEmbedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Abrir no Google Maps →
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Linha de Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 {COMPANY.name}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-2">
            <span>{COMPANY.corporateName}</span>
            <span>•</span>
            <Link href="/politica-de-privacidade" className="hover:text-slate-300 underline">
              Privacidade & Termos
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
