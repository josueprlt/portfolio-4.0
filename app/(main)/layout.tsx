"use client"
import { useState, useEffect, useRef } from "react";
import Footer from "@/app/components/ui/footer/page";
import Navbar from "@/app/components/ui/navBar/page";
import LoadingScreen from "@/app/components/ui/LoadingScreen/loadingScreen";
import { gsap } from "gsap";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [colorMode, setColorMode] = useState("light");

  useEffect(() => {
    const savedColorMode = localStorage.getItem("color-mode") || "light";
    setColorMode(savedColorMode);
  }, []); // Empty dependency array to run only once on mount

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

  // Pass colorMode to the body via a data attribute or a CSS variable in the root layout
  useEffect(() => {
    document.body.dataset.colorMode = colorMode;
  }, [colorMode]);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} colorMode={colorMode} />}
      {!loading && (
        <>
          <section
            ref={sectionRef}
            className={`fixed -top-20 left-0 right-0 z-50 ${colorMode === "light" ? 'bg-background' : 'bg-foreground'}`}
          >
            <span
              style={{ width: `${scrollWidth}%` }}
              className="block h-1 bg-gradient-to-r from-primary to-secondary"
            ></span>
            <div className="px-4 py-1 md:px-8 md:py-2">
              <Navbar />
            </div>
          </section>
          {children}
          <Footer />
        </>
      )}
    </>
  );
}