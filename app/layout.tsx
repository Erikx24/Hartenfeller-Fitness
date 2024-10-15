import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

// Font-Imports
const outfit = Outfit({
  subsets: ["latin"],
});

// Metadata
export const metadata: Metadata = {
  title: "Hartenfeller Fitness",
  description: "Gesund und (wieder) Fit werden!",
  icons: '/favicon.png',
};

// RootLayout-Komponente
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <meta name="theme-color" content="#252b27" />
        <meta name="color-scheme" content="light" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="icon" content="/favicon.png"/>
      </head>
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  );
}
