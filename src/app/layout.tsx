import "./globals.css";
import type { Metadata } from "next";
import Providers from "./Providers";
import { Inter } from "next/font/google";
import { Footer, Header } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog do Lucas Lira",
  description: "Conteúdos de tecnologia e desenvolvimento web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
