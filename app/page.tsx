import HeaderPage from "@/components/Header";
import About from "@/components/About";
/* import Price from "@/components/Price"; */
import Processus from "@/components/Processus";
import Services from "@/components/Services";
import Tools from "@/components/Tools";
import { Suspense } from "react";
import Benefit from "@/components/Benefit";

export default function Home() {
  return (
    <Suspense>
      <div className="space-y-10 lg:space-y-52">
        <HeaderPage />
        <Services />
        <Benefit />
        <Tools />
        <Processus />
        {/* <Price /> */}
        <About />
        <p className="py-20 text-lg flex justify-center">Site en cours de construction...</p>
      </div>
    </Suspense>
  );
}
