import { Suspense } from "react";
import { JsonLd } from 'react-schemaorg';
import dynamic from 'next/dynamic';
import HeaderPage from "@/components/Header";
/* import Processus from "@/components/Processus";
import Blog from "@/components/Blog"; */

export const runtime = 'edge';

export default function Home() {
  const Services = dynamic(() => import("@/components/Services"));
  const Tools = dynamic(() => import("@/components/Tools"));
  const Benefit = dynamic(() => import("@/components/Benefit"));
  const Processus = dynamic(() => import("@/components/Processus"));
  const About = dynamic(() => import("@/components/About"));
  const WhyMe = dynamic(() => import("@/components/WhyMe"));
  const FAQ = dynamic(() => import("@/components/FAQ"));
  const Blog = dynamic(() => import("@/components/Blog"));
  const Footer = dynamic(() => import("@/components/Footer"));
  <>
    <JsonLd
      item={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "sejiux",
        url: "https://sejiux.com",
        logo: "https://sejiux.com/images/sejiux.webp",
        description: "Je crée des boutiques en ligne headless sur mesure, combinant design unique et performance.",
        sameAs: [
          "https://twitter.com/sejiux",
          "https://github.com/sejiux",
          "https://linkedin.com/in/sejiux",
          "https://medium.com/@sejiux",
          "https://pinterest.com/sejiux",
          "https://facebook.com/im.sejiux",
          "https://www.facebook.com/sejiuxstudio/",
          "https://contra.com/im_sejiux",
        ]
      }}
    /></>;
  return (
    <Suspense>
      <div className="space-y-24 lg:space-y-44">
        <HeaderPage />
        <Services />
        <Tools />
        <Benefit />
        <Processus />
        {/* <CaseStudy /> */}
        <About />
        <WhyMe />
        {/* <Price /> */}
        <FAQ />
        <Blog />
        <Footer />
      </div>
    </Suspense>
  );
}
