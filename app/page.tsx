import HeaderPage from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Tools from "@/components/Tools";
import { Suspense } from "react";
import Benefit from "@/components/Benefit";
import WhyMe from "@/components/WhyMe";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { JsonLd } from 'react-schemaorg';
import Processus from "@/components/Processus";
import Blog from "@/components/Blog";

/* import Processus from "@/components/Processus";
import Blog from "@/components/Blog"; */

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
