"use client";

import { useEffect, useState } from "react";
import { LinkedinIcon, GithubIcon, GitlabIcon } from "@/app/components/ui/icons";
import { Climate_Crisis } from "next/font/google";
import Title from "@/app/components/ui/title/title";
import ComponentDesktop from "./componentDesktop";
import ComponentMobile from "./componentMobile";

const ClimateCrisis = Climate_Crisis({
  subsets: ["latin"],
  display: "swap",
});

interface Social {
  name: string;
  icon: React.ReactNode;
  link: string;
  linkTooltip: string;
  linkProperty: string;
  color: string;
  colorDark?: string;
  bg: string;
}

interface ContactMeProps {
  lang: string;
  colorMode: string;
}

const ContactMe: React.FC<ContactMeProps> = ({ lang, colorMode }) => {
  const [arrayOfSocialMedias, setArrayOfSocialMedias] = useState<Social[]>([
    {
      name: "Github",
      icon: <GithubIcon className="w-6 md:w-9" fill={colorMode === "dark" ? "#FEEFDD" : "#262330"} />,
      link: "https://github.com/josueprlt",
      linkTooltip: "josueprlt",
      linkProperty: "-top-3 md:-top-5",
      color: "text-github",
      colorDark: "text-background",
      bg: "bg-github",
    },
    {
      name: "LinkedIn",
      icon: <LinkedinIcon className="w-6 md:w-9" />,
      link: "https://www.linkedin.com/in/josu%C3%A9-perrault-2a663a265",
      linkTooltip: "Josué Perrault",
      linkProperty: "top-[65px]",
      color: "text-linkedin",
      bg: "bg-linkedin",
    },
    {
      name: "Gitlab",
      icon: <GitlabIcon className="w-6 md:w-9" />,
      link: "https://gitlab.com/josueprlt",
      linkTooltip: "josueprlt",
      linkProperty: "-bottom-3 md:-bottom-5",
      color: "text-gitlab",
      bg: "bg-gitlab",
    },
  ]);

  useEffect(() => {
    // Mettre à jour les icônes lorsque colorMode change
    setArrayOfSocialMedias((prev) =>
      prev.map((social) => {
        if (social.name === "Github") {
          return {
            ...social,
            icon: <GithubIcon className="w-6 md:w-9" fill={colorMode === "dark" ? "#FEEFDD" : "#181717"} />,
          };
        }
        return social;
      })
    );
  }, [colorMode]);

  return (
    <div className={`${ClimateCrisis.className} mt-20 md:mt-60 pb-20 md:pb-60`} id="contact">
      {lang === "fr" && <Title className="text-center">Contactez moi</Title>}
      {lang === "en" && <Title className="text-center">Contact me</Title>}

      <ComponentMobile data={arrayOfSocialMedias} colorMode={colorMode} />
      <ComponentDesktop data={arrayOfSocialMedias} colorMode={colorMode} />
    </div>
  );
};

export default ContactMe;