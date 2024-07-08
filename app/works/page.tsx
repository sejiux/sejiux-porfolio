import WorksPage from "@/components/Works";
import { worksData } from "@/data/works";
import { Suspense } from "react";

export default function Works () {
  return (
    <Suspense>
      <WorksPage works={worksData} />
    </Suspense>
  );
}
