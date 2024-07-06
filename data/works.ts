import ImmoTouch from "../public/images/immotouch.png";
import Kabriol from "../public/images/kabriol.png";
import Keeskee from "../public/images/keeskee2.png";
import Themify1 from "../public/images/themify1.png";
import Societech from "../public/images/societech1.png";
import Revamapp from "../public/images/revamapp.png";
import Metawaste1 from "../public/images/metawaste1.png";

import { FaGithub, FaDiscord, FaMedium, FaTwitter, FaLinkedin, FaHtml5, FaCss3, FaReact, FaFigma } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiZod, SiPrisma, SiBlender, SiGreensock, SiGit, SiThreedotjs, SiFramer } from "react-icons/si";

export const worksData = [
  {
    title: "Themify", 
    category: "Product", 
    date: "2023", 
    pictures: Themify1, 
    href: "https://github.com/slmrsv/Themify",
    color: "rgba(120,119,198,0.3)"
  },
  {
    title: "ImmoTouch", 
    category: "Web application", 
    date: "2023", 
    pictures: ImmoTouch, 
    href: "https://www.immotouch.fr/",
  },
  {
    title: "Keeskee", 
    category: "Web application", 
    date: "2023", 
    pictures: Keeskee, 
    href: "https://www.keeskee.com/"
  },
  {
    title: "Revam'App", 
    category: "Web application", 
    date: "2022", 
    pictures: Revamapp, 
    href: "https://www.nge.fr/innovation/"
  },
  {
    title: "Societech", 
    category: "Landing page", 
    date: "2022", 
    pictures: Societech, 
    href: "https://societech.fr/"
  },
  {
    title: "Kabriol", 
    category: "Web application", 
    date: "2022", 
    pictures: Kabriol, 
    href: "https://www.webkabriol.fr/"
  },
  {
    title: "Metawaste", 
    category: "Back office", 
    date: "2022", 
    pictures: Metawaste1, 
    href: "https://metawaste.com/fr/"
  },
];

export const socialsData = [
  {
    link: "https://github.com/slmrsv", icon: FaGithub,
  },
  {
    link: "https://discordapp.com/users/849428669180542976", icon: FaDiscord,
  },
  {
    link: "https://medium.com/@slmrsv", icon: FaMedium,
  },
  {
    link: "https://x.com/slmrsv", icon: FaTwitter,
  },
  {
    link: "https://www.linkedin.com/in/slmrsv/", icon: FaLinkedin
  }
];

export const linksData = [
  {
    link: "/", label: "Home",
  },
  {
    link: "/works", label: "Works",
  },
  {
    link: "mailto:slmrsv.bz@gmail.com", label: "Contact",
  },
];

export const stacksData = [
  {
    icon: FaHtml5,
    name: "Html"
  },
  {
    icon: FaCss3,
    name: "Css"
  },
  {
    icon: SiTypescript,
    name: "Typescript"
  },
  {
    icon: FaReact,
    name: "React"
  },
  {
    icon: SiNextdotjs,
    name: "NextJs"
  },
  {
    icon: SiZod,
    name: "Zod"
  },
  {
    icon: SiPrisma,
    name: "Prisma"
  },
  {
    icon: SiGreensock,
    name: "Gsap"
  },
  {
    icon: SiFramer,
    name: "Framer motion"
  },
  {
    icon: SiThreedotjs,
    name: "ThreeJs"
  },
  {
    icon: SiGit,
    name: "Git"
  },
  {
    icon: FaFigma,
    name: "Figma"
  },
  {
    icon: SiBlender,
    name: "Blender"
  },
];