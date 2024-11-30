import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import HeaderTop from "@/components/HeaderTop";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bio Spray Plus",
  description: "Bio Spray Plus Colostrum Liquid",
  icons: {
    icon: [
      '/favicon.ico?v=1',
    ],
    apple: [
      'favicon.ico?v=4',
    ],
    shortcut: [
      'favicon.ico',
    ]
    },
    keywords: [
          "Bio Spray Plus, Bio Spray, Bio Spray Plus Bangladesh"
    ] 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderTop />
        <Navbar />     
        {children}
        <Footer />
        </body>
    </html>
  );
}
