import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Banner from "@/go/_components/Banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bikin Twibbon",
  description: "Mari rayakan HUT RI ke-79 dengan semangat Nusantara Baru Indonesia Maju. Buat Twibbon kamu sekarang dan tunjukkan cinta untuk tanah air!",
  generator: 'Next.js',
  manifest: 'https://agamriyandana.my.id/manifest.json',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: "agam, agamriyandana, my.id, domain Indonesia, Jember, pandi, portofolio, domain nusantara, digital, website, internasional, asia, eropa",
  authors: [{ name: 'Agam' }, { name: 'Riyandana', url: 'https://agamriyandana.my.id' }],
  creator: 'Agam Riyandana',
  publisher: 'Agam Riyandana',
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Banner />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
