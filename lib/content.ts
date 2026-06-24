export type Lang = 'en' | 'es'

type Localized = { en: string; es: string }

export const content = {
  nav: {
    about: { en: 'About', es: 'Sobre mí' },
    skills: { en: 'Skills', es: 'Habilidades' },
    projects: { en: 'Projects', es: 'Proyectos' },
    contact: { en: 'Contact', es: 'Contacto' },
  },
  hero: {
    title: { en: 'FULL STACK DEVELOPER', es: 'DESARROLLADOR FULL STACK' },
    subtitle: {
      en: 'Building real products. Currently based in Málaga, Spain.',
      es: 'Construyendo productos reales. Ahora en Málaga, España.',
    },
    viewProjects: { en: 'VIEW PROJECTS', es: 'VER PROYECTOS' },
    contactMe: { en: 'CONTACT ME', es: 'CONTÁCTAME' },
    insertCoin: { en: 'INSERT COIN TO CONTINUE', es: 'INSERTA MONEDA PARA CONTINUAR' },
  },
  about: {
    label: { en: '// ABOUT', es: '// SOBRE MÍ' },
    body: {
      en: '4+ years building full-stack web apps from concept to production. Specialized in React, Next.js, Node.js, and RESTful APIs. Currently studying Software Engineering at 42 Málaga. I care about solving real problems.',
      es: 'Más de 4 años desarrollando aplicaciones web full-stack, desde la idea hasta producción. Especializado en React, Next.js, Node.js y APIs RESTful. Actualmente estudiando Ingeniería de Software en 42 Málaga. Me importa resolver problemas reales.',
    },
    stats: [
      { en: '7+ APPS IN PRODUCTION', es: '7+ APPS EN PRODUCCIÓN' },
      { en: '4+ YEARS EXP', es: '4+ AÑOS EXP' },
      { en: '42 MÁLAGA', es: '42 MÁLAGA' },
    ] as Localized[],
  },
  skills: {
    label: { en: '// TECH STACK', es: '// TECH STACK' },
    groups: [
      {
        icon: 'zap',
        title: { en: 'Backend', es: 'Backend' },
        items: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO', 'JWT', 'Python'],
      },
      {
        icon: 'database',
        title: { en: 'Databases', es: 'Bases de datos' },
        items: ['MySQL', 'PostgreSQL', 'MongoDB'],
      },
      {
        icon: 'monitor',
        title: { en: 'Frontend', es: 'Frontend' },
        items: ['Typescript/Javascript','React', 'Next.js', 'React Native'],
      },
      {
        icon: 'wrench',
        title: { en: 'DevOps', es: 'DevOps' },
        items: ['Git/GitHub', 'Linux', 'VPS'],
      },
      {
        icon: 'lock',
        title: { en: 'Other', es: 'Otros' },
        items: ['C/C++', 'WordPress'],
      },
    ],
  },
  projects: {
    label: { en: '// PROJECTS', es: '// PROYECTOS' },
    items: [
      {
        title: { en: 'Task Manager', es: 'Gestor de Tareas' },
        subtitle: {
          en: 'Real-time Collaborative',
          es: 'Colaborativo en Tiempo Real',
        },
        body: {
          en: 'Real-time multi-user task manager built with Node.js, Express.js, Socket.IO and MySQL. Features JWT auth, WebSocket sync, and VPS deployment with SSL.',
          es: 'Gestor de tareas colaborativo en tiempo real con Node.js, Express.js, Socket.IO y MySQL. Autenticación JWT, sincronización WebSocket y despliegue en VPS con SSL.',
        },
        tags: ['Node.js', 'Socket.IO', 'MySQL', 'JWT', 'VPS'],
        status: { en: 'LIVE IN PRODUCTION', es: 'EN PRODUCCIÓN' },
        blink: true,
        link: null,
        sprite: 'ship',
      },
      {
        title: { en: 'DV Properties', es: 'DV Properties' },
        subtitle: {
          en: 'dvpropertiesonline.com',
          es: 'dvpropertiesonline.com',
        },
        body: {
          en: 'Full WordPress customization for a real estate client: galleries, contact forms with anti-spam, responsive design, and client training.',
          es: 'Personalización completa de WordPress para cliente inmobiliario: galerías, formularios con anti-spam, diseño responsive y capacitación al cliente.',
        },
        tags: ['WordPress', 'PHP', 'CSS'],
        status: { en: 'LIVE', es: 'EN VIVO' },
        blink: false,
        link: 'https://dvpropertiesonline.com',
        sprite: 'alien',
      },
      {
        title: { en: 'Business Websites', es: 'Webs Empresariales' },
        subtitle: { en: 'Multi-client', es: 'Multi-cliente' },
        body: {
          en: 'Multiple production websites for SMBs (hospitality, manufacturing, plastics industry) built with Next.js and React. Full infrastructure: domain, SSL, VPS, Google Ads tracking.',
          es: 'Múltiples sitios empresariales en producción (hostelería, manufactura, industria) con Next.js y React. Infraestructura completa: dominio, SSL, VPS, tracking de Google Ads.',
        },
        tags: ['Next.js', 'React', 'Node.js', 'SCSS'],
        status: { en: '3 CLIENTS', es: '3 CLIENTES' },
        blink: false,
        link: null,
        sprite: 'star',
      },
    ],
  },
  contact: {
    label: { en: '// CONTACT', es: '// CONTACTO' },
    headline: {
      en: 'Ready to build something?',
      es: '¿Listo para construir algo?',
    },
    body: {
      en: "I'm available for freelance projects and collaborations. Let's talk.",
      es: 'Disponible para proyectos freelance y colaboraciones. Hablemos.',
    },
    footer: {
      en: '© 2026 Gianfranco Guardamagna · Made with love and too many terminal windows',
      es: '© 2026 Gianfranco Guardamagna · Hecho con amor y demasiadas ventanas de terminal',
    },
	whatsappInfo: {en: 'Text me', es: "Whatsapp"},
	phoneInfo: {en: 'Call me', es: "Teléfono"},
	emailInfo: {en: 'Email', es: "Correo"},
	resumeInfo: {en: 'Download CV', es: 'Descargar CV'},
  },
} as const

export const contact = {
  email: 'gguardamagna23@gmail.com',
  linkedin: 'https://linkedin.com/in/gianfranco-guardamagna-2b47a41b4',
  github: 'https://github.com/GianfrancoGuardamagna/',
  phoneHref: 'tel:+34744744946',
  whatsapp: 'wa.me/+34744744946',
}
