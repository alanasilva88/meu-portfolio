import Footer from './components/Footer';
import ProjectItem from './components/ProjectItem';
import { projetos } from '../data/projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Profile from './components/Profile';

export default function Page() {

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
