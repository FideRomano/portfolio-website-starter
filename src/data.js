//  icons
import {
  FiLinkedin,
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLink,
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import GameFindeX from "./assets/img/projects/p1.png";
import FlexAGENDA from "./assets/img/projects/p2.png";
import movi from "./assets/img/projects/movi.png";
import portfolio from "./assets/img/projects/portfolio.png";
import loading from "./assets/img/projects/loading.jpg";
import boldMobileRegister from "./assets/img/projects/BOLD-MOBILE-REGISTER.jpg";
import boldMobileSplash from "./assets/img/projects/BOLD-MOBILE-SPLASH.jpg";
import boldMobileSucces from "./assets/img/projects/BOLD-MOBILE-SUCCES.jpg";
import cesarini from "./assets/img/projects/plataforma-educativa.jpg";
import nibbinyAbout from "./assets/img/projects/NIBBINY-ABOUT.jpg";
import nibbinyFeed from "./assets/img/projects/NIBBINY-FEED.jpg";
import nibbinyLibrary from "./assets/img/projects/NIBBINY-LIBRARY.jpg";
import arelana from "./assets/img/projects/arelana.png";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";
import SkillImg9 from "./assets/img/skills/sequelize.png";
import SkillImg10 from "./assets/img/skills/express.png";
import SkillImg11 from "./assets/img/skills/tailwind.png";
import SkillImg12 from "./assets/img/skills/postgres.png";
import SkillImg13 from "./assets/img/skills/sqlite.png";
import SkillImg14 from "./assets/img/skills/visual.png";
import SkillImg15 from "./assets/img/skills/redux.png";
import SkillImg16 from "./assets/img/skills/typescript.png";
import SkillImg17 from "./assets/img/skills/firebase.png";
import SkillImg18 from "./assets/img/skills/ai.png";
import SkillImg19 from "./assets/img/skills/ps.png";
import SkillImg20 from "./assets/img/skills/nextjs.png";
import SkillImg21 from "./assets/img/skills/vue.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/testimonial-1.webp";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.webp";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "Sobre mi",
    href: "about",
  },
  {
    name: "habilidades",
    href: "skills",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "contacto",
    href: "contact",
  },
];

// social
export const social = [
  {
    name: "Linkedin",
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/fidel-romano/",
  },
  {
    name: "GitHub",
    icon: <FiGithub />,
    href: "https://github.com/httpfido",
  },
  {
    name: "Instagram",
    icon: <FiInstagram />,
    href: "https://www.instagram.com/http_fido/",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "https://www.freelancer.com.ar/u/httpfido",
  },
  {
    img: UpworkBrandIcon,
    href: "https://www.upwork.com/freelancers/~01f894bd5ed213a2db",
  },
  {
    img: FiverBrandIcon,
    href: "https://es.fiverr.com/fidelromano?public_mode=true",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "https://dribbble.com/http_fido",
  },
];

// projects
export const projectsData = [
  {
    id: "8",
    image: arelana,
    name: "Arelana",
    category: "individual",
    description:
      "Arelana es una tienda virtual diseñadad y desarrollada a medida para un taller de alta joyeria en Barcelona.",
    href: "https://arelana.com/",
    links: [
      {
        icon: <FiGithub />,
        href: "https://github.com/httpfido/portfolio",
      },
      {
        icon: <FiLink />,
        href: "https://arelana.com/",
      },
    ],
  },
  {
    id: "7",
    image: cesarini,
    name: "Cesarini Plataforma Educativa",
    category: "grupal",
    description:
      "Plataforma para uso académico que conecta a profesores y alumnos de nivel primario. La plataforma ofrece diferentes fichas interactivas que el alumno podrá completar y autoevaluarse posteriormente. El docente tiene acceso a un dashboard para administrar a sus alumnos y ver sus avances.",
    href: "https://fidel-portfolio-pink.vercel.app/",
    links: [
      {
        icon: <FiGithub />,
        href: "https://github.com/httpfido/plataforma-educativa",
      },
    ],
  },
  {
    id: "5",
    image: [nibbinyAbout, nibbinyFeed, nibbinyLibrary],
    name: "Nibbiny",
    category: "mobile",
    description:
      "Aplicación de lectura para smarthphone (android y iOS) donde el usuario puede leer y postear novelas (llamadas historias) e interactuar con ellas, likearlas, comentarlas, guardarlas en sus biblioteca y seguir a los creadores.",
    links: [
      {
        icon: <FiGithub />,
        href: "https://github.com/DevLabsHQ/nibbiny-frontend",
      },
    ],
  },
  {
    id: "6",
    image: [boldMobileRegister, boldMobileSplash, boldMobileSucces],
    name: "Bold Mobile",
    category: "mobile",
    description: "Lo que estás viendo :)",
    links: [
      {
        icon: <FiGithub />,
        href: "https://github.com/httpfido/portfolio",
      },
    ],
  },
  {
    id: "1",
    image: movi,
    name: "Movi",
    category: "grupal",
    description:
      "Movi es un sitio web multiplataforma que brinda al usuario la oportunidad de elegir un medio de transporte. Ofrece búsqueda de pasajes, historial y valoración de viajes, envío de paquetes, pasarela de pagos, autenticación por terceros, entre otras tecnologías de desarrollo web.",
    href: "https://urban-movi.vercel.app/",
    links: [
      {
        icon: <FiGithub />,
        href: "https://github.com/pablosecuen/Urban-movi/",
      },
      {
        icon: <FiLink />,
        href: "https://pi-videogames-gamma-lyart.vercel.app/",
      },
    ],
  },
  {
    id: "2",
    image: GameFindeX,
    name: "GameFindeX",
    category: "individual",
    description:
      "El objetivo es una SPA con todos los conocimientos aprendidos en el Bootcamp de Henry. Esta SPA consume informacion de una API externa, para hacer funcionalidades como buscar juegos, paginado, detalle de cada juego, filtros combinados con ordenamiento, y tambien tener la posibilidad de añadir un juego a la lista. NO APTO PARA MOBILE",
    href: "https://www.youtube.com/watch?v=s_xsx8j3DkE",
    links: [
      {
        icon: <FiGithub />,
        href: "https://github.com/httpfido/PI---Videogames",
      },
      {
        icon: <FiLink />,
        href: "https://pi-videogames-gamma-lyart.vercel.app/",
      },
    ],
  },
  {
    id: "3",
    image: FlexAGENDA,
    name: "FlexAGENDA",
    category: "grupal",
    description:
      "FlexAGENDA es una agenda virtual para profesionales. Es un sitio web diseñado para la gestion de turnos y manejo de clientes.  Ofrece un calendario interactivo con filtros, borrado lógico, pasarela de pagos, autenticación, entre otras tecnologías de desarrollo web. NO APTO PARA MOBILE",
    href: "https://www.youtube.com/watch?v=i9h7lQ1n0Ts",
    links: [
      {
        icon: <FiGithub />,
        href: "https://github.com/AndresPM98/FlexAgenda",
      },
      {
        icon: <FiLink />,
        href: "https://flex-agenda.vercel.app/",
      },
    ],
  },
  {
    id: "4",
    image: portfolio,
    name: "Mi portfolio",
    category: "branding",
    description: "Lo que estás viendo :)",
    href: "https://fidel-portfolio-pink.vercel.app/",
    links: [
      {
        icon: <FiGithub />,
        href: "https://github.com/httpfido/portfolio",
      },
      {
        icon: <FiLink />,
        href: "https://fidel-portfolio-pink.vercel.app/",
      },
    ],
  },
  {
    id: "0",
    image: loading,
    name: "Netflix clon",
    category: "individual",
    description: "Proximamente",
    href: "https://github.com/httpfido",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "grupal",
  },
  {
    name: "individual",
  },
  {
    name: "branding",
  },
];

