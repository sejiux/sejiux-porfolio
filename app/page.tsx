"use client";
import HeaderPage from "@/components/Header";
import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const openInBrowser = searchParams.get('openInBrowser');
    if (openInBrowser === 'true') {
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.delete('openInBrowser');
      const newUrl = `${window.location.origin}${pathname}${newSearchParams.toString() ? `?${newSearchParams.toString()}` : ''}`;

      window.open(newUrl, '_blank');
    }
  }, [pathname, searchParams]);

  return (
    <Suspense>
      <HeaderPage />
    </Suspense>
  );
}
