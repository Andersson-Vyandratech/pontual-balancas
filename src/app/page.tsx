import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Truck, 
  Wrench, 
  Scale, 
  Building2, 
  TrainTrack, 
  Milk,
  ExternalLink,
  Award,
  Layers,
  MapPin
} from "lucide-react";
import { COMPANY, PRODUCTS, SERVICES, SECTORS, getWhatsAppLink } from "@/config/company";
import ContactForm from "@/components/ContactForm";
import CtaSection from "@/components/CtaSection";

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-950 text-white overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Texto do Hero */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-amber-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{COMPANY.sinceText} em Uberlândia • Triângulo Mineiro</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-none text-white">
                Pesagem precisa para quem{" "}
                <span className="text-amber-400 underline decoration-amber-500/40 decoration-wavy">
                  não pode parar.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Especialistas em <strong>balanças rodoviárias, industriais e para gado</strong>. Venda de novos e seminovos, montagem técnica e calibração no local com <strong>caminhão de pesos padrão INMETRO</strong>.
              </p>

              {/* Botões de Ação Imediata */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={getWhatsAppLink("Olá! Vim pelo site e gostaria de um orçamento para balança ou calibração.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-4 rounded-xl shadow-lg transition-all hover:scale-105 text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Pedir Orçamento no WhatsApp</span>
                </a>

                <a
                  href={COMPANY.phone.link}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold px-7 py-4 rounded-xl border border-slate-700 transition-all text-base"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Ligar {COMPANY.phone.display}</span>
                </a>
              </div>

              {/* Prova social rápida */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    {"★".repeat(5)}
                  </div>
                  <span className="text-slate-200 font-semibold">{COMPANY.reviews.rating}/5.0</span>
                  <span>no Google ({COMPANY.reviews.count} avaliações)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-200 font-semibold">Assistência Autorizada</span>
                  <span>(COIMMA, Tru-Test, RDA)</span>
                </div>
              </div>

            </div>

            {/* Imagem de Destaque / Caminhão com pesos padrão */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-800 group">
                <img
                  src="/images/caminhao-pesos-padrao.jpg"
                  alt="Caminhão munck com pesos padrão INMETRO da Pontual Balanças em Uberlândia"
                  className="w-full h-[380px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-amber-400 text-slate-950 text-[10px] font-black uppercase mb-1">
                    Diferencial Único em Campo
                  </span>
                  <p className="text-sm font-bold text-white">
                    Calibração no local com caminhão de pesos padrão INMETRO
                  </p>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Levamos a precisão até a sua fazenda ou indústria sem você precisar desmontar a balança.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FAIXA DE CREDIBILIDADE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-14 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          
          <div className="space-y-1 border-r border-slate-100 last:border-none">
            <div className="text-2xl sm:text-3xl font-black text-blue-950">
              {COMPANY.sinceText}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-700">
              Quase 18 Anos em Uberlândia
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Fundada em dezembro de 2008
            </p>
          </div>

          <div className="space-y-1 border-r border-slate-100 last:border-none">
            <div className="text-2xl sm:text-3xl font-black text-amber-500 flex items-center justify-center gap-1">
              <span>{COMPANY.reviews.rating}</span>
              <Star className="w-5 h-5 fill-amber-500" />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-700">
              Avaliação 4,9 no Google
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              43 avaliações de clientes reais
            </p>
          </div>

          <div className="space-y-1 border-r border-slate-100 last:border-none">
            <div className="text-2xl sm:text-3xl font-black text-blue-950">
              INMETRO
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-700">
              Pesos Padrão Rastreáveis
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Calibração e laudos metrológicos
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600">
              Autorizada
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-700">
              Assistência Credenciada
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              COIMMA • TRU-TEST • RDA
            </p>
          </div>

        </div>
      </section>

      {/* 3. NOSSAS BALANÇAS (O FORTE DA EMPRESA) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-950 text-xs font-bold uppercase tracking-wider">
            <Scale className="w-4 h-4 text-amber-500" />
            Linha de Grande Porte
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Nossas Balanças Prioritárias
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Atendemos de ponta a ponta: <strong>venda (novas e seminovas), montagem, calibração e assistência</strong> para as operações mais exigentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((prod) => (
            <div 
              key={prod.id} 
              className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {prod.badge && (
                  <span className="absolute top-3 right-3 bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow">
                    {prod.badge}
                  </span>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-amber-600 font-semibold uppercase tracking-wider">
                    {prod.tagline}
                  </p>
                  <p className="text-sm text-slate-600 line-clamp-3">
                    {prod.shortDescription}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <Link
                    href={`/balancas/${prod.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 px-4 rounded-xl text-xs transition-colors"
                  >
                    <span>Ver detalhes e aplicações</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={getWhatsAppLink(prod.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold py-2 px-4 rounded-xl text-xs transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Orçamento Rápido</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DESTAQUE DO CAMINHÃO DE PESOS PADRÃO INMETRO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Truck className="w-4 h-4 text-amber-400" />
                Diferencial Central da Pontual
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                Caminhão Próprio de Calibração com Padrão INMETRO
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Para calibrar uma balança rodoviária ou industrial com exatidão metrológica, não bastam simulações: <strong>é necessário aplicar massa real certificada</strong>.
              </p>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-amber-500/20 rounded-md text-amber-400 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Calibração no local do cliente</h4>
                    <p className="text-xs text-slate-400">
                      Nosso caminhão vai até sua fazenda, indústria ou armazém sem você precisar desmontar a estrutura da balança.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 bg-amber-500/20 rounded-md text-amber-400 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Pesos de 500kg rastreados ao INMETRO</h4>
                    <p className="text-xs text-slate-400">
                      Massas padrão certificadas e guindaste munck integrado para testes rigorosos de excentricidade e repetibilidade.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 bg-amber-500/20 rounded-md text-amber-400 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Conformidade e tranquilidade fiscal</h4>
                    <p className="text-xs text-slate-400">
                      Evite multas em fiscalizações do IPEM/INMETRO e divergências de peso com clientes e transportadores.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={getWhatsAppLink("Olá! Gostaria de agendar a calibração da minha balança com o caminhão de pesos padrão.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow transition-all hover:scale-105 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Agendar Calibração em Campo</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-700">
                  <img
                    src="/images/caminhao-pesos-padrao.jpg"
                    alt="Caminhão munck com pesos padrão"
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-700">
                  <img
                    src="/images/veiculo-operacional.jpg"
                    alt="Veículo técnico Pontual Balanças Uberlândia"
                    className="w-full h-36 object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-700">
                  <img
                    src="/images/pesos-padrao-500kg.jpg"
                    alt="Pesos padrão de 500kg certificados INMETRO"
                    className="w-full h-36 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-700">
                  <img
                    src="/images/fachada-pontual-balancas.jpg"
                    alt="Oficina Pontual Balanças em Uberlândia"
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SERVIÇOS TÉCNICOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Wrench className="w-4 h-4 text-amber-500" />
            Suporte Integral
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Serviços Especializados
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Um único parceiro para solucionar toda a vida útil da sua balança, da compra à assistência corretiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 flex flex-col justify-between hover:border-blue-900 transition-colors"
            >
              <div className="space-y-3">
                <div className="h-40 rounded-xl overflow-hidden bg-slate-100 mb-3">
                  <img
                    src={serv.image}
                    alt={serv.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {serv.highlight && (
                  <span className="inline-block bg-amber-100 text-amber-900 text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                    {serv.highlight}
                  </span>
                )}
                <h3 className="text-lg font-bold text-slate-900">
                  {serv.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {serv.shortDescription}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <a
                  href={getWhatsAppLink(serv.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1 text-xs font-bold text-blue-950 hover:text-amber-600 transition-colors"
                >
                  <span>Solicitar este serviço</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SEGMENTOS ATENDIDOS */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-slate-800 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Building2 className="w-4 h-4 text-amber-500" />
              Mercados e Clientes
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
              Soluções Sob Medida para o Seu Segmento
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Entendemos a dor e o ritmo operacional de cada negócio em Uberlândia e região.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {SECTORS.map((sec) => (
              <div 
                key={sec.id}
                className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="h-28 rounded-xl overflow-hidden bg-slate-100">
                    <img
                      src={sec.image}
                      alt={sec.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {sec.title}
                  </h3>
                  <div className="text-xs text-slate-500">
                    <strong className="text-slate-700">Dor comum:</strong> {sec.pain}
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100">
                  <Link
                    href={sec.link}
                    className="text-xs font-bold text-blue-950 hover:text-amber-600 inline-flex items-center gap-1"
                  >
                    <span>Ver solução indicada</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MARCAS AUTORIZADAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <h3 className="text-xl font-bold text-slate-900">
              Assistência Técnica e Representação Autorizada
            </h3>
            <p className="text-xs text-slate-500">
              Trabalhamos com marcas líderes em tecnologia e confiabilidade metrológica no Brasil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {COMPANY.authorizedBrands.map((brand) => (
              <div
                key={brand.name}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-2 hover:bg-slate-100 transition-colors"
              >
                <div className="h-16 flex items-center justify-center">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="max-h-12 max-w-[160px] object-contain rounded"
                  />
                </div>
                <div className="font-bold text-slate-900 text-base">{brand.name}</div>
                <div className="text-xs text-slate-500 font-medium">{brand.segment}</div>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase">
                  Credenciada Oficial
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FORMULÁRIO DE ORÇAMENTO CENTRAL NA HOME */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="orcamento">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-amber-600" />
              Atendimento Especialista
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
              Solicite uma Cotação para a Sua Empresa ou Fazenda
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Diga-nos o tipo de balança ou serviço que você necessita. Nossa equipe técnica entrará em contato para apresentar a proposta mais vantajosa e viável.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center shrink-0 font-bold">
                  1
                </div>
                <p className="text-sm text-slate-700">
                  <strong>Levantamento preciso:</strong> avaliamos capacidade, comprimento e particularidades da sua base.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center shrink-0 font-bold">
                  2
                </div>
                <p className="text-sm text-slate-700">
                  <strong>Orçamento sem surpresas:</strong> opções de compra nova ou seminova revisada com garantia.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center shrink-0 font-bold">
                  3
                </div>
                <p className="text-sm text-slate-700">
                  <strong>Suporte no Triângulo Mineiro:</strong> equipe em campo com veículos e caminhão munck próprio.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-900 text-amber-400 rounded-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase">Prefere ligar direto?</div>
                  <a href={COMPANY.phone.link} className="text-lg font-black text-slate-900 hover:text-blue-900">
                    {COMPANY.phone.display}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* 9. AVALIAÇÕES GOOGLE REAIS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-amber-400 text-xl">
            {"★".repeat(5)}
          </div>
          <h3 className="text-2xl font-bold text-slate-900">
            Nota {COMPANY.reviews.rating} de 5.0 no Google
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            A satisfação dos nossos clientes é comprovada publicamente por <strong>{COMPANY.reviews.count} avaliações</strong> no Google Perfil de Empresas.
          </p>
          <div className="pt-2">
            <a
              href={COMPANY.reviews.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-950 hover:text-amber-600 underline"
            >
              <span>Ver perfil e avaliações no Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 10. CTA FINAL DA PÁGINA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaSection
          title="Sua balança precisa de calibração ou conserto urgente?"
          subtitle="Converse agora mesmo com a Pontual Balanças em Uberlândia e evite perdas na sua colheita ou faturamento."
          whatsappMessage="Olá! Gostaria de um orçamento para a Pontual Balanças."
        />
      </div>

    </div>
  );
}
