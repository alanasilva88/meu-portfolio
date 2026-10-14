export interface Projeto {
  id: number;
  titulo: string;
  subtitulo?: string;
  categoria?: string;
  tag?: string;
  imagem?: string;
  imagens?: { src: string; alt: string }[];
  descricao: string;
  tecnologias: string[];
  linkDeploy?: string;
  linkRepoFront?: string;
  linkRepoBack?: string;
}

export const projetos: Projeto[] = [
{
  "id": 7,
  "titulo": "LeadFlow AI",
  imagens: [
    { src: '/assets/lead.png', alt: 'LeadFlow AI: visão geral e indicadores de prospecção' },
    { src: '/assets/lead-2.png', alt: 'LeadFlow AI: formulário de cadastro de leads' },
    { src: '/assets/lead-3.png', alt: 'LeadFlow AI: tela de acesso à conta' },
  ],
  "subtitulo": "Qualificação Inteligente de Leads B2B com Inteligência Artificial",
  "categoria": "Full Stack / IA",
  "tag": "Problem Solver / AI Tool & SaaS",
  "descricao": "SaaS desenvolvido para resolver uma dor real de prospecção comercial. Permite a importação e tratamento em massa de planilhas CSV/XLSX, organização de contatos e análise inteligente via OpenAI API para classificação automatizada por nível de oportunidade (Alta, Média ou Baixa prioridade).",
  "tecnologias": [
    "Next.js",
    "TypeScript",
    "OpenAI API",
    "Prisma ORM",
    "PostgreSQL",
    "Tailwind CSS",
    "CSV/XLSX Parsing",
    "Vercel"
  ],
  "linkDeploy": "https://leadflow-ai-eight-liard.vercel.app/login"
},
{
  "id": 8,
  "titulo": "Kavumi",
  imagens: [
    { src: '/assets/kavumi.png', alt: 'Kavumi: Matemática que vira aventura, com personagem astronauta e cenário espacial' },
  ],
  "subtitulo": "Plataforma Educacional Gamificada Infantil",
  "categoria": "Full Stack em Produção",
  "descricao": "SaaS completo em produção com autenticação, rotas protegidas, envio transacional de e-mails via Resend com domínio próprio (alanadev.com.br), validações com Zod, banco relacional na nuvem e deploy na Vercel e Render.",
  "tecnologias": [
    "Next.js",
    "Fastify",
    "TypeScript",
    "Prisma ORM",
    "PostgreSQL",
    "Docker",
    "Resend",
    "Vercel",
    "Render"
  ],
  "linkDeploy": "https://kavumi-web.vercel.app"
},
{
  "id": 9,
  "titulo": "Projeto Zelo",
  "subtitulo": "Automação de Notificações e Assistência a Idosos",
  "categoria": "Ecossistema Backend & Senior Care",
  "tag": "Projeto Voluntário Backend",
  "descricao": "Arquitetura de retaguarda em Java (Spring Boot) para disparo de chamadas e lembretes automáticos com foco em alta disponibilidade e confiabilidade.",
  "tecnologias": [
    "Java 17/21",
    "Spring Boot",
    "PostgreSQL",
    "Docker",
    "REST APIs"
  ]
},
    {
      id: 1,
      titulo: "SoulDeCor",
      imagem: "/assets/soulDeCor.png",
      descricao: "Em um projeto de equipe, fui responsável por desenvolver o full-stack do e-commerce do zero. Minha contribuição incluiu a implementação de recursos de busca avançada e ordenação de produtos, que resultaram em uma experiência de navegação mais fluida para o usuário.",
      tecnologias: ['React', 'Bootstrap', 'MySQL', 'Firebase'],
      // linkDeploy: "https://souldecor.vercel.app/",
      linkRepoFront: "https://github.com/alanasilva88/e-commerce-rn2-front",
      linkRepoBack: "https://github.com/alanasilva88/e-commerce-rn2-back",
    },
    {
      id: 2,
      titulo: "My Task",
      imagem: "/assets/my_task.png",
      descricao: "MyTask é um sistema para gerenciamento de tarefas pessoais. Com esta aplicação, você pode cadastrar, visualizar, editar e excluir suas atividades diárias de maneira fácil e organizada.",
      tecnologias: ['React', 'JavaScript', 'Bootstrap', 'TailwindCSS', 'Firebase'],
      linkDeploy: "https://my-task2-2af62.web.app/",
      linkRepoFront: "https://github.com/alanasilva88/FullReactSoulCode-React-Firebase"
    },
    {
      id: 3,
      titulo: "Gerador de Bio LinkedIn",
      imagem: "/assets/bio_generate.png",
      descricao: "Uma aplicação Full Stack para gerar bios profissionais e personalizadas para o LinkedIn usando Inteligência Artificial. Este projeto utiliza a API da OpenAI para gerar conteúdo de alta qualidade em tempo real.",
      tecnologias: ['React', 'JavaScript', 'Node.js', 'Express.js', 'OpenAI'],
      linkDeploy: "https://generate-bio-linked-in-front.vercel.app/",
      linkRepoFront: "https://github.com/alanasilva88/generate-bio-linkedIn-front",
      linkRepoBack: "https://github.com/alanasilva88/generate-bio-linkedIn-back"
    },
    {
      id: 4,
      titulo: "Gerador de senhas",
      imagem: "/assets/password_generator.png",
      descricao: "Uma aplicação full-stack para gerar senhas seguras e personalizadas. O frontend, construído com Angular, se comunica com um backend robusto em Java e Spring Boot para criar senhas que garantem a inclusão de caracteres de diferentes tipos.",
      tecnologias: ['Angular', 'Java', 'Spring Boot'],
      linkDeploy: "https://password-generator-ui.vercel.app/",
      linkRepoFront: "https://github.com/alanasilva88/password-generator-ui",
      linkRepoBack: "https://github.com/alanasilva88/password-generator-backend"
    },
    {
      id: 5,
      titulo: " Kafka SpringBoot Email Service",
      imagem: "/assets/mailhog.png",
      descricao: "Este projeto é um microsserviço moderno construído com Spring Boot para desacoplar a requisição de envio de e-mail da operação real, usando o Apache Kafka como espinha dorsal de mensageria. A arquitetura foca em alta disponibilidade, resiliência contra falhas de rede e escalabilidade horizontal.",
      tecnologias: ['Kafka', 'Java', 'Spring Boot', 'Docker', 'MailHog'],
      // linkDeploy: "https://password-generator-ui.vercel.app/",
      linkRepoBack: "https://github.com/alanasilva88/Kafka-SpringBoot-Email-Service",
    },
    {
      id: 6,
      titulo: "Agenda de Contatos",
      imagem: "/assets/contact_agenda.png",
      descricao: "API RESTful robusta desenvolvida em Java 17 e Spring Boot 3 estruturada sob os pilares da Arquitetura Hexagonal (Ports & Adapters). Foco em isolamento total do domínio, desacoplamento de frameworks e aplicação estrita de princípios SOLID.nsiva.",
      tecnologias: ['React', 'Java', 'Spring Boot', 'Tailwind CSS'],
      linkDeploy: "https://agenda-web-sigma.vercel.app/",
      linkRepoFront: "https://github.com/alanasilva88/agenda-web",
      linkRepoBack: "https://github.com/alanasilva88/agenda-hexagonal-backend",
    },
  ];
