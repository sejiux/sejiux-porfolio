import { FaCode, FaJira, FaLock, FaRocket, FaShopify } from "react-icons/fa6";
import { FaGithub, FaDiscord, FaMedium, FaTwitter, FaHtml5, FaCss3, FaReact, FaFigma, FaPinterest, FaTachometerAlt, FaPaintBrush, FaHeadphonesAlt, FaSearch, FaMoneyBillAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiZod, SiPrisma, SiBlender, SiGreensock, SiGit, SiFramer, SiReactquery, SiResend, SiReacthookform, SiTailwindcss, SiShadcnui, SiShopify, SiVercel, SiGithub, SiSocketdotio, SiGraphql } from "react-icons/si";
import { RiBearSmileLine, RiCodeSSlashLine } from "react-icons/ri";
import { AiOutlineAppstore, AiOutlineSketch } from "react-icons/ai";
import { IoClose, IoShield } from "react-icons/io5";
import { FiZap } from "react-icons/fi";
import { TfiBarChart } from "react-icons/tfi";
import { HiOutlineCloudUpload } from "react-icons/hi";
import { GiKey } from "react-icons/gi";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import HomeHellopurly from "@/public/images/hellopurly-home.png";
import ProductHellopurly from "@/public/images/hellopurly-product.png";
import MobileHelloPurly from "@/public/images/hellopurly-mobile.png";
import BlogReview from "@/public/images/blog-review.png";
import BlogError from "@/public/images/blog-snipcart-error.png";
import BlogDesign from "@/public/images/blog-snipcart-design.png";
import BlogStrapi from "@/public/images/blog-strapi.png";
import BlogSnipcart from "@/public/images/blog-snipcart.png";
import BlogHeadless from "@/public/images/blog-headless.png";
import BlogIp from "@/public/images/blog-ip.png";
import BlogListening from "@/public/images/blog-active-listening.png";
import BlogMindset from "@/public/images/blog-mindset.png";

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

export const FAQsData = [
  {
    title: "Pourquoi choisir une boutique Headless ?", 
    content: "Les boutiques Headless offrent une flexibilité et des performances accrues en séparant le front-end et le back-end. Cela permet des expériences utilisateur rapides, personnalisées et évolutives, idéales pour répondre aux besoins spécifiques de votre audience.", 
  },
  {
    title: "Comment ma boutique sera-t-elle unique ?", 
    content: "Chaque boutique est conçue sur mesure, en accord avec votre identité de marque et vos besoins. Design, fonctionnalités et architecture sont personnalisés pour offrir une expérience qui vous distingue de vos concurrents.", 
  },
  {
    title: "Quels avantages offre votre service ?", 
    content: "Mon service garantit des solutions adaptées à vos objectifs, un développement optimisé pour les performances et le SEO, ainsi qu’un suivi complet avant et après le lancement.", 
  },
  {
    title: "Comment se déroule le processus ?", 
    content: "Après la commande, j’analyse vos besoins, crée un design sur mesure, développe et teste la boutique, puis vous accompagne pour le lancement et les ajustements nécessaires.", 
  },
  {
    title: "Comment garantissez-vous la qualité ?", 
    content: "Chaque étape, du design au déploiement, suit des standards rigoureux. Les tests approfondis garantissent des performances optimales et une sécurité renforcée.", 
  },
  {
    title: "Combien de temps cela prend-il ?", 
    content: "Le délai dépend de la complexité de votre projet, mais en moyenne, une boutique est prête en 4 à 8 semaines, incluant le design, le développement et les tests.", 
  },
  {
    title: "Puis-je demander des modifications après ?", 
    content: "Oui, des ajustements mineurs sont possibles après livraison. Pour des besoins réguliers, je propose un service de maintenance qui couvre les modifications et les mises à jour.", 
  },
];

