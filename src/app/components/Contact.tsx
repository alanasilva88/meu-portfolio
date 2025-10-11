"use client";
import React, { FC, useState, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';

// Definição da interface para o estado do formulário
interface FormData {
  nome: string;
  email: string;
  mensagem: string;
}

// Seu endpoint do Formspree (use o seu código real aqui)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrbzdydv";
const CURRICULO_LINK = "/curriculo.pdf"; // Ajuste para o caminho do seu CV (deve estar na pasta 'public')

const Contact: FC = () => {
  const [formData, setFormData] = useState<FormData>({ nome: '', email: '', mensagem: '' });
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Manipulador de mudança de input
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Limpa o status ao começar a digitar novamente
    if (status) setStatus(null);
  };

  // Manipulador de envio do formulário
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(formData), // Convertendo o objeto JS para JSON
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nome: '', email: '', mensagem: '' }); // Limpar o formulário
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Título da Seção */}
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Vamos <span className="text-yellow-400">Conversar?</span>
        </h2>
        <p className="text-center text-gray-400 mb-10 text-xl">
          Estou aberta a novas oportunidades e adoro falar sobre tecnologia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Coluna da Esquerda: Contato Rápido e CV */}
          <div className="flex flex-col gap-6">

            {/* Email e Redes Sociais */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-xl border-l-4 border-yellow-500">
              <h3 className="text-2xl font-semibold mb-3 text-white">E-mail para Contato</h3>
              <p className="text-gray-400 mb-4 flex items-center gap-2">
                <i className="bi bi-envelope-fill text-yellow-500"></i>
                <Link href="mailto:seuemail@exemplo.com" className="hover:text-yellow-400 transition-colors">
                  alanasilva.as@gmail.com
                </Link>
              </p>

              <div className="flex gap-4 mt-4">
                <a href="https://www.linkedin.com/in/alana-soares-silva/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <i className="bi bi-linkedin text-2xl text-gray-300 hover:text-yellow-500 transition-colors"></i>
                </a>
                <a href="https://github.com/alanasilva88" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <i className="bi bi-github text-2xl text-gray-300 hover:text-yellow-500 transition-colors"></i>
                </a>
              </div>
            </div>

            {/* Download do Currículo */}
            <Link
              href={CURRICULO_LINK}
              target="_blank"
              className="p-4 bg-yellow-500 text-gray-950 font-bold text-center rounded-lg shadow-xl 
                                hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center gap-3"
              rel="noopener noreferrer"
            >
              <i className="bi bi-file-earmark-arrow-down-fill text-xl"></i>
              Baixar meu Currículo (PDF)
            </Link>

          </div>

          {/* Coluna da Direita: Formulário de Mensagem */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold mb-5 text-white">Envie uma Mensagem</h3>

            {/* Mensagens de Status */}
            {status === 'success' && (
              <div className="p-4 mb-4 text-sm text-green-100 bg-green-600 rounded-lg" role="alert">
                Mensagem enviada com sucesso! Em breve entrarei em contato.
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 mb-4 text-sm text-red-100 bg-red-600 rounded-lg" role="alert">
                Ops! Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.
              </div>
            )}

            <form onSubmit={handleSubmit}>

              {/* Campo Nome */}
              <div className="mb-4">
                <label htmlFor="nome" className="block text-gray-300 mb-2">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              {/* Campo Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              {/* Campo Mensagem */}
              <div className="mb-6">
                <label htmlFor="mensagem" className="block text-gray-300 mb-2">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              {/* Botão de Envio */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full px-6 py-3 bg-yellow-500 text-gray-950 font-bold rounded-md 
                                   hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;