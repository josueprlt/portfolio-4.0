"use client"
import { useState } from "react";
import Head from "next/head";
import Footer from "@/app/components/ui/footer/page";
import localFont from "next/font/local";
import "./globals.css";
import LoadingScreen from "@/app/components/ui/LoadingScreen/page";
import { metadata } from "./metada";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
        {!loading && children}
        {!loading && <Footer />}
      </body>
    </html>
  );
}