import { FaCode, FaJira, FaLock, FaRocket, FaShopify } from "react-icons/fa6";
import { FaGithub, FaDiscord, FaMedium, FaTwitter, FaHtml5, FaCss3, FaReact, FaFigma, FaPinterest, FaTachometerAlt, FaPaintBrush, FaHeadphonesAlt, FaSearch, FaMoneyBillAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiZod, SiPrisma, SiBlender, SiGreensock, SiGit, SiFramer, SiReactquery, SiResend, SiReacthookform, SiTailwindcss, SiShadcnui, SiShopify, SiVercel, SiGithub, SiSocketdotio, SiGraphql, SiStrapi } from "react-icons/si";
import { RiBearSmileLine, RiCodeSSlashLine, RiHomeSmile2Fill, RiServiceFill, RiUser5Fill } from "react-icons/ri";
import { AiOutlineAppstore, AiOutlineSketch } from "react-icons/ai";
import { IoClose, IoShield } from "react-icons/io5";
import { FiZap } from "react-icons/fi";
import { TfiBarChart } from "react-icons/tfi";
import { HiOutlineCloudUpload } from "react-icons/hi";
import { GiKey } from "react-icons/gi";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { PiMoneyWavyFill, PiQuestionFill } from "react-icons/pi";
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
    title: "sejiux",
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
        content: "Coût plus élevé mais taux de conversion multipliée",
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
    link: modeSelected ? "https://buy.stripe.com/9AQ29a1Hydx88ec8wB" : "https://buy.stripe.com/7sIg002LC78K520fZ2",
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
    link: modeSelected ? "https://buy.stripe.com/5kA3de0Du0Km664cMT" : "https://buy.stripe.com/8wM5lmgCsfFg1PO5kq",
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
    link: "/#home", 
    label: "Accueil",
    icon: RiHomeSmile2Fill
  },
  {
    link: "/#services", 
    label: "Services",
    icon: RiServiceFill
  },
  {
    link: "/#plans", 
    label: "Tarifs",
    icon: PiMoneyWavyFill
  },
  {
    link: "/#about", 
    label: "À propos",
    icon: RiUser5Fill
  },
  {
    link: "/#faq", 
    label: "FAQ",
    icon: PiQuestionFill
  },
];

export const legalsLinksData = [
  {
    link: "/legals/terms-of-use", label: "Mentions légales",
  },
  {
    link: "/legals/privacy-policy", label: "Politique de confidentialité",
  },
  {
    link: "/legals/terms-and-conditions", label: "Conditions générales de vente",
  },
  {
    link: "/legals/cookie-policy", label: "Politique de cookies",
  },
];

