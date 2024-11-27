import HeaderPage from "@/components/Header";
import About from "@/components/About";
import Price from "@/components/Price";
import Processus from "@/components/Processus";
import Services from "@/components/Services";
import Tools from "@/components/Tools";
import { Suspense } from "react";
import Benefit from "@/components/Benefit";
import WhyMe from "@/components/WhyMe";
import CaseStudy from "@/components/CaseStudy";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Suspense>
      <div className="space-y-24 lg:space-y-44">
        <HeaderPage />
        <Services />
        <Tools />
        <Benefit />
        <Processus />
        <CaseStudy />
        <WhyMe />
        <Price />
        <About />
        <Blog />
        <FAQ />
        <Footer />
      </div>
    </Suspense>
  );
}
