# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint via Next.js
npm run start    # Serve production build
```

There are no tests configured yet.

## Stack

- **Next.js 15** (App Router) with **React 19** and **TypeScript** (strict mode)
- **Tailwind CSS v4** — configured via `@import "tailwindcss"` in `globals.css` and `postcss.config.mjs`; no `tailwind.config.*` file exists
- **Geist** font family loaded via `next/font/google` and exposed as CSS variables `--font-geist-sans` / `--font-geist-mono`

## Architecture

All source lives under `src/app/` using the Next.js App Router convention:

- `layout.tsx` — root layout; sets font variables and metadata
- `page.tsx` — home page (`/`); currently a bare shell
- `globals.css` — global styles; defines `--background` / `--foreground` CSS variables with dark-mode overrides via `prefers-color-scheme`; maps Tailwind theme tokens to those variables via `@theme inline`

The path alias `@/*` maps to `src/*`.

## Conventions

- CSS custom properties (`--background`, `--foreground`) drive theming; reference them through Tailwind's `bg-background` / `text-foreground` utility classes rather than hardcoding colors.
- New pages go in `src/app/<route>/page.tsx`; shared UI components should live in `src/components/`.

# plan

# CLAUDE.md — Portfólio Daniel Sebastian Nunes Cavalcanti

Este arquivo é o guia de execução para o Claude Code construir o projeto do zero. Ele deve ser colocado na raiz do repositório antes de iniciar o trabalho.

## Visão geral do projeto

Portfólio profissional em **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**, para o desenvolvedor Daniel Sebastian Nunes Cavalcanti (Java/Spring Backend, Angular, Next.js). Dark mode como padrão, com toggle. Single-page com navegação por âncoras.

## Stack e decisões técnicas fixas

- Next.js 14+, App Router, TypeScript estrito (`strict: true`).
- Tailwind CSS (config customizado, sem UI kits pesados — se necessário, usar apenas primitivos do `shadcn/ui`).
- `next-themes` para dark/light mode.
- `framer-motion` para animações (scroll reveal, stagger, transições).
- `next/font` (Geist ou Space Grotesk para títulos, Inter para corpo, uma mono para badges/tags).
- `lucide-react` para ícones.
- Dados do currículo 100% centralizados em `/data/resume.ts`, tipado com interfaces em `/types/resume.ts`. Nenhum componente deve ter texto de currículo hardcoded.
- Formulário de contato: API route em `/app/api/contact/route.ts` (usar Resend se houver chave de API disponível; caso contrário, deixar mailto como fallback funcional).
- Deploy-target: Vercel.

## Estrutura de pastas esperada

```
/app
  /layout.tsx
  /page.tsx
  /api/contact/route.ts
/components
  /sections
    Hero.tsx
    About.tsx
    Experience.tsx
    Education.tsx
    Projects.tsx
    Skills.tsx
    Contact.tsx
  /ui
    Badge.tsx
    Card.tsx
    Timeline.tsx
    ThemeToggle.tsx
    Button.tsx
/data
  resume.ts
/types
  resume.ts
/public
  /cv (PDF do currículo, se fornecido)
  favicon, og-image, etc.
tailwind.config.ts
next.config.js
README.md
```

## Dados estruturados do currículo (fonte da verdade)

Use exatamente estes dados ao popular `/data/resume.ts`. Não invente informações que não estão aqui.

### Perfil
- Nome: Daniel Sebastian Nunes Cavalcanti
- Título: Desenvolvedor Java Spring Backend | Angular | Next.js
- Email: daniel.sebastian.nc@gmail.com
- Telefone: (87) 99189-9798
- GitHub: github.com/Daniel-SebastiaNC
- Handle: @daniel-sebastian-nc
- Idiomas: Português (Nativo), Inglês (A2-B1, curso "A Jornada do Autodidata em Inglês", 2025)

### Formação acadêmica
1. **Bacharelado em Engenharia de Software** — IFPE, Campus Belo Jardim — Ago 2025 a Jul 2029 (em andamento).
2. **Análise e Desenvolvimento de Sistemas** — FIAP — Ago 2024 a Jul 2026 (em andamento/conclusão prevista).

### Formação complementar
- Backend com Java — Santander DIO, 2024
- Testes JUnit e Mockito — Santander DIO, 2024
- SCRUM — Santander DIO, 2024
- Java Spring Boot, Angular, UX Design — Alura, 2024
- Git/GitHub, Linux, Figma, Vue 3 — Alura, 2024
- Java, Spring Boot, Docker, AWS, Clean Code — Java 10x, 2025

### Experiência profissional (ordem cronológica decrescente)
1. **Naurial** — Remoto — Freelance, Desenvolvedor FullStack — Jun 2025 até hoje
   - Plataforma de Educação com IA.
   - Novas funcionalidades em JavaScript/TypeScript com Node.js e React/Next.js, foco em performance e escalabilidade.
   - Integração de IA de voz para transcrição automática e análise de conversas dos usuários.
   - IA generativa para criação automática de quizzes personalizados.
   - Correções de bugs e melhorias contínuas de estabilidade e UX.
   - Git com boas práticas (branches, PRs, code review).
   - Cerimônias SCRUM, gestão de tarefas via Jira.

2. **Centraliza** — Remoto — Freelance, Suporte e Desenvolvedor — Nov 2024 a Mar 2025
   - CRM de Vendas e Atendimento para Empreendedores.
   - Suporte técnico especializado e atendimento a chamados.
   - Automações, integrações entre sistemas e APIs.
   - Documentação técnica de processos e sistemas.
   - Gestão e treinamento de equipes técnicas.
   - Inglês técnico para leitura e escrita de documentação.

3. **Monstack** — Híbrido — Estágio, Desenvolvedor Software e Hardware — Fev 2022 a Fev 2024
   - Startup de Gerenciamento e Monitoramento de Energia.
   - Dispositivos embarcados em C++.
   - Interfaces web com HTML5, CSS3, JavaScript.
   - Apps mobile com Swift e React Native.
   - UX/UI Design.
   - Apresentações de pitch em eventos.
   - Metodologia SCRUM.

### Projetos pessoais
1. **LibraryManager** (Fev–Mar 2025)
   - Sistema de Gerenciamento de Bibliotecas.
   - Spring Boot 3, Java 17, Spring JPA (CRUD de livros e leitores), Spring Security (autenticação/administradores), PostgreSQL, FlywayDB (versionamento de esquema), Swagger/OpenAPI, Lombok, Docker.
   - Link: github.com/Daniel-SebastiaNC (repositório LibraryManager)

2. **MindReview** (Mar–Abr 2025)
   - Sistema de revisão espaçada (flashcards).
   - Spring Boot 3, Java 17, ciclos de revisão espaçada (agora, 1 dia, 1 semana, 2 semanas, 1 mês), Clean Code/Clean Architecture/SOLID, PostgreSQL, JPA/Hibernate, Swagger/OpenAPI, JUnit/Mockito.
   - Link: github.com/Daniel-SebastiaNC (repositório MindReview)

### Skills (agrupadas)
- **Backend:** Java, Spring Boot, Spring Security, Spring JPA, Node.js
- **Frontend:** Angular, React, Next.js, TypeScript, JavaScript, HTML5, CSS3
- **Mobile/Embarcado:** Swift, React Native, C++
- **DevOps/Infra:** Docker, AWS, Git/GitHub, Linux
- **Banco de Dados:** PostgreSQL, FlywayDB, Hibernate/JPA
- **Testes:** JUnit, Mockito
- **Metodologias/Práticas:** SCRUM, Clean Code, Clean Architecture, SOLID
- **Design:** UX/UI, Figma

## Diretrizes de design

- Dark mode padrão: fundo quase-preto (não `#000` puro), acentos em uma cor de destaque única e consistente (ex.: verde-azulado ou âmbar — evitar o azul/roxo genérico de templates de IA).
- Tipografia com hierarquia clara: títulos grandes e confiantes, corpo de texto legível (16px+), tags/badges em fonte mono.
- Timeline vertical para Experiência e para Formação (podem ser visualmente distintas, mas seguir o mesmo padrão de componente `Timeline.tsx`).
- Cards de projeto com badges de stack, hover sutil (leve elevação/scale), link direto para o GitHub.
- Sem uso de imagens de stock genéricas; preferir elementos gráficos simples (gradientes, grid patterns, ícones).
- Scroll reveal com Framer Motion em cada seção (fade + slide sutil, sem exagero).
- Totalmente responsivo, testado em breakpoints mobile/tablet/desktop.

## Ordem de execução recomendada

1. `npx create-next-app@latest` com TypeScript, Tailwind, App Router, sem `src/` (ou com, à escolha, mas manter consistência).
2. Criar `/types/resume.ts` com as interfaces (Profile, Education, Experience, Project, SkillGroup).
3. Criar `/data/resume.ts` populado com os dados acima.
4. Configurar `tailwind.config.ts` (cores, fontes) e `next-themes`.
5. Construir componentes de UI base (`Badge`, `Card`, `Button`, `Timeline`, `ThemeToggle`).
6. Construir cada seção em `/components/sections`, consumindo os dados de `/data/resume.ts`.
7. Montar `/app/page.tsx` compondo todas as seções.
8. Implementar API route de contato.
9. Ajustar metadata/SEO em `/app/layout.tsx`.
10. Revisar responsividade, acessibilidade e performance.
11. Escrever `README.md` com instruções de setup local e deploy na Vercel.

## Regras gerais para o Claude Code

- Nunca inventar dados de currículo além dos listados aqui.
- Manter todo texto exibido em Português (pt-BR).
- Não usar bibliotecas de UI pesadas (ex.: Material UI, Ant Design) — preferir Tailwind + componentes próprios.
- Rodar `npm run build` ao final para garantir que o projeto compila sem erros antes de considerar a tarefa concluída.
- Perguntar ao usuário apenas se faltar alguma informação crítica não coberta neste arquivo (ex.: link real dos repositórios, se diferente do padrão `github.com/Daniel-SebastiaNC/<nome-projeto>`).
