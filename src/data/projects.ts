export interface Projeto {
  id: number;
  destaque?: boolean;
  titulo: string;
  subtitulo?: string;
  categoria?: string;
  tag?: string;
  imagem?: string;
  imagens?: { src: string; alt: string }[];
  descricao: string;
  tecnologias: string[];
  destaques?: { titulo: string; descricao: string }[];
  linkDeploy?: string;
  linkRepo?: string;
  linkRepoFront?: string;
  linkRepoBack?: string;
}

export const projetos: Projeto[] = [
  {
    id: 10,
    destaque: true,
    titulo: "JurisTriagem — LegalTech & AI Academic Solution",
    imagens: [
      {
        src: "/assets/juristriagem.png",
        alt: "JurisTriagem: página inicial de automação inteligente de admissibilidade jurídica",
      },
    ],
    subtitulo: "Artigo Acadêmico & Aplicação em Produção (ADS)",
    categoria: "LegalTech & Inteligência Artificial",
    tag: "Destaque Acadêmico / LegalTech",
    descricao:
      "SaaS desenvolvido para o Artigo Acadêmico de Conclusão de Curso (ADS). Automatiza a triagem de hipossuficiência econômica e pré-análise jurídica para NPJs e ONGs.",
    tecnologias: [
      "Next.js (App Router)",
      "TypeScript",
      "OpenAI API",
      "Prisma ORM",
      "PostgreSQL (Neon)",
      "Tailwind CSS",
    ],
    destaques: [
      {
        titulo: "Arquitetura em 3 Camadas",
        descricao:
          "Isolamento rígido entre Roteamento (API Routes), Regras de Negócio (Controllers) e Persistência (Prisma Client).",
      },
      {
        titulo: "Motor de IA Generativa",
        descricao:
          "Integração com OpenAI API para geração autônoma de pareceres técnicos e fundamentação jurídica preliminar.",
      },
      {
        titulo: "Segurança & Multiusuário",
        descricao:
          "Modelagem relacional com isolamento de dados por operador para total rastreabilidade institucional.",
      },
      {
        titulo: "Funcionalidade Print-to-PDF",
        descricao:
          "Exportação do relatório purificado em PDF com folhas de estilo @media print.",
      },
    ],
    linkDeploy: "https://meu-assistente-juridico-9f7p.vercel.app/",
    linkRepo: "https://github.com/alanasilva88/meu-assistente-juridico",
  },
  {
    id: 7,
    destaque: true,
    titulo: "LeadFlow AI",
    imagens: [
      {
        src: "/assets/lead-sem-setas.png",
        alt: "LeadFlow AI: visão geral e indicadores de prospecção",
      },
      {
        src: "/assets/lead-2-sem-setas.png",
        alt: "LeadFlow AI: formulário de cadastro de leads",
      },
      { src: "/assets/lead-3.png", alt: "LeadFlow AI: tela de acesso à conta" },
    ],
    subtitulo: "Qualificação Inteligente de Leads B2B",
    categoria: "Full Stack / IA",
    tag: "Problem Solver / AI Tool & SaaS",
    descricao:
      "SaaS para solução de prospecção comercial B2B. Importação e tratamento em massa de planilhas CSV/XLSX com classificação automatizada de oportunidades por IA.",
    destaques: [
      {
        titulo: "Importação em massa",
        descricao:
          "Leitura e tratamento de planilhas CSV/XLSX para organizar contatos comerciais.",
      },
      {
        titulo: "Qualificação com IA",
        descricao:
          "Análise via OpenAI API para classificação de oportunidades em alta, média ou baixa prioridade.",
      },
    ],
    tecnologias: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "Prisma ORM",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    linkDeploy: "https://leadflow-ai-eight-liard.vercel.app/login",
  },
  {
    id: 8,
    destaque: true,
    titulo: "Kavumi",
    imagens: [
      {
        src: "/assets/kavumi.png",
        alt: "Kavumi: Matemática que vira aventura, com personagem astronauta e cenário espacial",
      },
    ],
    subtitulo: "Plataforma Educacional Gamificada em Produção",
    categoria: "Full Stack em Produção",
    descricao:
      "SaaS completo em produção com domínio próprio (alanadev.com.br), autenticação, rotas protegidas, validações com Zod e e-mails transacionais.",
    destaques: [
      {
        titulo: "Autenticação e validação",
        descricao:
          "Rotas protegidas e validações com Zod para os fluxos da aplicação.",
      },
      {
        titulo: "E-mails transacionais",
        descricao:
          "Integração com Resend usando domínio próprio (alanadev.com.br).",
      },
      {
        titulo: "Deploy em produção",
        descricao:
          "Banco relacional na nuvem e aplicação publicada na Vercel e Render.",
      },
    ],
    tecnologias: [
      "Next.js",
      "Fastify",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "Docker",
      "Resend",
    ],
    linkDeploy: "https://kavumi-web.vercel.app",
  },
  {
    id: 9,
    titulo: "Projeto Zelo",
    subtitulo: "Automação de Notificações e Assistência a Idosos",
    categoria: "Ecossistema Backend & Senior Care",
    tag: "Projeto Voluntário Backend",
    descricao:
      "Arquitetura de retaguarda em Java (Spring Boot) para disparo de chamadas e lembretes automáticos com foco em alta disponibilidade e confiabilidade.",
    tecnologias: [
      "Java 17/21",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "REST APIs",
    ],
  },
  {
    id: 1,
    titulo: "SoulDeCor",
    imagem: "/assets/soulDeCor.png",
    descricao:
      "Em um projeto de equipe, fui responsável por desenvolver o full-stack do e-commerce do zero. Minha contribuição incluiu a implementação de recursos de busca avançada e ordenação de produtos, que resultaram em uma experiência de navegação mais fluida para o usuário.",
    tecnologias: ["React", "Bootstrap", "MySQL", "Firebase"],
    linkRepoFront: "https://github.com/alanasilva88/e-commerce-rn2-front",
    linkRepoBack: "https://github.com/alanasilva88/e-commerce-rn2-back",
  },
  {
    id: 2,
    titulo: "My Task",
    imagem: "/assets/my_task.png",
    descricao:
      "MyTask é um sistema para gerenciamento de tarefas pessoais. Com esta aplicação, você pode cadastrar, visualizar, editar e excluir suas atividades diárias de maneira fácil e organizada.",
    tecnologias: [
      "React",
      "JavaScript",
      "Bootstrap",
      "TailwindCSS",
      "Firebase",
    ],
    linkDeploy: "https://my-task2-2af62.web.app/",
    linkRepoFront:
      "https://github.com/alanasilva88/FullReactSoulCode-React-Firebase",
  },
  {
    id: 3,
    titulo: "Gerador de Bio LinkedIn",
    imagem: "/assets/bio_generate.png",
    descricao:
      "Uma aplicação Full Stack para gerar bios profissionais e personalizadas para o LinkedIn usando Inteligência Artificial. Este projeto utiliza a API da OpenAI para gerar conteúdo de alta qualidade em tempo real.",
    tecnologias: ["React", "JavaScript", "Node.js", "Express.js", "OpenAI"],
    linkDeploy: "https://generate-bio-linked-in-front.vercel.app/",
    linkRepoFront:
      "https://github.com/alanasilva88/generate-bio-linkedIn-front",
    linkRepoBack: "https://github.com/alanasilva88/generate-bio-linkedIn-back",
  },
  {
    id: 4,
    titulo: "Gerador de Senhas",
    imagem: "/assets/password_generator.png",
    descricao:
      "Uma aplicação full-stack para gerar senhas seguras e personalizadas. O frontend, construído com Angular, se comunica com um backend robusto em Java e Spring Boot para criar senhas que garantem a inclusão de caracteres de diferentes tipos.",
    tecnologias: ["Angular", "Java", "Spring Boot"],
    linkDeploy: "https://password-generator-ui.vercel.app/",
    linkRepoFront: "https://github.com/alanasilva88/password-generator-ui",
    linkRepoBack: "https://github.com/alanasilva88/password-generator-backend",
  },
  {
    id: 5,
    destaque: true,
    titulo: "Kafka SpringBoot Email Service",
    subtitulo: "Microsserviço de Mensageria",
    imagem: "/assets/mailhog.png",
    descricao:
      "Microsserviço assíncrono para desacoplamento de envios de e-mail usando Kafka como espinha dorsal de mensageria, com foco em resiliência e alta disponibilidade.",
    tecnologias: [
      "Java 17/21",
      "Spring Boot 3",
      "Apache Kafka",
      "Docker",
      "MailHog",
    ],
    destaques: [
      {
        titulo: "Mensageria assíncrona",
        descricao:
          "Desacoplamento entre a requisição de envio e o processamento do e-mail com Apache Kafka.",
      },
      {
        titulo: "Resiliência",
        descricao:
          "Arquitetura voltada à alta disponibilidade e à tolerância a falhas de rede.",
      },
      {
        titulo: "Ambiente de desenvolvimento",
        descricao:
          "Docker e MailHog para executar e inspecionar o fluxo de e-mails.",
      },
    ],
    linkRepo: "https://github.com/alanasilva88/Kafka-SpringBoot-Email-Service",
  },
  {
    id: 6,
    titulo: "Agenda de Contatos",
    subtitulo: "Arquitetura Hexagonal",
    imagem: "/assets/contact_agenda.png",
    descricao:
      "API RESTful em Java 17 e Spring Boot 3 com Arquitetura Hexagonal (Ports & Adapters), isolamento do domínio, desacoplamento de frameworks e princípios SOLID.",
    tecnologias: ["React", "Java", "Spring Boot", "Tailwind CSS"],
    linkDeploy: "https://agenda-web-sigma.vercel.app/",
    linkRepoFront: "https://github.com/alanasilva88/agenda-web",
    linkRepoBack: "https://github.com/alanasilva88/agenda-hexagonal-backend",
  },
];
