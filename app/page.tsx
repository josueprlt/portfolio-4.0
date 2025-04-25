"use client"
import { useState, useEffect } from "react";
import Home from '@/app/components/ui/homePage/home/page';
import AboutMe from '@/app/components/ui/homePage/aboutme/page';
import MyWork from '@/app/components/ui/homePage/mywork/page';
import ContactMe from '@/app/components/ui/homePage/contactme/page';

export default function Page() {
  const [colorMode, setColorMode] = useState("light");

  useEffect(() => {
    const savedColorMode = localStorage.getItem("color-mode") || "light";
    setColorMode(savedColorMode);
  }, [colorMode]);

  return (
    <>
      <Home />
      <main className={`px-4 md:px-8 ${colorMode === "light" && 'bg-background text-foreground'} ${colorMode === "dark" && 'bg-foreground text-background'}`}>
        <AboutMe />
        <MyWork />
        <ContactMe />
      </main>
    </>
  );
}
