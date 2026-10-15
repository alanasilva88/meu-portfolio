import Footer from "./components/Footer";
import ProjectItem from "./components/ProjectItem";
import { projetos } from "../data/projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import BrandLogo from "./components/BrandLogo";

export default function Page() {
  const ordemDestaques = [10, 7, 5, 8];
  const destaques = projetos
    .filter((projeto) => projeto.destaque)
    .sort(
      (a, b) => ordemDestaques.indexOf(a.id) - ordemDestaques.indexOf(b.id),
    );
  const outrosProjetos = projetos.filter((projeto) => !projeto.destaque);

  return (
    // Body principal: Fundo Preto, Texto Cinza Claro
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans">
      {/* Header/Banner: Destaque Amarelo */}
      <header
        id="inicio"
        className="px-4 pb-2 pt-6 text-center border-b-2 border-yellow-500"
      >
        <div className="mx-auto mb-6 flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row sm:gap-6">
          <BrandLogo />
          <nav
            aria-label="Navegação principal"
            className="flex items-center gap-6 text-sm font-medium text-gray-300"
          >
            <a
              href="#sobre"
              className="rounded-sm transition-colors hover:text-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
            >
              Sobre
            </a>
            <a
              href="#projetos"
              className="rounded-sm transition-colors hover:text-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
            >
              Projetos
            </a>
            <a
              href="#contato"
              className="py-2 text-yellow-400 decoration-yellow-400 decoration-2 underline-offset-8 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
            >
              Contato
            </a>
          </nav>
        </div>
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
          <section aria-labelledby="projetos-destaque-title" className="mb-16">
            <h3
              id="projetos-destaque-title"
              className="mb-8 text-2xl sm:text-3xl font-semibold text-white"
            >
              Projetos em <span className="text-yellow-400">Destaque</span>
            </h3>
            <div className="mx-auto grid grid-cols-1 lg:w-[94%] lg:grid-cols-2 gap-8">
              {destaques.map((projeto) => (
                <ProjectItem key={projeto.id} projeto={projeto} />
              ))}
            </div>
          </section>
          <section aria-labelledby="outros-projetos-title">
            <h3
              id="outros-projetos-title"
              className="mb-8 text-2xl sm:text-3xl font-semibold text-white"
            >
              Outros Projetos{" "}
              <span className="text-yellow-400">&amp; Experimentos</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {outrosProjetos.map((projeto) => (
                <ProjectItem key={projeto.id} projeto={projeto} compact />
              ))}
            </div>
          </section>
        </section>
      </main>
      <Contact />
      <Footer />
    </div>
  );
}
