import ImmoTouch from "../public/images/immotouch.png";
import Kabriol from "../public/images/kabriol.png";
import Keeskee from "../public/images/keeskee2.png";
import Themify1 from "../public/images/themify1.png";
import Societech from "../public/images/societech1.png";
import Revamapp from "../public/images/revamapp.png";
import Metawaste1 from "../public/images/metawaste1.png";

import { FaGithub, FaDiscord, FaMedium, FaTwitter, FaHtml5, FaCss3, FaReact, FaFigma, FaPinterest } from "react-icons/fa";
import { SiRemix, SiTypescript, SiNextdotjs, SiZod, SiPrisma, SiBlender, SiGreensock, SiGit, SiFramer, SiReactquery, SiResend, SiReacthookform, SiTailwindcss, SiShadcnui, SiShopify, SiVercel, SiGithub } from "react-icons/si";
import ReactEmail from "@/components/icons/ReactEmail";
import { RiBearSmileLine } from "react-icons/ri";
import { IoShield } from "react-icons/io5";

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
    link: "https://github.com/sejiux", icon: FaGithub,
  },
  {
    link: "https://discordapp.com/users/849428669180542976", icon: FaDiscord,
  },
  {
    link: "https://medium.com/@sejiux", icon: FaMedium,
  },
  {
    link: "https://www.pinterest.fr/sejiux/", icon: FaPinterest
  },
  {
    link: "https://x.com/sejiux", icon: FaTwitter,
  }
];

export const linksData = [
  {
    link: "/", label: "Home",
  },
  {
    link: "mailto:im.sejiux@gmail.com", label: "Contact",
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
    icon: SiTailwindcss,
    name: "Tailwindcss",
    link: "https://tailwindcss.com/"
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
    icon: SiShadcnui,
    name: "ShadcnUi",
    link: "https://ui.shadcn.com/"
  },
  {
    icon: SiPrisma,
    name: "Prisma",
    link: "https://www.prisma.io/"
  },
  {
    icon: IoShield,
    name: "NextAuth",
    link: "https://next-auth.js.org/"
  },
  {
    icon: SiResend,
    name: "Resend",
    link: "https://resend.com/"
  },
  {
    icon: ReactEmail,
    name: "React Email",
    link: "https://react.email/"
  },
  {
    icon: SiReactquery,
    name: "React Query",
    link: "https://tanstack.com/query/latest"
  },
  {
    icon: SiZod,
    name: "Zod",
    link: "https://zod.dev/"
  },
  {
    icon: SiReacthookform,
    name: "React Hook Form",
    link: "https://react-hook-form.com/"
  },
  {
    icon: RiBearSmileLine,
    name: "Zustand",
    link: "https://zustand.docs.pmnd.rs/"
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
    icon: SiShopify,
    name: "Shopify",
    link: "https://www.shopify.com/"
  },
  {
    icon: SiGit,
    name: "Git",
    link: "https://git-scm.com/"
  },
  {
    icon: SiGithub,
    name: "GitHub",
    link: "https://github.com/"
  },
  {
    icon: SiVercel,
    name: "Vercel",
    link: "https://vercel.com/"
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
