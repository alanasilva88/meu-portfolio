import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    // Fundo Preto, Texto Cinza Claro, Borda Amarela no topo
    <footer className="bg-gray-950 text-gray-400 border-t-2 border-yellow-500 p-8">
      <div className="container mx-auto text-center">

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-4">
          <Link href="#sobre" className="hover:text-yellow-400 transition-colors">
            Sobre Mim
          </Link>
          <Link href="#projetos" className="hover:text-yellow-400 transition-colors">
            Projetos
          </Link>
          {/* Adicione um link para Contato se tiver */}
          <Link href="#contato" className="hover:text-yellow-400 transition-colors">
            Contato
          </Link>
        </div>

        <p className="text-sm">
          Desenvolvido por <span className="text-yellow-400">Alana Soares</span>.
          <br />
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;