// skill
export const skillsFront = [
  {
    image: SkillImg1,
    name: "HTML",
    type: "front",
    href: "https://html.spec.whatwg.org/multipage/",
  },
  {
    image: SkillImg2,
    name: "CSS",
    type: "front",
    href: "https://www.w3schools.com/css/",
  },
  {
    image: SkillImg4,
    name: "React",
    type: "front",
    href: "https://es.reactjs.org/",
  },
  {
    image: SkillImg20,
    name: "Next JS",
    type: "front",
    href: "https://nextjs.org/",
  },
  {
    image: SkillImg21,
    name: "Vue JS",
    type: "front",
    href: "https://vuejs.org/",
  },
  {
    image: SkillImg11,
    name: "TailwindCSS",
    type: "front",
    href: "https://tailwindcss.com/",
  },
  {
    image: SkillImg15,
    name: "Redux",
    type: "front",
    href: "https://redux.js.org/",
  },
  {
    image: SkillImg8,
    name: "Figma",
    type: "front",
    href: "https://www.figma.com/",
  },
];

export const skillsBack = [
  {
    image: SkillImg6,
    name: "Node JS",
    type: "back",
    href: "https://nodejs.org/en",
  },
  {
    image: SkillImg9,
    name: "Sequelize",
    type: "back",
    href: "https://sequelize.org/",
  },
  {
    image: SkillImg10,
    name: "Express",
    type: "back",
    href: "https://expressjs.com/es/",
  },
  {
    image: SkillImg12,
    name: "PostgreSQL",
    type: "back",
    href: "https://www.postgresql.org/",
  },
  {
    image: SkillImg13,
    name: "SQLite",
    type: "back",
    href: "https://sqlite.org/index.html",
  },
  {
    image: SkillImg17,
    name: "Firebase",
    type: "back",
    href: "https://firebase.google.com/?gclid=CjwKCAjwiOCgBhAgEiwAjv5whJsyc4xHCk_rKEJnSYU4uUnFNu7gArtSqn6K_UbAd8mT1WNmVAQ4rBoCHJQQAvD_BwE&gclsrc=aw.ds&hl=es-419",
  },
];

export const skillsOther = [
  {
    image: SkillImg3,
    name: "JavaScript",
    type: "other",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    image: SkillImg7,
    name: "Git",
    type: "other",
    href: "https://git-scm.com/",
  },
  {
    image: SkillImg16,
    name: "TypeScript",
    type: "other",
    href: "https://www.typescriptlang.org/",
  },
  {
    image: SkillImg14,
    name: "VSCode",
    type: "other",
    href: "https://code.visualstudio.com/",
  },
  {
    image: SkillImg18,
    name: "Illustrator",
    type: "other",
    href: "https://www.adobe.com/ar/products/illustrator.html",
  },
  {
    image: SkillImg19,
    name: "Photoshop",
    type: "other",
    href: "https://www.adobe.com/ar/products/photoshop.html",
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiPenTool />,
    name: "Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiTag />,
    name: "SEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "¿Quieres hacerme una pregunta?",
    subtitle: "Estoy aqui para ayudarte!",
    description: "Enviame un email a fidel.romano.2021@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Ubicacion actual",
    subtitle: "Buenos Aires, Argentina",
    description: "Trabajo en remoto!",
  },
];
