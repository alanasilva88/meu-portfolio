"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectGalleryProps {
  titulo: string;
  ajusteImagem?: "cover" | "contain";
  imagens: { src: string; alt: string }[];
}

export default function ProjectGallery({
  titulo,
  imagens,
  ajusteImagem = "cover",
}: ProjectGalleryProps) {
  const [indice, setIndice] = useState(0);
  const imagem = imagens[indice];

  if (!imagem) return null;

  return (
    <div
      className="relative h-56 w-full shrink-0 overflow-hidden bg-gray-950"
      role="region"
      aria-label={`Imagens do projeto ${titulo}`}
    >
      <Image
        src={imagem.src}
        alt={imagem.alt}
        fill
        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
        className={ajusteImagem === "contain" ? "object-contain" : "object-cover"}
      />
      {imagens.length > 1 && (
        <>
          <button
            type="button"
            onClick={() =>
              setIndice(
                (atual) => (atual - 1 + imagens.length) % imagens.length,
              )
            }
            aria-label={`Imagem anterior de ${titulo}`}
            className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-gray-950/80 text-xl text-white hover:bg-yellow-500 hover:text-gray-950 focus-visible:outline-2 focus-visible:outline-yellow-400"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            onClick={() => setIndice((atual) => (atual + 1) % imagens.length)}
            aria-label={`Próxima imagem de ${titulo}`}
            className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-gray-950/80 text-xl text-white hover:bg-yellow-500 hover:text-gray-950 focus-visible:outline-2 focus-visible:outline-yellow-400"
          >
            <span aria-hidden="true">›</span>
          </button>
          <p
            aria-live="polite"
            aria-atomic="true"
            className="absolute bottom-2 right-2 rounded-md bg-gray-950/80 px-2 py-1 text-xs text-white"
          >
            {indice + 1} / {imagens.length}
          </p>
        </>
      )}
    </div>
  );
}
