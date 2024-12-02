import HeaderPage from "@/components/Header";
import About from "@/components/About";
import Price from "@/components/Price";
import Services from "@/components/Services";
import Tools from "@/components/Tools";
import { Suspense } from "react";
import Benefit from "@/components/Benefit";
import WhyMe from "@/components/WhyMe";
import CaseStudy from "@/components/CaseStudy";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
/* import Processus from "@/components/Processus";
import Blog from "@/components/Blog"; */

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "sejiux",
    "url": "https://sejiux.com",
    "description": "Je crée des boutiques en ligne headless sur mesure, combinant design unique et performance.",
  };
  return (
    <Suspense>
      <JsonLd data={jsonLd} />
      <div className="space-y-24 lg:space-y-44">
        <HeaderPage />
        <Services />
        <Tools />
        <Benefit />
        {/* <Processus /> */}
        <CaseStudy />
        <WhyMe />
        <Price />
        <About />
        {/* <Blog /> */}
        <FAQ />
        <Footer />
      </div>
    </Suspense>
  );
}
