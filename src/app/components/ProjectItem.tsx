import Link from 'next/link';
import Image from 'next/image';

// Mapeamento de tecnologias para classes de ícones
const iconMap: { [key: string]: string } = {
  'React': 'devicon-react-original',
  'JavaScript': 'devicon-javascript-plain',
  'Bootstrap': 'devicon-bootstrap-plain',
  'CSS': 'devicon-css3-plain',
  'TailwindCSS': 'devicon-tailwindcss-original',
  'Firebase': 'devicon-firebase-plain',
  'MySQL': 'devicon-mysql-plain',
  'Node.js': 'devicon-nodejs-plain',
  'Express.js': 'devicon-express-original',
  'Java': 'devicon-java-plain',
  'Spring Boot': 'devicon-spring-plain',
  'Kafka': 'devicon-apachekafka-original',
  'Docker': 'devicon-docker-plain',
  'Angular': 'devicon-angularjs-plain',
  'OpenAI': 'devicon-openai-original',
};

// Interface para definir o formato do objeto de projeto
interface ProjetoProps {
  id: number;
  titulo: string;
  imagem: string;
  descricao: string;
  tecnologias: string[];
  linkDeploy?: string;
  linkRepoFront?: string;
  linkRepoBack?: string;
}

// Interface para as props do componente
interface ProjectItemProps {
  projeto: ProjetoProps;
}

export default function ProjectItem({ projeto }: ProjectItemProps) {
  return (
    // Cartão do projeto: Fundo Cinza Escuro, Borda Cinza, Sombra ao passar o mouse
    <div className="flex flex-col rounded-lg overflow-hidden border border-gray-800 bg-gray-800 shadow-xl 
                    hover:border-yellow-500 transition-all duration-300 h-full">

      {/* Imagem do Projeto */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={projeto.imagem}
          alt={`Projeto ${projeto.titulo}`}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          width={400} // Ajuste de acordo com o tamanho real
          height={240} // Ajuste de acordo com o tamanho real
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-3 text-white">{projeto.titulo}</h3>

        {/* Ícones de Tecnologia: Amarelo para destaque */}
        <div className="flex flex-wrap gap-3 mb-4 text-2xl text-yellow-400">
          {projeto.tecnologias.map(tech => (
            <i
              key={tech}
              className={`${iconMap[tech]} colored`} // 'colored' deve ser estilizado no seu CSS global
              title={tech}
            ></i>
          ))}
        </div>

        <p className="text-gray-400 mb-6 flex-grow">{projeto.descricao}</p>

        {/* Links do Projeto */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {/* Botão Padrão: Fundo Amarelo, Texto Preto */}
          {projeto.linkDeploy && (
            <Link
              href={projeto.linkDeploy}
              className="px-4 py-2 text-sm font-medium bg-yellow-500 text-gray-900 rounded-md 
                         hover:bg-yellow-400 transition-colors duration-200"
              target="_blank"
            >
              Ver Deploy
            </Link>
          )}
          {/* Botão Secundário */}
          {projeto.linkRepoFront && (
            <Link
              href={projeto.linkRepoFront}
              className="px-4 py-2 text-sm font-medium border border-yellow-500 text-yellow-400 rounded-md 
                         hover:bg-yellow-500 hover:text-gray-900 transition-colors duration-200"
              target="_blank"
            >
              Repo Front-end
            </Link>
          )}
          {projeto.linkRepoBack && (
            <Link
              href={projeto.linkRepoBack}
              className="px-4 py-2 text-sm font-medium border border-yellow-500 text-yellow-400 rounded-md 
                 hover:bg-yellow-500 hover:text-gray-900 transition-colors duration-200"
              target="_blank"
            >
              Repo Back-end
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