export const legalsPagesData = (handle: string) => {
  switch (handle) {
  case "terms-of-use":
    return {
      title: "Mentions légales",
      data: [
        {
          title: "1. Informations légales",
          content: `Créateur du site : Sélim Baouz
            Responsable de publication : Sélim Baouz
            Adresse : 5 rue marcel sembat 83200 Toulon
            Email : im.sejiux@gmail.com
            Numéro SIRET : 83012126500037`,
        },
        {
          title: "2. Hébergement",
          content: `Hébergeur : Vercel Inc.
            Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA
            Site Web : vercel.com`,
        },
        {
          title: "3. Propriété intellectuelle",
          content: `Tous les contenus présents sur ce site (textes, images, vidéos, logos, etc.) sont protégés par les lois relatives à la propriété intellectuelle. Toute reproduction, totale ou partielle, sans autorisation écrite est interdite.`,
        },
        {
          title: "4. Paiements sécurisés avec Stripe",
          content: `Les paiements effectués sur ce site sont redirigés vers **Stripe Checkout**. Stripe est responsable de la collecte et du traitement des données de paiement sur son propre domaine sécurisé. Pour plus d'informations, veuillez consulter [la politique de confidentialité de Stripe](https://stripe.com/fr/privacy).`,
        },
        {
          title: "5. Collecte et traitement des données",
          content: `Ce site utilise **Vercel Analytics** pour analyser l'usage du site et **Vercel Speed Insights** pour optimiser les performances. Ces outils collectent des données anonymisées pour améliorer votre expérience.`,
        },
        {
          title: "6. Cookies",
          content: `Aucun cookie n'est utilisé pour collecter des données personnelles. Cependant, des cookies techniques peuvent être générés pour le fonctionnement des services analytiques.`,
        },
        {
          title: "7. Droit applicable",
          content: `Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux compétents seront ceux de Toulon.`,
        },
      ],
    };
  case "privacy-policy":
    return {
      title: "Politique de confidentialité",
      data: [
        {
          title: "1. Introduction",
          content: `Je respecte votre vie privée et je m'engage à protéger vos informations personnelles. Cette politique de confidentialité décrit comment je collecte, utilise et protège les données que vous me fournissez lorsque vous utilisez ce site.`,
        },
        {
          title: "2. Données collectées",
          content: `Je collecte uniquement des données anonymisées via Vercel Analytics pour suivre l'activité du site et améliorer ses performances. Les paiements effectués via Stripe Checkout sont soumis à la politique de confidentialité de Stripe.`,
        },
        {
          title: "3. Finalité du traitement des données",
          content: `Les données collectées sont utilisées pour :
          - Analyser le trafic et améliorer le contenu du site.
          - Assurer un processus de paiement sécurisé avec Stripe.`,
        },
        {
          title: "4. Partage des données",
          content: `Je ne partage pas vos données personnelles avec des tiers, à l'exception des services nécessaires au fonctionnement du site, tels que Stripe et Vercel.`,
        },
        {
          title: "5. Vos droits",
          content: `Conformément au RGPD, vous avez le droit d'accéder, de corriger ou de demander la suppression des données vous concernant. Pour exercer ces droits, vous pouvez me contacter à l'adresse suivante : im.sejiux@gmail.com.`,
        },
        {
          title: "6. Sécurité",
          content: `Je mets en œuvre des mesures de sécurité pour protéger vos données contre tout accès non autorisé.`,
        },
      ],
    };
  case "terms-and-conditions":
    return {
      title: "Conditions générales de vente",
      data: [
        {
          title: "1. Objet",
          content: `Les présentes conditions générales régissent la vente des services et produits proposés sur ce site.`,
        },
        {
          title: "2. Tarification",
          content: `Les prix des produits sont indiqués en euros et peuvent être modifiés à tout moment. Les paiements sont traités via Stripe Checkout.`,
        },
        {
          title: "3. Commande et paiement",
          content: `La commande est validée une fois que vous avez été redirigé vers Stripe Checkout et que le paiement est effectué sur leur plateforme sécurisée.`,
        },
        {
          title: "4. Droit de rétractation",
          content: `Conformément à la législation en vigueur, vous disposez d'un délai de 14 jours pour exercer votre droit de rétractation.`,
        },
        {
          title: "5. Litiges",
          content: `En cas de litige, le tribunal compétent sera celui de Toulon.`,
        },
      ],
    };
  case "cookie-policy":
    return {
      title: "Politique de cookies",
      data: [
        {
          title: "1. Utilisation des cookies",
          content: `Je n'utilise pas de cookies pour collecter des données personnelles. Toutefois, des cookies techniques peuvent être utilisés pour améliorer la navigation et la performance du site.`,
        },
        {
          title: "2. Cookies tiers",
          content: `Certains cookies peuvent être générés par Vercel Analytics afin d'analyser la performance du site et améliorer l'expérience utilisateur.`,
        },
        {
          title: "3. Désactivation des cookies",
          content: `Vous pouvez configurer votre navigateur pour bloquer les cookies. Cependant, cela pourrait affecter certaines fonctionnalités du site et rendre certaines sections moins accessibles.`,
        },
        {
          title: "4. Consentement",
          content: `En naviguant sur ce site, vous consentez à l'utilisation des cookies techniques nécessaires pour le bon fonctionnement du site.`,
        },
      ],
    };
  default:
    return {
      title: "Page non trouvée",
      data: [
        {
          title: "Error 404",
          content: "La page demandée n'existe pas.",
        },
      ],
    };
  }
};


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
    icon: SiStrapi,
    name: "Strapi",
    link: "https://strapi.io/"
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
