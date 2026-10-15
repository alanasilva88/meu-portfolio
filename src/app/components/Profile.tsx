import Image from "next/image";
import { FC } from "react";

const Profile: FC = () => {
  return (
    // Removemos a classe 'sobre' se ela for CSS padrão e usamos Tailwind
    <section id="sobre" className="py-12 md:py-20">
      {/* Centraliza o conteúdo e padding horizontal */}
      <div className="max-w-6xl mx-auto px-4">

        {/* Layout Flex para imagem e texto, responsivo */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Imagem */}
          <div className="w-full md:w-1/3 flex justify-center">
            {/* Adiciona uma borda amarela e arredonda a imagem */}
            <div className="rounded-full overflow-hidden border-4 border-yellow-500 shadow-lg">
              <Image
                src="/assets/alana_linkedIn.jpeg"
                alt="Imagem Alana"
                width={300} // Ajustado para ser menor no desktop
                height={300} // Ajustado para ser menor no desktop
                className="object-cover"
              />
            </div>
          </div>

          {/* Texto Sobre */}
          <div className="w-full min-w-0 md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Muito prazer, <span className="text-yellow-400">sou Alana Silva.</span>
            </h2>
            <p className="mb-4 text-lg md:text-xl font-medium text-gray-200 leading-relaxed">
              Desenvolvedora Full Stack | <strong className="font-semibold">Node.js</strong> (<strong className="font-semibold">TypeScript</strong>, <strong className="font-semibold">Next.js</strong>) &amp; <strong className="font-semibold">Java</strong> (<strong className="font-semibold">Spring Boot</strong>)
            </p>
            <p className="mb-4 text-gray-300 leading-relaxed">
              Desenvolvedora Full Stack focada em construir sistemas escaláveis,
              APIs RESTful resilientes e aplicações web de alta performance. Atuo
              no ecossistema <strong className="font-semibold">Java</strong> (<strong className="font-semibold">Spring Boot</strong>, <strong className="font-semibold">Kafka</strong>)
              {" "}e <strong className="font-semibold">TypeScript</strong> (<strong className="font-semibold">Node.js</strong>, <strong className="font-semibold">Next.js</strong>, <strong className="font-semibold">React</strong>),
              integrando bancos de dados relacionais (PostgreSQL, MySQL),
              containerização com <strong className="font-semibold">Docker</strong> e
              soluções com Inteligência Artificial.
            </p>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Minha experiência abrange desde a concepção e arquitetura de
              microsserviços (Arquitetura Hexagonal, mensageria) até o deploy de
              SaaS completos em produção com domínio próprio, pipelines de CI/CD
              e integração de APIs transacionais. Foco em código limpo, boas
              práticas de engenharia e resolução de dores reais de negócio.
            </p>

            {/* Botões Sociais */}
            <div className="flex gap-4 mt-6">
              {/* Botão Padrão: Fundo Cinza Escuro, Hover Amarelo */}
              <a
                href="https://www.linkedin.com/in/alana-soares-silva/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-yellow-500 hover:text-gray-900 transition duration-300 shadow-md flex items-center justify-center"
              >
                <Image
                  src="/assets/linkedin.svg" // O caminho relativo à pasta `public`
                  alt="LinkedIn"
                  width={30}               // Defina a largura
                  height={30}              // Defina a altura
                  className="w-6 h-6" // Para garantir que o SVG não seja esticado
                />
              </a>
              <a
                href="https://github.com/alanasilva88"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-yellow-500 hover:text-gray-900 transition duration-300 shadow-md"
              >
                <Image
                  src="/assets/github.svg" // O caminho relativo à pasta `public`
                  alt="GitHub"
                  width={30}               // Defina a largura
                  height={30}              // Defina a altura
                  className="w-6 h-6" // Para garantir que o SVG não seja esticado
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
