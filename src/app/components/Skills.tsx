import { FC } from 'react';

// Dados da sua Stack de Tecnologias
const skills = [
    // Backend & Linguagens Principais
    { name: 'Java', iconClass: 'devicon-java-plain' },
    { name: 'Spring Boot', iconClass: 'devicon-spring-plain' }, // O Devicon usa 'spring-plain' para Spring Boot
    { name: 'Node.js', iconClass: 'devicon-nodejs-plain' },
    { name: 'Express.js', iconClass: 'devicon-express-original' },
    { name: 'JavaScript', iconClass: 'devicon-javascript-plain' },
    { name: 'TypeScript', iconClass: 'devicon-typescript-plain' },

    // Frontend & UI
    { name: 'React', iconClass: 'devicon-react-original' },
    { name: 'Angular', iconClass: 'devicon-angularjs-plain' },
    { name: 'Next.js', iconClass: 'devicon-nextjs-plain' },
    { name: 'Tailwind CSS', iconClass: 'devicon-tailwindcss-plain' },
    { name: 'CSS', iconClass: 'devicon-css3-plain' },
    { name: 'Bootstrap', iconClass: 'devicon-bootstrap-plain' },

    // Cloud & DevOps
    { name: 'AWS', iconClass: 'devicon-amazonwebservices-plain' },
    { name: 'GCP', iconClass: 'devicon-googlecloud-plain' },
    { name: 'Docker', iconClass: 'devicon-docker-plain' },

    // Banco de Dados & Mensageria
    { name: 'MySQL', iconClass: 'devicon-mysql-plain' },
    // Kafka não tem um ícone oficial Devicon, usamos a nuvem para representar sistemas distribuídos
    { name: 'Kafka', iconClass: 'devicon-apachekafka-original' },
    { name: 'Firebase', iconClass: 'devicon-firebase-plain' },

    // Ferramentas
    { name: 'Git', iconClass: 'devicon-git-plain' },
    { name: 'VS Code', iconClass: 'devicon-vscode-plain' },    // Adicione mais tecnologias aqui...
];

const Skills: FC = () => {
    return (
        <section id="especialidades" className="py-16 md:py-24 bg-gray-950">
            <div className="container mx-auto px-4">

                {/* Título da Seção */}
                <h2 className="text-4xl font-bold text-center mb-12 text-white border-b border-yellow-500 pb-4 max-w-lg mx-auto">
                    Minhas <span className="text-yellow-400">Especialidades</span>
                </h2>

                {/*
          Carrossel Simples (Faixa de Rolagem Horizontal)
          - flex: Permite que os itens fiquem lado a lado.
          - overflow-x-auto: Permite a rolagem horizontal em telas pequenas.
          - scrollbar-hide: Opcional, para esconder a barra de rolagem se estiver usando um plugin do Tailwind.
        */}
                <div className="flex space-x-10 p-4 overflow-x-auto whitespace-nowrap scrollbar-hide">

                    {skills.map((skill) => (
                        // Cartão de Habilidade
                        <div
                            key={skill.name}
                            className="flex flex-col items-center justify-center p-4 bg-gray-900 rounded-lg min-w-[120px] 
                         shadow-xl hover:bg-gray-800 transition duration-300 transform hover:scale-105"
                        >
                            {/* Ícone Devicon: Cor Amarela para Destaque */}
                            <i
                                className={`${skill.iconClass} colored text-6xl text-yellow-500 transition-colors`}
                                title={skill.name}
                            ></i>

                            {/* Nome da Stack */}
                            <p className="mt-3 text-sm font-semibold text-gray-200">{skill.name}</p>
                        </div>
                    ))}
                </div>

                {/* Opcional: Adicionar uma indicação de rolagem */}
                <p className="text-center text-gray-500 mt-8 text-sm">
                    <span className="text-yellow-500">{"<"} Deslize para ver mais {">"}</span>
                </p>

            </div>
        </section>
    );
};

export default Skills;