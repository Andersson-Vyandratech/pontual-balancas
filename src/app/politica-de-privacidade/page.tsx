import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { COMPANY } from "@/config/company";

export const metadata: Metadata = {
  title: "Política de Privacidade e Proteção de Dados (LGPD) | Pontual Balanças",
  description: "Política de Privacidade da Pontual Balanças em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).",
};

export default function PoliticaPrivacidadePage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar ao Início</span>
          </Link>
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-900">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-black text-slate-900">
              Política de Privacidade (LGPD)
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            Última atualização: Novembro de 2026
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm text-sm text-slate-700 space-y-6 leading-relaxed">
          
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">1. Informações Gerais e Controlador</h2>
            <p>
              Esta Política de Privacidade tem por objetivo esclarecer como a <strong>{COMPANY.corporateName}</strong>, inscrita no CNPJ sob o nº <strong>{COMPANY.cnpj}</strong>, com sede na {COMPANY.address.full}, trata os dados pessoais coletados por meio deste website institucional, em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 – LGPD).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">2. Dados Pessoais Coletados</h2>
            <p>
              Coletamos dados fornecidos voluntariamente por você ao preencher nosso formulário de solicitação de orçamento ou ao iniciar contato via WhatsApp e telefone. Esses dados incluem:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Nome completo;</li>
              <li>Nome da empresa ou propriedade rural (fazenda);</li>
              <li>Cidade e Estado (UF);</li>
              <li>Telefone celular e/ou WhatsApp;</li>
              <li>Endereço de e-mail;</li>
              <li>Informações técnicas sobre o equipamento de interesse e descrição da necessidade.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">3. Finalidade do Tratamento dos Dados</h2>
            <p>Os dados pessoais coletados são utilizados exclusivamente para:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Elaborar e enviar propostas comerciais e orçamentos solicitados pelo titular;</li>
              <li>Realizar contato técnico prévio para alinhamento de visitas de montagem ou calibração;</li>
              <li>Emitir notas fiscais, laudos de calibração metrológica e ordens de serviço quando contratado;</li>
              <li>Cumprimento de obrigações legais e regulatórias junto aos órgãos fiscalizadores (como INMETRO/IPEM).</li>
            </ul>
            <p className="font-semibold text-slate-800">
              Não vendemos, alugamos nem compartilhamos seus dados pessoais com terceiros para fins de marketing.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">4. Cookies e Tecnologias de Medição</h2>
            <p>
              Utilizamos cookies essenciais para o correto funcionamento do site e ferramentas analíticas (como Google Analytics 4) para mensurar o tráfego de visitantes de forma agregada e anônima. Você pode desabilitar cookies a qualquer momento nas configurações do seu navegador web.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">5. Segurança dos Dados</h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acessos não autorizados, perdas, destruição ou alterações indevidas, incluindo criptografia na transmissão (HTTPS/SSL).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">6. Direitos do Titular de Dados</h2>
            <p>
              Nos termos do artigo 18 da LGPD, você possui o direito de confirmar a existência de tratamento, acessar seus dados, corrigir dados incompletos ou desatualizados, solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.
            </p>
            <p>
              Para exercer quaisquer desses direitos, entre em contato conosco pelo telefone <strong>{COMPANY.phone.display}</strong> ou WhatsApp <strong>{COMPANY.whatsapp.display}</strong>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">7. Foro</h2>
            <p>
              Esta Política é regida pelas leis da República Federativa do Brasil, sendo eleito o foro da Comarca de Uberlândia (MG) para dirimir quaisquer dúvidas decorrentes deste documento.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

