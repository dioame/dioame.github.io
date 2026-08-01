"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { GA_ID, pageview } from "@/lib/analytics";

/**
 * Loads GA4 when NEXT_PUBLIC_GA_MEASUREMENT_ID is set.
 * Tracks route changes for the static portfolio + resume page.
 */
export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_ID) return;
    pageview(pathname);
  }, [pathname]);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { send_page_view: false, anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
