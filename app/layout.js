import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './ui/navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce NextJS",
  description: "Bienvenidos al Ecommerce",
  keywords: ["Ecommerce","Celulares","Smartwatches","Memorias","Auriculares"],
  openGraph: {
    title: "Ecommerce NextJS",
    description: "Bienvenidos al Ecommerce",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased h-screen flex flex-col`}>

        <Navbar />
        {children}
        <footer className="text-center p-4 bg-gray-100 border-t border-gray-300">
          {new Date().getFullYear()} Copyright NextJS Ecommerce
        </footer>              
      </body>
    </html>
  );
}
