import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
      <GoogleAnalytics gaId="G-H7ZJ87N35F" />
    </html>
  );
}
