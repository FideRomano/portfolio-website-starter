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
import loading from "./assets/img/projects/loading.jpg";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";
import SkillImg9 from "./assets/img/skills/sequelize.png";
import SkillImg10 from "./assets/img/skills/express.png";
import SkillImg11 from "./assets/img/skills/tailwindcss.svg";
import SkillImg12 from "./assets/img/skills/postgres.png";
import SkillImg13 from "./assets/img/skills/sqlite.png";
import SkillImg14 from "./assets/img/skills/visual.png";
import SkillImg15 from "./assets/img/skills/redux.png";
import SkillImg16 from "./assets/img/skills/typescript.png";
import SkillImg17 from "./assets/img/skills/firebase.png";

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
    name: "about",
    href: "about",
  },
  {
    name: "skills",
    href: "skills",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  // {
  //   name: "services",
  //   href: "services",
  // },
  // {
  //   name: "testimonials",
  //   href: "testimonials",
  // },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/fidel-romano/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/httpfido",
  },
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/http_fido/",
  },
  // {
  //   icon: <FiDribbble />,
  //   href: '',
  // },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: GameFindeX,
    name: "GameFindeX",
    category: "individual",
    description:
      "El objetivo es una SPA con todos los conocimientos aprendidos en el Bootcamp de Henry. Esta SPA consume informacion de una API externa, para hacer funcionalidades como buscar juegos, paginado, detalle de cada juego, filtros combinados con ordenamiento, y tambien tener la posibilidad de añadir un juego a la lista",
    href: "https://pi-videogames-gamma-lyart.vercel.app/",
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
    id: "2",
    image: FlexAGENDA,
    name: "FlexAGENDA",
    category: "grupal",
    description:
    "FlexAGENDA es una agenda virtual para profesionales. Es un sitio web diseñado para la gestion de turnos y manejo de clientes.  Ofrece un calendario interactivo con filtros, borrado lógico, pasarela de pagos, autenticación, entre otras tecnologías de desarrollo web.",
    href: "https://flex-agenda.vercel.app/",
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
    id: "3",
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
  },
  {
    image: SkillImg2,
    name: "CSS",
    type: "front",
  },
  {
    image: SkillImg4,
    name: "React",
    type: "front",
  },
  {
    image: SkillImg5,
    name: "Next JS",
    type: "front",
  },
  {
    image: SkillImg8,
    name: "Figma",
    type: "front",
  },
  {
    image: SkillImg11,
    name: "TailwindCSS",
    type: "front",
  },
  {
    image: SkillImg15,
    name: "Redux",
    type: "front",
  },
];

export const skillsBack = [
  {
    image: SkillImg6,
    name: "Node JS",
    type: "back",
  },
  {
    image: SkillImg9,
    name: "Sequelize",
    type: "back",
  },
  {
    image: SkillImg10,
    name: "Express",
    type: "back",
  },
  {
    image: SkillImg12,
    name: "PostgreSQL",
    type: "back",
  },
  {
    image: SkillImg13,
    name: "SQLite",
    type: "back",
  },
  {
    image: SkillImg17,
    name: "Firebase",
    type: "back",
  },
];

export const skillsOther = [
  {
    image: SkillImg3,
    name: "JavaScript",
    type: "other",
  },
  {
    image: SkillImg7,
    name: "Git",
    type: "other",
  },
  {
    image: SkillImg14,
    name: "VSCode",
    type: "other",
  },
  {
    image: SkillImg16,
    name: "TypeScript",
    type: "other",
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
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at hello@youremail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Bucharest, Romania",
    description: "Serving clients worldwide",
  },
];
