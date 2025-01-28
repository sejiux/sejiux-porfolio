import { lazy, Suspense } from "react";
import { JsonLd } from 'react-schemaorg';
import dynamic from "next/dynamic";

/* export const runtime = 'edge'; */
const Header = dynamic(() => import("@/components/Header"));
const Services = lazy(() => import("@/components/Services"));
const Tools = lazy(() => import("@/components/Tools"));
const Benefit = lazy(() => import("@/components/Benefit"));
const Processus = lazy(() => import("@/components/Processus"));
const Price = lazy(() => import("@/components/Price"));
const About = lazy(() => import("@/components/About"));
const WhyMe = lazy(() => import("@/components/WhyMe"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Blog = lazy(() => import("@/components/Blog"));
const Footer = lazy(() => import("@/components/Footer"));

export default function Home() {
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
          "https://linkedin.com/company/sejiux",
          "https://medium.com/@selimbaouz",
          "https://pinterest.com/sejiux",
          "https://facebook.com/im.sejiux",
        ]
      }}
    /></>;
  
  return (
    <div className="space-y-24 lg:space-y-44">
      <Suspense>
        <Header />
      </Suspense>
      <Suspense>
        <Services />
      </Suspense>
      <Suspense>
        <Tools />
      </Suspense>
      <Suspense>
        <Benefit />
      </Suspense>
      <Suspense>
        <Processus />
      </Suspense>
      <Suspense>
        <Price />
      </Suspense>
      <Suspense>
        <About />
      </Suspense>
      <Suspense>
        <WhyMe />
      </Suspense>
      <Suspense>
        <FAQ />
      </Suspense>
      <Suspense>
        <Blog />
      </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
}
