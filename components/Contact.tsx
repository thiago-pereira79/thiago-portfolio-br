import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  // w-full on mobile, sm:w-auto on tablet/desktop
  const buttonClass = "flex items-center justify-center w-full sm:w-auto px-6 py-4 bg-terracotta text-white font-bold rounded-lg shadow-lg hover:bg-terracotta-hover transition-all transform hover:-translate-y-1 min-w-[160px]";

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-100 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-6">Contato</h2>
        <p className="text-lg text-brown-700 mb-12">
          Aberto para networking, oportunidades como estagiário/júnior em Front-end, Mobile ou Cloud, e conversas sobre estudos e projetos. Se quiser trocar uma ideia ou dar um feedback sobre o portfólio, é só chamar:
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          <a
            href={SOCIAL_LINKS.email}
            className={buttonClass}
          >
            <Mail size={20} className="mr-2" /> E-mail
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            <Linkedin size={20} className="mr-2" /> LinkedIn
          </a>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            <Github size={20} className="mr-2" /> GitHub
          </a>
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            <MessageCircle size={20} className="mr-2" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;