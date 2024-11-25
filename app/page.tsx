import HeaderPage from "@/components/Header";
import About from "@/components/About";
import Price from "@/components/Price";
import Processus from "@/components/Processus";
import Services from "@/components/Services";
import Tools from "@/components/Tools";
import { Suspense } from "react";
import Benefit from "@/components/Benefit";
import CardCTA from "@/components/card/CardCTA";
import WhyMe from "@/components/WhyMe";
import CaseStudy from "@/components/CaseStudy";

export default function Home() {
  return (
    <Suspense>
      <div className="space-y-14 lg:space-y-52">
        <HeaderPage />
        <Services />
        <Benefit />
        <Tools />
        <Processus />
        <CaseStudy />
        <CardCTA />
        <Price />
        <WhyMe />
        <About />
        <p className="py-20 text-lg flex justify-center">Site en cours de construction...</p>
      </div>
    </Suspense>
  );
}
