import { ReactNode } from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "700", "800" ,"900"],
});

export const metadata: Metadata = {
  title: "Socio",
  description: "a web-3 based decentralized social media platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-primary-600 text-primary-200`}>
        {children}
      </body>
    </html>
  );
}
