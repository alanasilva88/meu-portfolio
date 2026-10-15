import { FC } from "react";

const technologyIcons: Record<string, string> = {
  "Java 17/21": "devicon-java-plain",
  "Spring Boot": "devicon-spring-original",
  "Node.js": "devicon-nodejs-plain",
  "Express.js": "devicon-express-original",
  Fastify: "devicon-fastify-plain",
  "Apache Kafka": "devicon-apachekafka-original",
  TypeScript: "devicon-typescript-plain",
  "Next.js": "devicon-nextjs-plain",
  React: "devicon-react-original",
  Angular: "devicon-angularjs-plain",
  "Tailwind CSS": "devicon-tailwindcss-original",
  JavaScript: "devicon-javascript-plain",
  PostgreSQL: "devicon-postgresql-plain",
  MySQL: "devicon-mysql-original",
  "Prisma ORM": "devicon-prisma-original",
  Firebase: "devicon-firebase-plain",
  Docker: "devicon-docker-plain",
  AWS: "devicon-amazonwebservices-plain-wordmark",
  "Google Cloud (GCP)": "devicon-googlecloud-plain",
  "Git / GitHub": "devicon-git-plain",
  "Vercel & Render": "devicon-vercel-original",
};

const skillCategories = [
  {
    id: "backend",
    title: "Backend & Arquitetura",
    technologies: [
      "Java 17/21",
      "Spring Boot",
      "Node.js",
      "Express.js",
      "Fastify",
      "Apache Kafka",
      "REST APIs & Arquitetura Hexagonal",
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Interface",
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Angular",
      "Tailwind CSS",
      "JavaScript",
    ],
  },
  {
    id: "bancos-de-dados",
    title: "Bancos de Dados & ORM",
    technologies: ["PostgreSQL", "MySQL", "Prisma ORM", "Firebase"],
  },
  {
    id: "devops",
    title: "DevOps & Nuvem",
    technologies: [
      "Docker",
      "AWS",
      "Google Cloud (GCP)",
      "Git / GitHub",
      "Vercel & Render",
    ],
  },
];

const Skills: FC = () => {
  return (
    <section
      id="especialidades"
      className="py-16 md:py-24 bg-gray-950"
      aria-labelledby="especialidades-title"
    >
      <div className="container mx-auto px-4">
        <h2
          id="especialidades-title"
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white border-b border-yellow-500 pb-4 max-w-lg mx-auto"
        >
          Minhas <span className="text-yellow-400">Especialidades</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <section
              key={category.id}
              aria-labelledby={`skills-${category.id}`}
              className="min-w-0 rounded-xl border border-gray-800 bg-gray-900 p-5 sm:p-8 shadow-lg"
            >
              <h3
                id={`skills-${category.id}`}
                className="mb-6 border-l-4 border-yellow-500 pl-3 text-xl sm:text-2xl font-semibold text-white"
              >
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {category.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="flex items-center gap-2 max-w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm sm:text-base font-medium leading-relaxed text-gray-200 transition-colors duration-300 hover:border-yellow-500 hover:text-yellow-400"
                  >
                    {technology === "REST APIs & Arquitetura Hexagonal" ? (
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5 shrink-0 text-yellow-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m12 2 9 5v10l-9 5-9-5V7z" />
                        <path d="m3 7 9 5 9-5M12 12v10" />
                      </svg>
                    ) : (
                      <i
                        aria-hidden="true"
                        className={`${technologyIcons[technology]} flex h-5 w-5 shrink-0 items-center justify-center text-xl leading-none text-yellow-400`}
                      />
                    )}
                    <span className="min-w-0">{technology}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
