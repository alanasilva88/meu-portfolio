import Link from "next/link";
import Image from "next/image";
import ProjectGallery from "./ProjectGallery";
import SpotlightCard from "./SpotlightCard";
import ProjectMotion from "./ProjectMotion";
import type { Projeto } from "../../data/projects";

// Mapeamento de tecnologias para classes de ícones
const iconMap: { [key: string]: string } = {
  React: "devicon-react-original",
  JavaScript: "devicon-javascript-plain",
  Bootstrap: "devicon-bootstrap-plain",
  CSS: "devicon-css3-plain",
  TailwindCSS: "devicon-tailwindcss-original",
  "Tailwind CSS": "devicon-tailwindcss-original",
  "Next.js": "devicon-nextjs-plain",
  "Next.js (App Router)": "devicon-nextjs-plain",
  TypeScript: "devicon-typescript-plain",
  "Prisma ORM": "devicon-prisma-original",
  PostgreSQL: "devicon-postgresql-plain",
  "PostgreSQL (Neon)": "devicon-postgresql-plain",
  "PostgreSQL (Neon Serverless)": "devicon-postgresql-plain",
  Fastify: "devicon-fastify-plain",
  Vercel: "devicon-vercel-original",
  "Java 17/21": "devicon-java-plain",
  Firebase: "devicon-firebase-plain",
  MySQL: "devicon-mysql-plain",
  "Node.js": "devicon-nodejs-plain",
  "Express.js": "devicon-express-original",
  Java: "devicon-java-plain",
  "Spring Boot": "devicon-spring-plain",
  "Spring Boot 3": "devicon-spring-plain",
  "Apache Kafka": "devicon-apachekafka-original",
  Kafka: "devicon-apachekafka-original",
  Docker: "devicon-docker-plain",
  Angular: "devicon-angularjs-plain",
};

// Interface para definir o formato do objeto de projeto

// Interface para as props do componente
interface ProjectItemProps {
  projeto: Projeto;
  compact?: boolean;
}

export default function ProjectItem({
  projeto,
  compact = false,
}: ProjectItemProps) {
  const spotlight = Boolean(projeto.destaque && !compact);
  const Card = spotlight ? SpotlightCard : "article";

  return (
    <ProjectMotion>
    <Card
      className={`min-w-0 flex flex-col rounded-lg overflow-hidden border shadow-xl transition-colors duration-300 h-full ${
        spotlight
          ? "border-slate-700/70 bg-slate-900/80 backdrop-blur-md hover:border-yellow-500/60"
          : "border-gray-700 bg-gray-800 hover:border-yellow-500"
      }`}
    >
      {/* Imagem do Projeto */}
      {!compact &&
        (projeto.imagens?.length ? (
          <ProjectGallery
            titulo={projeto.titulo}
            imagens={projeto.imagens}
            ajusteImagem={projeto.ajusteImagem}
          />
        ) : projeto.imagem ? (
          <div className="relative w-full h-56 shrink-0 overflow-hidden">
            <Image
              src={projeto.imagem}
              alt={`Projeto ${projeto.titulo}`}
              className="object-cover w-full h-full"
              width={400} // Ajuste de acordo com o tamanho real
              height={240} // Ajuste de acordo com o tamanho real
            />
          </div>
        ) : (
          <div className="flex h-56 shrink-0 flex-col justify-center gap-3 border-b border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-6">
            <p className="text-sm font-medium text-yellow-400">
              {projeto.categoria}
            </p>
            <p className="text-3xl font-bold text-white">{projeto.titulo}</p>
          </div>
        ))}

      <div className="p-5 flex flex-col flex-grow">
        <h4
          className={`${compact ? "text-xl" : "text-2xl"} font-semibold mb-3 text-white`}
        >
          {projeto.titulo}
        </h4>

        {/* Ícones de Tecnologia: Amarelo para destaque */}
        {projeto.subtitulo && (
          <p className="mb-3 text-base font-medium text-gray-200">
            {projeto.subtitulo}
          </p>
        )}
        {!compact && projeto.tag && (
          <p className="mb-4 self-start rounded-md border border-yellow-500/40 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400">
            {projeto.tag}
          </p>
        )}
        <ul
          className="flex flex-wrap gap-2 mb-4"
          aria-label="Tecnologias utilizadas"
        >
          {projeto.tecnologias.map((tech) => (
            <li
              key={tech}
              className="inline-flex items-center gap-2 rounded-md border border-gray-600 bg-gray-900 px-2 py-1 text-xs text-gray-200"
            >
              {iconMap[tech] ? (
                <i
                  className={`${iconMap[tech]} text-base text-yellow-400`}
                  aria-hidden="true"
                />
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="shrink-0 text-yellow-400"
                  aria-hidden="true"
                >
                  <path d="m8 5-7 7 7 7m8-14 7 7-7 7m-3-16-2 18" />
                </svg>
              )}
              {tech}
            </li>
          ))}
        </ul>

        <p
          className={`${compact ? "text-sm mb-4" : "mb-6"} text-gray-300 leading-relaxed`}
        >
          {projeto.descricao}
        </p>

        {!compact && projeto.destaques?.length ? (
          <ul
            className="mb-6 list-disc space-y-3 pl-5 text-sm leading-relaxed text-gray-300 marker:text-yellow-400"
            aria-label="Destaques técnicos"
          >
            {projeto.destaques.map((destaque) => (
              <li key={destaque.titulo}>
                <strong className="font-semibold text-gray-200">
                  {destaque.titulo}:
                </strong>{" "}
                {destaque.descricao}
              </li>
            ))}
          </ul>
        ) : null}

        {/* Links do Projeto */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {/* Botão Padrão: Fundo Amarelo, Texto Preto */}
          {projeto.linkDeploy && (
            <Link
              href={projeto.linkDeploy}
              className="px-4 py-2 text-sm font-medium bg-yellow-500 text-gray-900 rounded-md 
                         hover:bg-yellow-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Deploy
            </Link>
          )}
          {/* Botão Secundário */}
          {(projeto.linkRepo || projeto.linkRepoFront) && (
            <Link
              href={(projeto.linkRepo || projeto.linkRepoFront)!}
              className="px-4 py-2 text-sm font-medium border border-yellow-500 text-yellow-400 rounded-md 
                         hover:bg-yellow-500 hover:text-gray-900 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {projeto.linkRepo
                ? "GitHub"
                : projeto.linkRepoBack
                  ? "GitHub (Frontend)"
                  : "GitHub"}
            </Link>
          )}
          {projeto.linkRepoBack && (
            <Link
              href={projeto.linkRepoBack}
              className="px-4 py-2 text-sm font-medium border border-yellow-500 text-yellow-400 rounded-md 
                 hover:bg-yellow-500 hover:text-gray-900 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {projeto.linkRepoFront ? "GitHub (Backend)" : "GitHub"}
            </Link>
          )}
        </div>
      </div>
    </Card>
    </ProjectMotion>
  );
}
