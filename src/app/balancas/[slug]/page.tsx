import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  ArrowLeft, 
  Truck, 
  Building2, 
  TrainTrack, 
  Milk, 
  Scale, 
  HelpCircle, 
  FileText, 
  Wrench,
  ShieldCheck,
  AlertCircle
} from "lucide-react";
import { PRODUCTS, COMPANY, getWhatsAppLink } from "@/config/company";
import ContactForm from "@/components/ContactForm";
import CtaSection from "@/components/CtaSection";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.name} em Uberlândia | Venda, Montagem e Calibração INMETRO`,
    description: `${product.name}: ${product.tagline}. Venda de modelos novos e seminovos, calibração com caminhão de pesos padrão INMETRO e montagem no Triângulo Mineiro pela Pontual Balanças.`,
    openGraph: {
      title: `${product.name} | Pontual Balanças Uberlândia`,
      description: product.shortDescription,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const getProductIcon = (s: string) => {
    switch (s) {
      case "rodoviaria":
        return <Truck className="w-6 h-6 text-amber-500" />;
      case "industrial":
        return <Building2 className="w-6 h-6 text-amber-500" />;
      case "ferroviaria":
        return <TrainTrack className="w-6 h-6 text-amber-500" />;
      case "gado":
        return <Milk className="w-6 h-6 text-amber-500" />;
      default:
        return <Scale className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <div className="py-10 space-y-16">
      
      {/* 1. TOPO & INTRODUÇÃO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-blue-900">Início</Link>
          <span>/</span>
          <Link href="/balancas" className="hover:text-blue-900">Balanças</Link>
          <span>/</span>
          <span className="font-semibold text-slate-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 bg-blue-100 rounded-xl">
                {getProductIcon(product.slug)}
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                {product.badge || "Linha de Alta Confiabilidade"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              {product.name}
            </h1>

            <p className="text-lg font-semibold text-amber-600">
              {product.tagline}
            </p>

            <p className="text-base text-slate-700 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Ações imediatas */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href={getWhatsAppLink(product.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-transform hover:scale-105 text-sm"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Pedir Orçamento no WhatsApp</span>
              </a>

              <a
                href={COMPANY.phone.link}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Ligar {COMPANY.phone.display}</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Atendemos Uberlândia, Triângulo Mineiro e regiões produtoras vizinhas.</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[360px] sm:h-[440px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md p-4 rounded-2xl text-white border border-slate-700">
                <span className="text-amber-400 text-xs font-bold uppercase block mb-1">
                  Atendimento Especializado
                </span>
                <p className="text-sm font-semibold">
                  Venda de novas e seminovas revisadas, montagem e calibração no local.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. O QUE A PONTUAL BALANÇAS FAZ PARA ESTE PRODUTO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-8">
          <div className="max-w-2xl">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block mb-2">
              Solução Completa de Ponta a Ponta
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              O Que a Pontual Balanças Faz por Você
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              Você não precisa lidar com múltiplos fornecedores para estrutura, eletrônica e calibração:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-900/60 text-amber-400 flex items-center justify-center font-black">
                1
              </div>
              <h3 className="font-bold text-white text-base">Venda (Novas e Seminovas)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Opção de equipamento 0km com garantia total de fábrica ou balança seminova inspecionada para redução de custos.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-900/60 text-amber-400 flex items-center justify-center font-black">
                2
              </div>
              <h3 className="font-bold text-white text-base">Montagem & Instalação</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Instalação da plataforma, células de carga blindadas, fiação protegida e calibração civil/mecânica no seu local.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-900/60 text-amber-400 flex items-center justify-center font-black">
                3
              </div>
              <h3 className="font-bold text-white text-base">Calibração com Padrão INMETRO</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Aplicação de pesos padrão rastreados transportados por caminhão munck próprio, garantindo precisão e conformidade.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-900/60 text-amber-400 flex items-center justify-center font-black">
                4
              </div>
              <h3 className="font-bold text-white text-base">Assistência Técnica e Peças</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Atendimento rápido para conserto, troca de células avariadas, ajuste de tirantes e manutenção periódica preventiva.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. APLICAÇÕES E BENEFÍCIOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Aplicações e Setores */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-amber-500" />
              <span>Onde Esta Balança é Utilizada</span>
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Aplicações Práticas:
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  {product.applications.map((app, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Setores que Mais Demandam:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.sectors.map((sec, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold"
                    >
                      {sec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Benefícios */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span>Benefícios para a Sua Operação</span>
            </h3>

            <ul className="space-y-3.5 text-sm text-slate-700">
              {product.benefits.map((ben, i) => (
                <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="p-1 bg-emerald-100 rounded text-emerald-700 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium text-slate-800">{ben}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900">
              <strong>Foco em Rentabilidade:</strong> uma pesagem incorreta de apenas 1% em caminhões ou animais pode causar dezenas de milhares de reais em perdas anuais.
            </div>
          </div>

        </div>
      </section>

      {/* 4. ESPECIFICAÇÕES TÉCNICAS (COM PLACEHOLDER CONFORME BRIEFING) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-900" />
                <span>Especificações Técnicas e Dimensões</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Configurações personalizadas conforme a carga e espaço físico da sua empresa.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
              <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
              Projetos sob encomenda
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 text-amber-950 space-y-3 text-sm">
            <p className="font-semibold text-amber-900">
              [CONFIRMAR: capacidades em toneladas, dimensões de plataforma e modelos exatos conforme projeto solicitado].
            </p>
            <p className="text-xs text-amber-900/80 leading-relaxed">
              Trabalhamos com plataformas metálicas, de concreto e mistas, além de barras de pesagem portáteis e células de carga analógicas e digitais de alta precisão. Entre em contato informando seu fluxo para receber a ficha técnica exata indicada para sua operação.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-center text-xs text-slate-600">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <strong className="block text-slate-900 mb-1">Células de Carga</strong>
              Com grau de proteção contra poeira e umidade
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <strong className="block text-slate-900 mb-1">Indicadores Digitais</strong>
              Compatíveis com computadores, impressoras e sistemas
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <strong className="block text-slate-900 mb-1">Padrão Metrológico</strong>
              Em conformidade com as portarias e regulamentos do INMETRO
            </div>
          </div>
        </div>
      </section>

      {/* 5. PERGUNTAS FREQUENTES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-6">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-amber-500" />
              <span>Dúvidas Frequentes sobre {product.name}</span>
            </h3>
            <p className="text-xs text-slate-500">
              Respostas diretas da nossa equipe técnica para facilitar sua tomada de decisão.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.faqs.map((faq, i) => (
              <div 
                key={i} 
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2"
              >
                <h4 className="text-sm font-bold text-slate-900 flex items-start gap-2">
                  <span className="text-amber-500 font-black shrink-0">Q.</span>
                  <span>{faq.question}</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed pl-5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FORMULÁRIO PRÉ-PREENCHIDO COM O PRODUTO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-5">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-wider block">
              Orçamento Personalizado
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Solicitar Cotação para {product.name}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Preencha o formulário para receber uma cotação sob medida, seja para compra (nova ou seminova), montagem na sua base ou calibração periódica com pesos padrão INMETRO.
            </p>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl space-y-2 text-xs text-blue-950">
              <p className="font-bold">Precisa de resposta rápida?</p>
              <p>
                Clique no botão de WhatsApp abaixo para iniciar a conversa com a mensagem pré-preenchida para este equipamento.
              </p>
              <a
                href={getWhatsAppLink(product.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:underline pt-1"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar agora no WhatsApp ({COMPANY.whatsapp.display}) →</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm defaultProduct={product.name} />
          </div>

        </div>
      </section>

      {/* 7. CTA FINAL DA PÁGINA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaSection
          title={`Interessado em ${product.name}?`}
          subtitle="Converse com a Pontual Balanças em Uberlândia e garanta o peso certo na sua operação."
          whatsappMessage={product.whatsappMessage}
        />
      </div>

    </div>
  );
}

