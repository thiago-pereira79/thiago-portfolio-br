import { Project, SkillCategory, StudyTopic, Language } from './types';

export const NAVIGATION_LINKS = [
  { name: 'Início', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Sobre', href: '#about' },
  { name: 'Contato', href: '#contact' },
];

export const HERO_CHIPS = [
  'Estudante de ADS',
  'Front-end & Mobile',
  'Programa de Computação em Nuvem | AWS',
  'Relações Internacionais',
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Front-end',
    skills: [
      { name: 'React' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
    ],
    colorClass: 'bg-cream-50 border border-cream-200 text-brown-800',
  },
  {
    title: 'Mobile',
    skills: [
      { name: 'Flutter' },
      { name: 'Kotlin' },
      { name: 'Jetpack Compose' },
      { name: 'Android Studio' },
    ],
    colorClass: 'bg-cream-200 border border-taupe/30 text-brown-800',
  },
  {
    title: 'Cloud & Ferramentas',
    skills: [
      { name: 'AWS (Em formação)' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
    ],
    colorClass: 'bg-taupe/20 border border-taupe/30 text-brown-800',
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Piano Virtual',
    tags: ['Front-end', 'JS Events', 'Audio'],
    description: 'Simulador de piano para treino de eventos de teclado/mouse, manipulação de áudio no navegador e usabilidade simples.',
    demoLink: 'https://thiago-pereira79.github.io/js-music-keyboard-virtual/',
    repoLink: 'https://github.com/thiago-pereira79/js-music-keyboard-virtual',
  },
  {
    title: 'Pokédex',
    tags: ['Front-end', 'API', 'DOM'],
    description: 'Consumo da PokéAPI para listagem de pokémons, manipulação dinâmica do DOM e layout responsivo.',
    demoLink: 'https://thiago-pereira79.github.io/js-developer-pokedex/',
    repoLink: 'https://github.com/thiago-pereira79/js-developer-pokedex',
  },
  {
    title: 'Jogo da Memória',
    tags: ['Lógica', 'CSS Animations', 'Arrays'],
    description: 'Jogo clássico focado em lógica de programação, manipulação de arrays de estados e CSS para virada de cartas.',
    demoLink: 'https://thiago-pereira79.github.io/jogo-da-memoria/',
    repoLink: 'https://github.com/thiago-pereira79/jogo-da-memoria',
  },
];

export const STUDY_TOPICS: StudyTopic[] = [
  {
    category: 'Front-end',
    items: ['React', 'Boas práticas de JavaScript', 'Componentização e organização de projeto'],
  },
  {
    category: 'Mobile',
    items: ['Flutter & Dart', 'Kotlin e Jetpack Compose', 'Publicação futura de apps simples'],
  },
  {
    category: 'Cloud (AWS)',
    items: ['Fundamentos de computação em nuvem', 'Serviços essenciais AWS', 'Redes, Linux, automação'],
  },
];

export const LANGUAGES: Language[] = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Em curso' },
  { name: 'Espanhol', level: 'Em curso' },
];

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/thiago-pereira79',
  github: 'https://github.com/thiago-pereira79',
  email: 'mailto:t.firmiano.79@gmail.com',
  whatsapp: 'https://wa.me/5516997839791',
};