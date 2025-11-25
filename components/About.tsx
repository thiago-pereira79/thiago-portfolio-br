import React from 'react';
import { LANGUAGES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-50">
      <div className="max-w-4xl mx-auto text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-10">Sobre mim</h2>
        
        <div className="space-y-6 text-lg text-brown-700 leading-relaxed text-left text-justify">
          <p>
            Sou Thiago Pereira, estudante de Análise e Desenvolvimento de Sistemas com foco em programação Front-end, Mobile e computação em nuvem.
          </p>
          <p>
            Comecei minha trajetória acadêmica em Relações Internacionais, o que me deu uma visão ampla de mundo, comunicação e contexto. Com o tempo, percebi que queria estar mais próximo da construção de soluções digitais e foi aí que mergulhei na tecnologia.
          </p>
          <p>
            Hoje eu estudo ADS, participo do programa de Computação em Nuvem | AWS pela Escola da Nuvem e construo projetos práticos para treinar lógica, interfaces e integrações. Gosto de aprender fazendo: experimentar, errar, ajustar e compartilhar o que vou desenvolvendo.
          </p>
          <p>
            Quando não estou codando, provavelmente estou fuçando algum curso novo, organizando ideias de projetos ou trocando experiências com outras pessoas que também estão migrando para a área de tecnologia.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-brown-800/10">
          <h3 className="text-xl font-semibold text-brown-800 mb-6">Idiomas</h3>
          <div className="flex flex-wrap gap-6">
            {LANGUAGES.map((lang, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-terracotta font-medium">{lang.name}</span>
                <span className="text-sm text-brown-600">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;