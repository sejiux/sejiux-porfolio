import Footer from "@/components/Footer";
import LegalPage from "@/components/LegalPage";
import { Suspense } from "react";
import { Metadata } from 'next';

 type Props = {
  params: Promise<{ handle: string }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const title = params.handle.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: title,
    description: `Informations légales - ${title} pour sejiux, créateur de boutiques headless sur mesure.`,
    alternates: {
      canonical: `https://www.sejiux.com/legals/${params.handle}`,
    },
  };
}


export default async function Legals (props: Props) {
  const params = await props.params;
  return (
    <Suspense>
      <div className="space-y-24 pt-24 lg:space-y-44 whitespace-pre-line">
        <LegalPage handle={params.handle} />
        <Footer />
      </div>
    </Suspense>
  );
}
