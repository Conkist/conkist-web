import type { Metadata } from "next";
import { Bakbak_One, Roboto } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const bakbakOne = Bakbak_One({
  weight: "400",
  variable: "--font-bakbak-one",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conkist - Jogos Mobile Inovadores",
  description: "Desenvolvemos jogos mobile inovadores que conectam pessoas e criam experiências únicas.",
  icons: {
    icon: '/logo-round.svg',
    shortcut: '/logo-round.svg',
    apple: '/logo-round.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${bakbakOne.variable} ${roboto.variable} antialiased`}
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
