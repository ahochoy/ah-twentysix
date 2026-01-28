import type { Metadata } from "next";
import { Tomorrow } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const tomorrow = Tomorrow({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: "Andrew HoChoy",
  description: "Andrew HoChoy | Online Archive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${tomorrow.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
