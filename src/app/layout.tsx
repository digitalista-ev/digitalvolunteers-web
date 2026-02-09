import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Digital Volunteers",
  description: "Enabling through IT. We help to help.",
  metadataBase: new URL("https://digitalvolunteers.de"),
  alternates: { canonical: "https://digitalvolunteers.de" },
  icons: { icon: "/images/2022/05/cropped-dv-32x32.jpg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
