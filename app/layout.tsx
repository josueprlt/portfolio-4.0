"use client"
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Footer from "@/app/components/ui/footer/page";
import Navbar from "@/app/components/ui/navBar/page";
import localFont from "next/font/local";
import "./globals.css";
import LoadingScreen from "@/app/components/ui/LoadingScreen/loadingScreen";
import { gsap } from "gsap";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [language, setLanguage] = useState("fr");
  const [colorMode, setColorMode] = useState("light");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("lang") || "fr";
    setLanguage(savedLanguage);

    const savedColorMode = localStorage.getItem("color-mode") || "light";
    setColorMode(savedColorMode);
  }, [colorMode]);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setIsScrolled(scrollTop > 75);
      setScrollWidth(scrollPercent);
      
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isScrolled) {
      if (sectionRef.current) {
        gsap.to(sectionRef.current, {
          top: 0,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    } else {
      if (sectionRef.current) {
        gsap.to(sectionRef.current, {
          top: 0,
          y: -68,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    }
  }, [isScrolled]);

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative antialiased ${colorMode === 'light' && 'bg-background'} ${colorMode === 'dark' && 'bg-foreground'}`}
      >
        {loading && <LoadingScreen onComplete={() => setLoading(false)} colorMode={colorMode} />}
        {!loading && (
          <>
            <section
              ref={sectionRef}
              className={`fixed -top-20 left-0 right-0 z-50 ${colorMode === "light" && 'bg-background'} ${colorMode === "dark" && 'bg-foreground'}`}
            >
              <span
                style={{ width: `${scrollWidth}%` }}
                className="block h-1 bg-gradient-to-r from-primary to-secondary"
              ></span>
              <div className="px-4 py-1 md:px-8 md:py-2">
                <Navbar lang={language} colorMode={colorMode} />
              </div>
            </section>
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}