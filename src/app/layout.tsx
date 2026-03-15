import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script"
import { FB_PIXEL_ID } from "@/src/lib/pixel"
import FacebookPixel from '@/src/components/FacebookPixel';

export const metadata: Metadata = {
  title: "Manel Delivery",
  description: "Há 30 anos produzindo o melhor Cachorro Quente de Itaperuna.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}
              (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body>
        <FacebookPixel />
        {children}
      </body>
      <GoogleAnalytics gaId="G-H7ZJ87N35F" />
    </html>
  );
}
