"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from 'next/navigation';

const ComponentWithSearchParams = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const openInBrowser = searchParams.get('openInBrowser');
    if (openInBrowser === 'true') {
      // Crée une nouvelle URL sans le paramètre `openInBrowser`
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.delete('openInBrowser');
      const newUrl = `${window.location.origin}${pathname}${newSearchParams.toString() ? `?${newSearchParams.toString()}` : ''}`;

      // Ouvre la nouvelle URL dans un nouvel onglet/fenêtre
      window.open(newUrl, '_blank');
    }
  }, [pathname, searchParams]);

  return null;
};

export default ComponentWithSearchParams;
