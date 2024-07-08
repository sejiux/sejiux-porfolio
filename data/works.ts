import ImmoTouch from "../public/images/immotouch.png";
import Kabriol from "../public/images/kabriol.png";
import Keeskee from "../public/images/keeskee2.png";
import Themify1 from "../public/images/themify1.png";
import Societech from "../public/images/societech1.png";
import Revamapp from "../public/images/revamapp.png";
import Metawaste1 from "../public/images/metawaste1.png";

import { FaGithub, FaDiscord, FaMedium, FaTwitter, FaHtml5, FaCss3, FaReact, FaFigma, FaPinterest } from "react-icons/fa";
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
    link: "https://www.pinterest.fr/slmrsv/", icon: FaPinterest
  },
  {
    link: "https://x.com/slmrsv", icon: FaTwitter,
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
    name: "Html",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    icon: FaCss3,
    name: "Css",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    icon: SiTypescript,
    name: "Typescript",
    link: "https://www.typescriptlang.org/"
  },
  {
    icon: FaReact,
    name: "React",
    link: "https://reactjs.org/"
  },
  {
    icon: SiNextdotjs,
    name: "NextJs",
    link: "https://nextjs.org/"
  },
  {
    icon: SiZod,
    name: "Zod",
    link: "https://zod.dev/"
  },
  {
    icon: SiPrisma,
    name: "Prisma",
    link: "https://www.prisma.io/"
  },
  {
    icon: SiGreensock,
    name: "Gsap",
    link: "https://greensock.com/gsap/"
  },
  {
    icon: SiFramer,
    name: "Framer motion",
    link: "https://www.framer.com/motion/"
  },
  {
    icon: SiThreedotjs,
    name: "ThreeJs",
    link: "https://threejs.org/"
  },
  {
    icon: SiGit,
    name: "Git",
    link: "https://git-scm.com/"
  },
  {
    icon: FaFigma,
    name: "Figma",
    link: "https://www.figma.com/"
  },
  {
    icon: SiBlender,
    name: "Blender",
    link: "https://www.blender.org/"
  },
];
