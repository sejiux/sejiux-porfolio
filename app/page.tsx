import ComponentWithSearchParams from "@/components/ComponentWithSearchParams";
import HeaderPage from "@/components/Header";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <ComponentWithSearchParams />
      <HeaderPage />
    </Suspense>
  );
}
