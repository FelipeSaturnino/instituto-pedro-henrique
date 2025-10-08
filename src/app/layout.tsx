import "./globals.css";
import { League_Spartan, Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

<meta name="apple-mobile-web-app-title" content="Instituto Pedro Henrique" />

const league = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-league",
});

const open = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open",
});

export const metadata = {
  title: "Instituto Pedro Henrique de Direitos Humanos",
  description: "Ética, Fé Cristã e Solidariedade",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${league.variable} ${open.variable}`}>
      <body className="font-body bg-branco text-preto">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
