import Footer from './components/Footer';
import ProjectItem from './components/ProjectItem'; // Garanta que este import exista
import Contact from './components/Contact';
import Skills from './components/Skills';
import Profile from './components/Profile';

export default function Page() {
  // Dados de exemplo para seus projetos
  const projetos = [
    {
      id: 1,
      titulo: "SoulDeCor",
      imagem: "/images/soul_de_cor.png",
      descricao: "Em um projeto de equipe, fui responsável por desenvolver o full-stack do e-commerce do zero. Minha contribuição incluiu a implementação de recursos de busca avançada e ordenação de produtos, que resultaram em uma experiência de navegação mais fluida para o usuário.",
      tecnologias: ['React', 'Bootstrap', 'MySQL', 'Firebase'],
      linkDeploy: "https://souldecor.vercel.app/",
      linkRepoFront: "https://github.com/alanasilva88/e-commerce-rn2-front",
      linkRepoBack: "https://github.com/alanasilva88/e-commerce-rn2-back",
    },
    {
      id: 2,
      titulo: "My Task",
      imagem: "/images/my_task.png",
      descricao: "MyTask é um sistema para gerenciamento de tarefas pessoais. Com esta aplicação, você pode cadastrar, visualizar, editar e excluir suas atividades diárias de maneira fácil e organizada. Em um projeto de equipe, fui responsável por desenvolver o full-stack do e-commerce do zero. Minha contribuição incluiu a implementação de recursos de busca avançada e ordenação de produtos, que resultaram em uma experiência de navegação mais fluida para o usuário.",
      tecnologias: ['React', 'JavaScript', 'Bootstrap', 'TailwindCSS', 'Firebase'],
      linkDeploy: "https://my-task2-2af62.web.app/",
      linkRepoFront: "https://github.com/alanasilva88/FullReactSoulCode-React-Firebase"
    },
    {
      id: 3,
      titulo: "Gerador de Bio LinkedIn",
      imagem: "/images/gerador_bio.png",
      descricao: "Uma aplicação Full Stack para gerar bios profissionais e personalizadas para o LinkedIn usando Inteligência Artificial. Este projeto utiliza a API da OpenAI para gerar conteúdo de alta qualidade em tempo real.",
      tecnologias: ['React', 'JavaScript', 'Node.js', 'Express.js', 'Api OpenAI'],
      // linkDeploy: "https://my-task2-2af62.web.app/",
      linkRepoFront: "https://github.com/alanasilva88/generate-bio-linkedIn-front",
      linkRepoBack: "https://github.com/alanasilva88/generate-bio-linkedIn-back"
    },
    {
      id: 4,
      titulo: "Gerador de senhas",
      imagem: "/images/password_generator.png",
      descricao: "Uma aplicação full-stack para gerar senhas seguras e personalizadas. O frontend, construído com Angular, se comunica com um backend robusto em Java e Spring Boot para criar senhas que garantem a inclusão de caracteres de diferentes tipos.",
      tecnologias: ['Angular', 'Java', 'Spring Boot'],
      linkDeploy: "https://password-generator-ui.vercel.app/",
      linkRepoFront: "https://github.com/alanasilva88/password-generator-ui",
      linkRepoBack: "https://github.com/alanasilva88/password-generator-backend"
    },
    {
      id: 5,
      titulo: " Kafka SpringBoot Email Service",
      imagem: "/images/mailhog.png",
      descricao: "Este projeto é um microsserviço moderno construído com Spring Boot para desacoplar a requisição de envio de e-mail da operação real, usando o Apache Kafka como espinha dorsal de mensageria. A arquitetura foca em alta disponibilidade, resiliência contra falhas de rede e escalabilidade horizontal.",
      tecnologias: ['Kafka', 'Java', 'Spring Boot', 'Docker', 'MailHog'],
      // linkDeploy: "https://password-generator-ui.vercel.app/",
      linkRepoBack: "https://github.com/alanasilva88/Kafka-SpringBoot-Email-Service",
    },
    // Adicione mais projetos aqui...
  ];

  return (
    // Body principal: Fundo Preto, Texto Cinza Claro
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans">

      {/* Header/Banner: Destaque Amarelo */}
      <header className="py-16 text-center border-b-2 border-yellow-500">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-2 text-white">
          <span className="text-yellow-400">Meu</span> Portfólio
        </h1>
        <p className="text-xl text-gray-400">Desenvolvimento com paixão e propósito.</p>
      </header>

      <main className="container mx-auto px-4 py-12">

        {/* Seção Informações */}
        <section className="mb-16">
          <Profile />
        </section>

        {/* Seção de Especialidades - Adicionada aqui! */}
        <section className="mb-16">
          <Skills />
        </section>

        {/* Seção Projetos */}
        <section id="projetos">
          <h2 className="text-4xl font-bold text-center mb-12 text-white border-b border-yellow-500 pb-4 max-w-lg mx-auto">
            Meus <span className="text-yellow-400">Projetos</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projetos.map(projeto => (
              // Note: Você pode precisar criar uma pasta `data` e um arquivo `projects.json` ou similar
              <ProjectItem key={projeto.id} projeto={projeto} />
            ))}
          </div>
        </section>
      </main>
      <Contact />
      <Footer />
    </div>
  );
}
