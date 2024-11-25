import ImmoTouch from "../public/images/immotouch.png";
import Kabriol from "../public/images/kabriol.png";
import Keeskee from "../public/images/keeskee2.png";
import Themify1 from "../public/images/themify1.png";
import Societech from "../public/images/societech1.png";
import Revamapp from "../public/images/revamapp.png";
import Metawaste1 from "../public/images/metawaste1.png";
import { FaCode, FaLock, FaRocket, FaShopify } from "react-icons/fa6";
import { FaGithub, FaDiscord, FaMedium, FaTwitter, FaHtml5, FaCss3, FaReact, FaFigma, FaPinterest, FaTachometerAlt, FaPaintBrush, FaHeadphonesAlt, FaSearch, FaMoneyBillAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiZod, SiPrisma, SiBlender, SiGreensock, SiGit, SiFramer, SiReactquery, SiResend, SiReacthookform, SiTailwindcss, SiShadcnui, SiShopify, SiVercel, SiGithub } from "react-icons/si";
import { RiBearSmileLine, RiCodeSSlashLine } from "react-icons/ri";
import { AiOutlineAppstore, AiOutlineSketch } from "react-icons/ai";
import { IoClose, IoShield } from "react-icons/io5";
import { FiZap } from "react-icons/fi";
import { TfiBarChart } from "react-icons/tfi";
import { HiOutlineCloudUpload } from "react-icons/hi";
import { GiKey } from "react-icons/gi";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import SejiuxLogo from "@/public/images/sejiux.png";

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

export const ServicesData = [
  {
    title: "Design à Fort Impact", 
    content: "Un design sur-mesure qui capte l’attention et incite vos visiteurs à agir de manière décisive, renforçant l’engagement et les conversions.", 
    icon: AiOutlineAppstore, 
  },
  {
    title: "Développement FullStack", 
    content: "Une boutique puissante et évolutive, conçue avec les meilleures technologies pour accompagner la croissance et l’ambition de votre marque", 
    icon: FaCode, 
  },
  {
    title: "SEO Optimisé", 
    content: "Une stratégie SEO avancée qui améliore votre visibilité en ligne, garantissant des classements de choix pour attirer un trafic organique ciblé.", 
    icon: TfiBarChart, 
  },
  {
    title: "Performance et Rapidité", 
    content: "Chaque page est optimisé pour une navigation fluide et rapide, réduisant le temps de chargement et éliminant les obstacles pour vos visiteurs.", 
    icon: FaTachometerAlt, 
  },
  {
    title: "Sécurité et Scalabilité", 
    content: "Une architecture Headless qui garantit une boutique sécurisée et capable de s’adapter aux fluctuations de trafic et aux évolutions du marché.", 
    icon: FaLock, 
  },
  {
    title: "Simplicité et Efficacité", 
    content: "Mon expertise libère votre temps, simplifiant la gestion de votre projet pour maximiser son efficacité et l’impact de votre boutique.", 
    icon: FiZap, 
  },
];

export const ProcessusData = [
  {
    title: "Prise de contact", 
    content: "Nous échangeons pour définir vos besoins, votre vision et vos objectifs.", 
    step: "1",
    icon: MdOutlineChatBubbleOutline, 
  },
  {
    title: "Configuration", 
    content: "Je configure votre boutique Shopify sur mon compte partenaire Shopify.", 
    step: "2",
    icon: FaShopify, 
  },
  {
    title: "Conception", 
    content: "Je crée un design sur-mesure et attends votre validation avant de le finaliser.", 
    step: "3",
    icon: AiOutlineSketch, 
  },
  {
    title: "Développement", 
    content: "Une fois le design validé, je transforme le design en code au pixel près.", 
    step: "4",
    icon: RiCodeSSlashLine, 
  },
  {
    title: "Déploiement", 
    content: "Votre projet est déployé, hébergée et transférée sur votre compte.", 
    step: "5",
    icon: HiOutlineCloudUpload, 
  },
  {
    title: "Livraison clé en main", 
    content: "Votre boutique est prête à accueillir vos clients et générer des ventes.", 
    step: "6",
    icon: GiKey, 
  },
];

