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
                src="/images/alana_linkedIn.png"
                alt="Imagem Alana"
                width={300} // Ajustado para ser menor no desktop
                height={300} // Ajustado para ser menor no desktop
                className="object-cover"
              />
            </div>
          </div>

          {/* Texto Sobre */}
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Muito prazer, <span className="text-yellow-400">sou Alana Silva.</span>
            </h2>
            <p className="mb-4 text-gray-300 leading-relaxed">
              Com um histórico comprovado em desenvolvimento Full Stack,
              sou apaixonada por transformar ideias em soluções digitais
              performáticas e responsivas. Minha experiência abrange desde o
              desenvolvimento de interfaces e APIs robustas até a automação de
              processos e gerenciamento de dados em ambientes de nuvem.
            </p>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Sempre me identifiquei com a área de tecnologia, e agora estou
              plenamente dedicada a me tornar uma desenvolvedora de software de
              excelência. Acredito que o caminho para o sucesso requer dedicação
              e aprendizado contínuo, e estou animada para esta nova aventura.
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
                  src="/images/linkedin.svg" // O caminho relativo à pasta `public`
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
                  src="/images/github.svg" // O caminho relativo à pasta `public`
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