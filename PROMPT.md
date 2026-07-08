# PROMPT MESTRE — Portfólio Next.js de Daniel Sebastian Nunes Cavalcanti

Copie e cole o texto abaixo em qualquer IA geradora de código (Claude, v0.dev, Cursor, etc.) para gerar o portfólio completo.

---

Você é um engenheiro de software full-stack sênior e designer de produto especializado em portfólios de desenvolvedores. Construa um portfólio pessoal completo, moderno e performático em **Next.js 14+ (App Router)**, com **TypeScript**, **Tailwind CSS** e animações leves com **Framer Motion**.

## 1. Identidade e objetivo

O site é o portfólio profissional de:

- **Nome:** Daniel Sebastian Nunes Cavalcanti
- **Título:** Desenvolvedor Java Spring Backend | Angular | Next.js
- **Contato:** daniel.sebastian.nc@gmail.com | (87) 99189-9798
- **GitHub:** github.com/Daniel-SebastiaNC
- **LinkedIn/handle:** @daniel-sebastian-nc

O objetivo é transmitir: domínio técnico backend (Java/Spring), versatilidade fullstack (Angular, Next.js, Node), experiência real de mercado (freelance e estágio) e formação acadêmica dupla e ativa. O tom visual deve ser **sério, técnico, minimalista e com identidade própria** — evitar templates genéricos de "dev portfolio". Usar uma paleta escura (dark mode como padrão, com toggle para light mode), tipografia com boa hierarquia (ex: Geist, Inter ou Space Grotesk para títulos + uma mono para trechos de código/tags), micro-interações sutis (hover em cards, scroll reveal, cursor de destaque em botões).

## 2. Estrutura de seções (single-page com navegação por âncoras + rotas dedicadas opcionais)

1. **Hero** — nome, título, call-to-action (baixar CV em PDF, contato), links sociais, indicador de disponibilidade para freelance/trabalho.
2. **Sobre** — resumo curto do perfil profissional, stacks principais, idiomas (Português nativo, Inglês A2-B1).
3. **Experiência Profissional** (timeline vertical, mais recente primeiro):
   - **Naurial** (Jun 2025 – Atual) — Freelance, Desenvolvedor FullStack. Plataforma de Educação com IA. Destaques: features em JS/TS com Node.js e React/Next.js; integração de IA de voz para transcrição e análise de conversas; IA generativa para quizzes personalizados; SCRUM com Jira; Git com PR/code review.
   - **Centraliza** (Nov 2024 – Mar 2025) — Freelance, Suporte e Desenvolvedor. CRM de vendas e atendimento. Destaques: suporte técnico, automações e integrações de API, documentação técnica, treinamento de equipes, inglês técnico.
   - **Monstack** (Fev 2022 – Fev 2024) — Estágio, Desenvolvedor Software e Hardware. Startup de gerenciamento de energia. Destaques: dispositivos embarcados em C++, interfaces web (HTML5/CSS3/JS), apps mobile (Swift, React Native), UX/UI, SCRUM.
4. **Formação Acadêmica** (cards ou timeline paralela à experiência):
   - **Bacharelado em Engenharia de Software** — IFPE, Campus Belo Jardim (Ago 2025 – Conclusão prevista Jul 2029) — cursando em paralelo/complementar ao ADS.
   - **Análise e Desenvolvimento de Sistemas** — FIAP (Ago 2024 – Conclusão Jul 2026).
   - Sub-seção "Formação Complementar" (badges/lista compacta): Backend com Java, Testes JUnit e Mockito, SCRUM (Santander DIO, 2024); Java Spring Boot, Angular, UX Design, Git/GitHub, Linux, Figma, Vue 3 (Alura, 2024); Java, Spring Boot, Docker, AWS, Clean Code (Java 10x, 2025); Inglês (A Jornada do Autodidata em Inglês, 2025).
5. **Projetos Pessoais** (grid de cards com stack em badges, link para GitHub, descrição objetiva):
   - **LibraryManager** (Fev–Mar 2025) — Spring Boot 3, Java 17, Spring JPA, Spring Security, PostgreSQL, FlywayDB, Swagger/OpenAPI, Lombok, Docker.
   - **MindReview** (Mar–Abr 2025) — Sistema de repetição espaçada (flashcards), Spring Boot 3, Java 17, Clean Architecture/SOLID, PostgreSQL, JPA/Hibernate, Swagger, JUnit/Mockito.
6. **Skills** — agrupadas por categoria: Backend (Java, Spring Boot, Spring Security, Spring JPA), Frontend (Angular, React, Next.js, TypeScript), Mobile/Embarcado (Swift, React Native, C++), DevOps/Infra (Docker, AWS, Git), Banco de Dados (PostgreSQL, FlywayDB), Testes (JUnit, Mockito), Metodologias (SCRUM, Clean Code, SOLID).
7. **Contato** — formulário funcional (usar Resend ou API route própria para envio de e-mail) + links diretos (e-mail, WhatsApp via número, GitHub).
8. **Footer** — copyright, links rápidos, "feito com Next.js".

## 3. Requisitos técnicos

- Next.js 14+ App Router, TypeScript estrito.
- Tailwind CSS com tema customizado (cores, fontes, espaçamentos definidos em `tailwind.config.ts`).
- Conteúdo do currículo centralizado em `/data/resume.ts` (tipado), nunca hardcoded nos componentes — isso facilita manutenção futura.
- Componentização clara: `components/sections/*`, `components/ui/*` (botões, badges, cards reutilizáveis).
- Animações com Framer Motion (scroll-reveal, stagger em listas, transições de tema).
- Totalmente responsivo (mobile-first).
- SEO: metadata dinâmica, Open Graph, favicon, sitemap.xml, robots.txt.
- Acessibilidade: contraste AA, navegação por teclado, alt em imagens.
- Performance: imagens otimizadas com `next/image`, fontes via `next/font`.
- Dark/Light mode com `next-themes`.
- Deploy-ready para Vercel.
- Código limpo, comentado onde necessário, seguindo convenções de nomenclatura consistentes.

## 4. Entregáveis esperados

- Projeto Next.js completo e funcional (`create-next-app` com TS + Tailwind + App Router).
- Arquivo `/data/resume.ts` com todos os dados estruturados do currículo acima.
- Todas as seções implementadas como componentes.
- README.md com instruções de setup e deploy.

Gere o projeto completo, arquivo por arquivo, começando pela estrutura de pastas e pelo `resume.ts`, depois os componentes de UI base, depois cada seção.