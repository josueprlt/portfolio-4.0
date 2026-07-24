"use client"
import "./globals.css";
import localFont from "next/font/local";
import {useEffect, useState} from "react";

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
}: {
  children: React.ReactNode;
}) {
  const [colorMode, setColorMode] = useState("light");

  useEffect(() => {
    const savedColorMode = localStorage.getItem("color-mode") || "light";
    setColorMode(savedColorMode);
  }, []);
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${colorMode === "light" ? "bg-background" : "bg-foreground"} relative antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}