import HeaderPage from "@/components/Header";
/* import Services from "@/components/Services"; */
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <div className="lg:space-y-64">
        <HeaderPage />
        {/* <Services /> */}
      </div>
    </Suspense>
  );
}
