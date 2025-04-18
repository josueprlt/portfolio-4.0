"use client"
import { useState, useEffect } from "react";
import Home from '@/app/components/ui/homePage/home/page';
import AboutMe from '@/app/components/ui/homePage/aboutme/page';
import MyWork from '@/app/components/ui/homePage/mywork/page';
import ContactMe from '@/app/components/ui/homePage/contactme/page';

export default function Page() {
  const [language, setLanguage] = useState("fr");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("lang") || "fr";
    setLanguage(savedLanguage);
  }, []);
  return (
    <>
      <Home lang={language} />
      <main className='px-4 md:px-8'>
        <AboutMe lang={language} />
        <MyWork lang={language} />
        <ContactMe lang={language} />
      </main>
    </>
  );
}
