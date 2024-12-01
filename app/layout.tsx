import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-[calc(100vh-74px)] ${inter.className}`}>
        <Header />
        <main className="bg-gray-100">{children}</main>

        
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
          }}
        />


        
      </body>
    </html>
  );
}