export const ToolsData = [
  {
    title: "Shopify", 
    content: "Shopify me permet de créer des boutiques en ligne performantes et personnalisées.", 
    link: "https://www.shopify.com/",
    icon: SiShopify, 
  },
  {
    title: "Figma", 
    content: "Figma est mon outil de design collaboratif pour créer des interfaces modernes et sur-mesure.", 
    link: "https://www.figma.com/",
    icon: FaFigma, 
  },
  {
    title: "NextJs", 
    content: "Next.js me permet de créer des sites rapides et optimisés avec un rendu côté serveur.", 
    link: "https://nextjs.org/",
    icon: SiNextdotjs, 
  },
  {
    title: "Tailwindcss", 
    content: "TailwindCSS me permet de concevoir des interfaces réactives et personnalisées rapidement.", 
    link: "https://tailwindcss.com/",
    icon: SiTailwindcss, 
  },
  {
    title: "GitHub", 
    content: "GitHub me permet de gérer le code source et le versioning des projets en toute simplicité.", 
    link: "https://github.com/",
    icon: FaGithub, 
  },
  {
    title: "Vercel", 
    content: "Vercel est la plateforme que j’utilise pour déployer des applications Next.js avec des performances optimales.", 
    link: "https://vercel.com/",
    icon: SiVercel, 
  },
];

export const BenefitsData = [
  {
    symbole: "+", 
    percentage: "30%",
    title: "Taux de Conversion", 
  },
  {
    symbole: "+", 
    percentage: "50%",
    title: "Performances Optimisées", 
  },
  {
    symbole: "+", 
    percentage: "40%",
    title: "Engagement Client", 
  },
  {
    symbole: "+", 
    percentage: "80%",
    title: "Identité renforcée", 
  },
];

export const WhyData = [
  {
    title: "Autres Agences",
    lists: [
      {
        icon: IoClose,
        content: "Design prédéfini, commun et duplicable",
        image: "",
      },
      {
        icon: IoClose,
        content: "Pages lentes et peu optimisées",
        image: "",
      },
      {
        icon: IoClose,
        content: "Assistance et mises à jour restreintes",
        image: "",
      },
      {
        icon: IoClose,
        content: "Optimisations SEO de base",
        image: "",
      },
      {
        icon: IoClose,
        content: "Mise en place rapide et coût initial réduit",
        image: "",
      },
    ], 
  },
  {
    title: "Sejiux",
    lists: [
      {
        icon: FaPaintBrush,
        content: "Design sur-mesure, unique et exclusif",
        image: SejiuxLogo,
      },
      {
        icon: FaRocket,
        content: "Pages ultra-rapides et hautement optimisées",
        image: SejiuxLogo,
      },
      {
        icon: FaHeadphonesAlt,
        content: "Assistance et mises à jour complètes",
        image: SejiuxLogo,
      },
      {
        icon: FaSearch,
        content: "Optimisations SEO avancées et performantes",
        image: SejiuxLogo,
      },
      {
        icon: FaMoneyBillAlt,
        content: "Coût initial plus élevé mais valeur ajoutée",
        image: SejiuxLogo,
      },
    ], 
  },
];

export const PricesFixeData = (modeSelected?: number) => [
  {
    title: "Mono-Produit", 
    price: modeSelected ? "400" : "4950",
    infoPrice: "Pendant 10 mois sans frais", 
    content: "Une boutique monoproduit impactante, conçue pour convertir vos visiteurs en clients.",
    link: "mailto:im.sejiux@gmail.com",
    options: [
      {
        title: "Copywriting Persuasif"
      },
      {
        title: "Design Sur-Mesure"
      },
      {
        title: "Développement Responsive"
      },
      {
        title: modeSelected ? "Licence d'utilisation" : "Propriétés totale"
      },
      {
        title: "Protection contre la duplication"
      },
      {
        title: "1 Mois de Support Inclus"
      },
      {
        title: "Optimisation SEO"
      },
      {
        title: "Délivré en 1 Mois"
      },
      {
        title: "Blog avec le CMS Strapi"
      },
    ],
  },
  {
    title: "Multi-Produit", 
    price:  modeSelected ? "700" : "7950",
    infoPrice: "Pendant 10 mois sans frais",
    content: "Une boutique multiproduit qui met en valeur chaque produit avec clarté et efficacité.",
    link: "mailto:im.sejiux@gmail.com",
    options: [
      {
        title: "Pack Complet Monoproduit"
      },
      {
        title: "Intégration des Collections"
      },
      {
        title: "Gestion de Catalogue Avancée"
      },
      {
        title: "Système de Catégorisation"
      },
      {
        title: "Fonctionnalités de Cross-Selling"
      },
      {
        title: "Filtres et Recherche Produits"
      },
      {
        title: "2 Mois de Support Inclus"
      },
      {
        title: "Optimisation SEO Avancée"
      },
      {
        title: "Délivré en 2 Mois"
      },
    ], 
  },
  /* {
    title: "Maintenance", 
    price: "250€/m",
    content: "Next.js me permet de créer des sites rapides et optimisés avec un rendu côté serveur.", 
    link: "https://nextjs.org/",
    options: [
      {
        title: ""
      }
    ],
  }, */
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
    link: "/", label: "Accueil",
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
