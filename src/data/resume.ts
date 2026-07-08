export interface Experience {
  company: string;
  role: string;
  type: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  status: string;
}

export interface ComplementaryEducation {
  title: string;
  provider: string;
  year: string;
}

export interface Project {
  name: string;
  period: string;
  description: string;
  stack: string[];
  githubUrl?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const resume = {
  name: "Daniel Sebastian Nunes Cavalcanti",
  title: "Desenvolvedor Java Spring Backend | Angular | Next.js",
  email: "daniel.sebastian.nc@gmail.com",
  phone: "(87) 99189-9798",
  whatsapp: "https://wa.me/5587991899798",
  github: "https://github.com/Daniel-SebastiaNC",
  linkedin: "https://linkedin.com/in/daniel-sebastian-nc",
  available: true,

  about: `Desenvolvedor backend com foco em Java e Spring Boot, com experiência prática em projetos freelance e estágio. Versátil no fullstack com Angular, React e Next.js. Apaixonado por código limpo, boas práticas de engenharia e soluções que geram impacto real.`,

  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "A2–B1" },
  ],

  mainStack: ["Java", "Spring Boot", "Angular", "React", "Next.js", "TypeScript", "PostgreSQL", "Docker"],

  experience: [
    {
      company: "Naurial",
      role: "Desenvolvedor FullStack",
      type: "Freelance",
      period: "Jun 2025 – Atual",
      description: "Plataforma de Educação com IA.",
      highlights: [
        "Features em JS/TS com Node.js e React/Next.js",
        "Integração de IA de voz para transcrição e análise de conversas",
        "IA generativa para quizzes personalizados",
        "SCRUM com Jira e Git com PR/code review",
      ],
    },
    {
      company: "Centraliza",
      role: "Suporte e Desenvolvedor",
      type: "Freelance",
      period: "Nov 2024 – Mar 2025",
      description: "CRM de vendas e atendimento.",
      highlights: [
        "Suporte técnico e treinamento de equipes",
        "Automações e integrações de API",
        "Documentação técnica em inglês técnico",
      ],
    },
    {
      company: "Monstack",
      role: "Desenvolvedor Software e Hardware",
      type: "Estágio",
      period: "Fev 2022 – Fev 2024",
      description: "Startup de gerenciamento de energia.",
      highlights: [
        "Dispositivos embarcados em C++",
        "Interfaces web com HTML5/CSS3/JS",
        "Apps mobile com Swift e React Native",
        "UX/UI e metodologia SCRUM",
      ],
    },
  ] as Experience[],

  education: [
    {
      institution: "IFPE – Campus Belo Jardim",
      degree: "Bacharelado em Engenharia de Software",
      period: "Ago 2025 – Jul 2029",
      status: "Em curso",
    },
    {
      institution: "FIAP",
      degree: "Análise e Desenvolvimento de Sistemas",
      period: "Ago 2024 – Jul 2026",
      status: "Em curso",
    },
  ] as Education[],

  complementaryEducation: [
    { title: "Backend com Java, Testes JUnit e Mockito, SCRUM", provider: "Santander DIO", year: "2024" },
    { title: "Java Spring Boot, Angular, UX Design, Git/GitHub, Linux, Figma, Vue 3", provider: "Alura", year: "2024" },
    { title: "Java, Spring Boot, Docker, AWS, Clean Code", provider: "Java 10x", year: "2025" },
    { title: "Inglês (A Jornada do Autodidata em Inglês)", provider: "Independente", year: "2025" },
  ] as ComplementaryEducation[],

  projects: [
    {
      name: "LibraryManager",
      period: "Fev – Mar 2025",
      description: "API REST para gerenciamento de biblioteca com autenticação, controle de empréstimos e documentação OpenAPI.",
      stack: ["Spring Boot 3", "Java 17", "Spring Security", "PostgreSQL", "FlywayDB", "Swagger", "Lombok", "Docker"],
      githubUrl: "https://github.com/Daniel-SebastiaNC",
    },
    {
      name: "MindReview",
      period: "Mar – Abr 2025",
      description: "Sistema de repetição espaçada (flashcards) com Clean Architecture, testes automatizados e documentação completa.",
      stack: ["Spring Boot 3", "Java 17", "Clean Architecture", "SOLID", "PostgreSQL", "JPA/Hibernate", "Swagger", "JUnit", "Mockito"],
      githubUrl: "https://github.com/Daniel-SebastiaNC",
    },
  ] as Project[],

  skills: [
    { category: "Backend", skills: ["Java", "Spring Boot", "Spring Security", "Spring JPA"] },
    { category: "Frontend", skills: ["Angular", "React", "Next.js", "TypeScript"] },
    { category: "Mobile / Embarcado", skills: ["Swift", "React Native", "C++"] },
    { category: "DevOps / Infra", skills: ["Docker", "AWS", "Git"] },
    { category: "Banco de Dados", skills: ["PostgreSQL", "FlywayDB"] },
    { category: "Testes", skills: ["JUnit", "Mockito"] },
    { category: "Metodologias", skills: ["SCRUM", "Clean Code", "SOLID"] },
  ] as SkillGroup[],
};
