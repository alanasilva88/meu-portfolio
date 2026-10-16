import Image from "next/image";
import { FC } from "react";
import styles from "./Profile.module.css";
import HeroTypewriter from "./HeroTypewriter";

const Profile: FC = () => {
  return (
    // Removemos a classe 'sobre' se ela for CSS padrão e usamos Tailwind
    <section id="sobre" className="pt-12 md:pt-20">
      {/* Centraliza o conteúdo e padding horizontal */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Layout Flex para imagem e texto, responsivo */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Imagem */}
          <div className="order-1 flex w-full justify-center md:order-2 md:w-5/12">
            {/* Retrato integrado ao fundo com máscaras de opacidade e glow. */}
            <div className={styles.portrait}>
              <Image
                src="/assets/alana_linkedIn.jpeg"
                alt="Alana Silva, desenvolvedora Full Stack"
                width={864}
                height={1184}
                sizes="(min-width: 1280px) 432px, (min-width: 768px) 40vw, (min-width: 480px) 432px, 85vw"
                priority
                className={styles.photo}
              />
            </div>
          </div>

          {/* Texto Sobre */}
          <div className="order-2 w-full min-w-0 md:order-1 md:w-7/12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Muito prazer,{" "}
              <span className="text-yellow-400">sou Alana Silva.</span>
            </h2>
            <p className="mb-4 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-lg md:text-xl text-gray-200 leading-relaxed">
              <strong className="font-semibold">Desenvolvedora Full Stack |</strong>
              <HeroTypewriter />
            </p>
            <p className="mb-4 text-gray-300 leading-relaxed">
              Desenvolvedora Full Stack focada em construir sistemas escaláveis,
              APIs RESTful resilientes e aplicações web de alta performance.
              Atuo no ecossistema{" "}
              <strong className="font-semibold">Java</strong> (
              <strong className="font-semibold">Spring Boot</strong>,{" "}
              <strong className="font-semibold">Kafka</strong>) e{" "}
              <strong className="font-semibold">TypeScript</strong> (
              <strong className="font-semibold">Node.js</strong>,{" "}
              <strong className="font-semibold">Next.js</strong>,{" "}
              <strong className="font-semibold">React</strong>), integrando
              bancos de dados relacionais (PostgreSQL, MySQL), containerização
              com <strong className="font-semibold">Docker</strong> e soluções
              com Inteligência Artificial.
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
                  width={30} // Defina a largura
                  height={30} // Defina a altura
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
                  width={30} // Defina a largura
                  height={30} // Defina a altura
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