export const articlesData = [
  {
    image: BlogHeadless,
    title: "Comment résoudre la redirection du checkout dans Shopify Headless", 
    category: "Developpement",
    date: "30 Oct, 2024", 
    ReadingTime: "Temps de lecture: 10 min", 
    link: "https://medium.com/stackademic/how-to-resolve-checkout-redirection-in-shopify-headless-693a2c2a5df4", 
  },
  {
    image: BlogIp,
    title: "Comment bloquer l'accès à votre site web par adresse IP sur Vercel", 
    category: "Developpement",
    date: "10 Juil, 2024", 
    ReadingTime: "Temps de lecture: 5 min", 
    link: "https://medium.com/stackademic/how-to-block-access-to-your-website-by-ip-address-on-vercel-ace280739449", 
  },
  {
    image: BlogListening,
    title: "L'écoute active: Un chemin vers une véritable présence", 
    category: "Psychologie",
    date: "6 Feb, 2024", 
    ReadingTime: "Temps de lecture: 4 min", 
    link: "https://medium.com/@sejiux/active-listening-a-path-to-true-presence-63da2811fb64", 
  },
  {
    image: BlogMindset,
    title: "L'impact de l'environnement sur notre conditionnement mental", 
    category: "Neurosciences",
    date: "6 Feb, 2024", 
    ReadingTime: "Temps de lecture: 2 min", 
    link: "https://medium.com/@sejiux/the-impact-of-the-environment-on-our-mental-conditioning-b9fbb7a960c5", 
  },
  {
    image: BlogReview,
    title: "Comment créer un formulaire d'avis avec React Hook Form, Zod et Next.js", 
    category: "Developpement",
    date: "5 Feb, 2024", 
    ReadingTime: "Temps de lecture: 10 min", 
    link: "https://blog.stackademic.com/how-to-create-a-review-form-with-react-hook-form-zod-and-nextjs-21f09cdda77c", 
  },
  {
    image: BlogSnipcart,
    title: "Intégration d'un panier d'achat avec Snipcart dans la boutique Next.js", 
    category: "Developpement",
    date: "3 Feb, 2024", 
    ReadingTime: "Temps de lecture: 5 min", 
    link: "https://blog.stackademic.com/integration-of-an-e-commerce-shopping-cart-with-snipcart-in-nextjs-store-7cce036bf0c5", 
  },
  {
    image: BlogStrapi,
    title: "Comment déployer Strapi et Next.js sur un serveur VPS avec Hostinger", 
    category: "DevOps",
    date: "31 Dec, 2023", 
    ReadingTime: "Temps de lecture: 10 min", 
    link: "https://blog.stackademic.com/how-to-deploy-strapi-and-nextjs-on-a-vps-server-with-hostinger-f0f615560147", 
  },
  {
    image: BlogError,
    title: "Comment corriger l'erreur 'product crawling error' avec Next.js et Snipcart",
    category: "Developpement",
    date: "29 Dec, 2023", 
    ReadingTime: "Temps de lecture: 2 min", 
    link: "https://blog.stackademic.com/how-to-fix-product-crawling-error-with-nextjs-app-and-snipcart-b38fc54f95f3", 
  },
  {
    image: BlogDesign,
    title: "Comment personnaliser le SDK de Snipcart avec Next.js", 
    category: "Developpement",
    date: "29 Dec, 2023", 
    ReadingTime: "Temps de lecture: 2 min", 
    link: "https://blog.stackademic.com/customize-snipcart-sdk-with-nextjs-13-0a257dd15e2f", 
  },
];

export const ProcessusData = [
  {
    title: "Contact", 
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
    title: "Livraison", 
    content: "Votre boutique est prête à accueillir vos clients et générer des ventes.", 
    step: "6",
    icon: GiKey, 
  },
];

export const BenefitsData = [
  {
    symbole: "+", 
    percentage: "30",
    title: "Taux de Conversion", 
  },
  {
    symbole: "+", 
    percentage: "50",
    title: "Performances Optimisées", 
  },
  {
    symbole: "+", 
    percentage: "40",
    title: "Engagement Client", 
  },
  {
    symbole: "+", 
    percentage: "80",
    title: "Identité renforcée", 
  },
];

export const WhyData = [
  {
    title: "Autres Agences",
    lists: [
      {
        icon: IoClose,
        content: "Thème prédéfini, commun et duplicable",
      },
      {
        icon: IoClose,
        content: "Pages lentes et peu optimisées",
      },
      {
        icon: IoClose,
        content: "Assistance et mises à jour restreintes",
      },
      {
        icon: IoClose,
        content: "Optimisations SEO de base",
      },
      {
        icon: IoClose,
        content: "Mise en place rapide et coût initial réduit",
      },
    ], 
  },
  {
    title: "Sejiux",
    lists: [
      {
        icon: FaPaintBrush,
        content: "Thème sur-mesure, unique et exclusif",
      },
      {
        icon: FaRocket,
        content: "Pages ultra-rapides et hautement optimisées",
      },
      {
        icon: FaHeadphonesAlt,
        content: "Assistance et mises à jour complètes",
      },
      {
        icon: FaSearch,
        content: "Optimisations SEO avancées et performantes",
      },
      {
        icon: FaMoneyBillAlt,
        content: "Coût initial plus élevé mais valeur ajoutée",
      },
    ], 
  },
];

export const CaseStudyData = [
  {
    image: MobileHelloPurly, 
    alt: "First Image of Hellopurly",
  },
  {
    image: HomeHellopurly, 
    alt: "Third Image of Hellopurly",  
  },
  {
    image: ProductHellopurly, 
    alt: "Four Image of Hellopurly",
  },
];

export const PricesFixeData = (modeSelected?: number) => [
  {
    title: "Mono-Produit", 
    price: modeSelected ? "495" : "4950",
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
    price:  modeSelected ? "795" : "7950",
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
    icon: SiGraphql,
    name: "GraphQL",
    link: "https://graphql.org/"
  },
  {
    icon: IoShield,
    name: "NextAuth",
    link: "https://next-auth.js.org/"
  },
  {
    icon: SiSocketdotio,
    name: "SocketIo",
    link: "https://socket.io/"
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
  {
    icon: FaJira,
    name: "Jira",
    link: "https://www.atlassian.com/software/jira"
  },
];
