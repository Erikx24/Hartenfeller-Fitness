import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

// Font-Imports
const outfit = Outfit({
  subsets: ["latin"],
});

// Metadata
export const metadata: Metadata = {
  title: "Personal Trainer Hanau | Hartenfeller Fitness",
  description: "Gesund und (wieder) Fit werden! - Personal Trainer aus Hanau: Individuelles Training für Ihre Fitnessziele. Ob Muskelaufbau, Gewichtsreduktion oder Rehabilitation – starten Sie jetzt mit einem maßgeschneiderten Fitnessprogramm!",
  icons: '/favicon.png',
  keywords: 
  [ "Personal Trainer Hanau",
  "individuelles Training Hanau",
  "Fitnessziele erreichen Hanau",
  "Muskelaufbau Hanau",
  "Gewichtsreduktion Hanau",
  "Rehabilitationstraining Hanau",
  "Fitnessprogramm Hanau",
  "Personal Training Hanau",
  "Personal Coach Hanau"]
  
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
