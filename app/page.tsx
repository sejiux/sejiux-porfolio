import About from "@/components/About";
import CardBenefit from "@/components/card/CardBenefit";
import HeaderPage from "@/components/Header";
import Processus from "@/components/Processus";
import Services from "@/components/Services";
import Tools from "@/components/Tools";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <div className="space-y-10 lg:space-y-52">
        <HeaderPage />
        <Services />
        <Processus />
        <Tools />
        <About />
        <CardBenefit />
        <p className="py-20 text-lg flex justify-center">Site en cours de construction...</p>
      </div>
    </Suspense>
  );
}
