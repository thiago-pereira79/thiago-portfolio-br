import { Project, SkillCard, StudyItem } from './types';

// HERO
export const HERO_TITLE = "Thiago Pereira";
export const HERO_SUBTITLE = "Estudante de ADS focado em Front-end, Mobile e Cloud (AWS).";
export const HERO_DESCRIPTION = "Desenvolvo interfaces web e mobile enquanto aprofundo meus estudos em React, Flutter e Computação em Nuvem | AWS re/Start IA + No Code pela Escola da Nuvem. Trago comigo uma base em Relações Internacionais e experiência com pessoas, atendimento e tecnologia.";
export const HERO_CHIPS = [
  "Estudante de ADS",
  "Front-end & Mobile",
  "Programa de Computação em Nuvem | AWS",
  "Relações Internacionais"
];

// SKILLS
export const SKILLS_TITLE = "Stack & Hard Skills";
export const SKILLS_SUBTITLE = "Um pé no Front-end, outro no Mobile e um olho na nuvem.";
export const SKILLS_DATA: SkillCard[] = [
  {
    title: "Front-end",
    items: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3"]
  },
  {
    title: "Mobile",
    items: ["Flutter", "Dart", "Consumo de APIs", "Firebase", "Animações"]
  },
  {
    title: "Cloud (AWS)",
    items: ["Fundamentos de Computação em Nuvem", "Serviços Essenciais AWS", "Linux & Scripts", "Introdução à programação e Python", "IA e serviços AWS"]
  },
  {
    title: "Ferramentas",
    items: ["Git", "GitHub", "VS Code", "Flutter SDK", "Dart SDK"]
  }
];

// PROJECTS (Inferred from screenshots)
export const PROJECTS_DATA: Project[] = [
  {
    title: "Piano Virtual",
    tags: ["Front-end", "JS Events", "Audio"],
    description: "Simulador de piano para treino de eventos de teclado/mouse, manipulação de áudio no navegador e usabilidade simples.",
    codeLink: "https://github.com/thiago-pereira79/js-music-keyboard-virtual",
    viewLink: "https://thiago-pereira79.github.io/js-music-keyboard-virtual/"
  },
  {
    title: "Pokédex",
    tags: ["Front-end", "API", "DOM"],
    description: "Consumo da PokéAPI para listagem de pokémons, manipulação dinâmica do DOM e layout responsivo.",
    codeLink: "https://github.com/thiago-pereira79/js-developer-pokedex",
    viewLink: "https://thiago-pereira79.github.io/js-developer-pokedex/"
  },
  {
    title: "Jogo da Memória",
    tags: ["Lógica", "CSS Animations", "Arrays"],
    description: "Jogo clássico focado em lógica de programação, manipulação de arrays de estados e CSS para virada de cartas.",
    codeLink: "https://github.com/thiago-pereira79/jogo-da-memoria",
    viewLink: "https://thiago-pereira79.github.io/jogo-da-memoria/"
  }
];

// STUDY
export const STUDY_DATA: StudyItem[] = [
  {
    category: "Front-end",
    topics: [
      "React",
      "Boas práticas de JavaScript",
      "Componentização e organização de projeto"
    ]
  },
  {
    category: "Mobile",
    topics: [
      "Flutter & Dart",
      "Navegação, estado, APIs e widgets",
      "Publicação futura de apps simples"
    ]
  },
  {
    category: "Cloud (AWS)",
    topics: [
      "Fundamentos de computação em nuvem",
      "Infraestrutura global e principais serviços AWS",
      "Serviços essenciais AWS",
      "Redes, Linux, automação",
      "Automação, governança, Linux e scripts",
      "Primeiros passos com IA na AWS (Bedrock, Textract, Comprehend etc.)"
    ]
  }
];

// Note: The screenshot had "Cloud (AWS)" with items that differ slightly from the updated text in instructions.
// I will use the INSTRUCTIONS text for the content.
export const STUDY_DATA_UPDATED: StudyItem[] = [
    {
      category: "Front-end",
      topics: [
        "React",
        "Boas práticas de JavaScript",
        "Componentização e organização de projeto"
      ]
    },
    {
      category: "Mobile",
      topics: [
        "Flutter & Dart",
        "Navegação, estado, APIs e widgets",
        "Publicação futura de apps simples"
      ]
    },
    {
      category: "Cloud (AWS)",
      topics: [
        "Fundamentos de computação em nuvem",
        "Infraestrutura global e principais serviços AWS",
        "Automação, governança, Linux e scripts",
        "Ferramentas e serviços de IA da AWS (Bedrock, Textract, Comprehend, Polly, Lex)"
      ]
    }
  ];

// ABOUT
export const ABOUT_PARAGRAPHS = [
  "Sou Thiago Pereira, estudante de Análise e Desenvolvimento de Sistemas com foco em programação Front-end, Mobile e computação em nuvem.",
  "Comecei minha trajetória acadêmica em Relações Internacionais, o que me deu uma visão ampla de mundo, comunicação e contexto. Com o tempo, percebi que queria estar mais próximo da construção de soluções digitais e foi aí que mergulhei na tecnologia.",
  "Hoje eu estudo ADS, participo do programa de Computação em Nuvem | AWS re/Start IA + No Code pela Escola da Nuvem e construo projetos práticos para treinar lógica, interfaces e integrações. Gosto de aprender fazendo: experimentar, errar, ajustar e compartilhar o que vou desenvolvendo.",
  "Quando não estou codando, provavelmente estou fuçando algum curso novo, organizando ideias de projetos ou trocando experiências com outras pessoas que também estão migrando para a área de tecnologia."
];

export const SOCIAL_LINKS = [
  { name: "E-mail", url: "mailto:t.firmiano.79@gmail.com", icon: "mail" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/thiago-pereira79/", icon: "linkedin" },
  { name: "GitHub", url: "https://github.com/thiago-pereira79", icon: "github" },
  { name: "WhatsApp", url: "https://wa.me/5516997839791", icon: "message-circle" }
];