# Pontual Balanças — Site Institucional

Site institucional de alta conversão e SEO local desenvolvido para a **Pontual Balanças** (Uberlândia - MG), com base nas diretrizes do briefing oficial.

## 🚀 Tecnologias Utilizadas
- **Next.js 16 (App Router)** com TypeScript
- **Tailwind CSS v4**
- **Lucide Icons**
- **Schema.org (LocalBusiness JSON-LD)**
- **Static Site Generation (SSG)** para velocidade máxima e indexação no Google

---

## 📂 Arquitetura de Páginas

| Rota | Página | Descrição |
|---|---|---|
| `/` | Início | Hero de conversão, credenciais (desde 2008, 4.9 Google), 4 balanças prioritárias, caminhão INMETRO, formulário e depoimentos reais. |
| `/balancas` | Catálogo | Visão geral das balanças de grande porte. |
| `/balancas/rodoviaria` | Balança Rodoviária | Pesagem de caminhões e carretas, aplicações agrícolas/industriais, FAQs e CTA. |
| `/balancas/industrial` | Balança Industrial | Balanças de fluxo contínuo, piso e suspensas (RDA / homologadas INMETRO). |
| `/balancas/ferroviaria` | Balança Ferroviária | Pesagem de vagões em terminais e usinas. |
| `/balancas/gado` | Balança para Gado | Troncos e barras de pesagem eletrônica (COIMMA e Tru-Test/Datamars). |
| `/servicos` | Serviços | Venda (novas e seminovas), montagem, conserto e destaque do caminhão munck com pesos padrão INMETRO em campo. |
| `/segmentos` | Segmentos | Soluções dedicadas para Fazendas, Confinamentos, Indústrias, Frigoríficos e Reciclagem. |
| `/sobre` | Sobre Nós | Quase 18 anos de história em Uberlândia, fotos reais da oficina, caminhão e equipe. |
| `/contato` | Contato | Telefones clicáveis, WhatsApp comercial, horário, mapa do Google e formulário. |
| `/politica-de-privacidade` | LGPD | Política de Privacidade e Proteção de Dados Pessoais. |
| `/sitemap.xml` | Sitemap | Mapa do site para indexação nos mecanismos de busca. |
| `/robots.txt` | Robots | Diretivas para robôs de indexação. |

---

## ⚙️ Centralização de Configurações

Todos os telefones, WhatsApps, endereços, horários e textos institucionais estão centralizados em:
`src/config/company.ts`

Ao atualizar esse arquivo, todos os cabeçalhos, rodapés, botões flutuantes, esquemas de SEO e mensagens pré-preenchidas são atualizados automaticamente em todo o site.

---

## 🛠️ Como Executar o Projeto

```bash
# Entrar na pasta do projeto
cd "pontual_balancas"

# Instalar dependências (caso necessário)
npm install

# Modo de Desenvolvimento
npm run dev

# Gerar Build de Produção
npm run build

# Executar Servidor de Produção
npm run start
```
