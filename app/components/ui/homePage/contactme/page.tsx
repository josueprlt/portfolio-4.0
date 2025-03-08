"use client"

import { useState } from "react";
import { LinkedinIcon, GithubIcon, GitlabIcon } from "@/app/components/ui/icons";
import { Climate_Crisis } from 'next/font/google';
import Title from "@/app/components/ui/title/page";
import ComponentDesktop from "./componentDesktop";
import ComponentMobile from "./componentMobile";

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
    display: 'swap',
});

export default function ContactMe() {
    const [arrayOfSocialMedias, setArrayOfSocialMedias] = useState([
        {
            name: 'Github',
            icon: <GithubIcon className="w-6 md:w-9" />,
            link: 'https://github.com/josueprlt',
            linkTooltip: 'josueprlt',
            linkProperty: '-top-3 md:-top-5',
            color: 'text-github',
            bg: 'bg-github',
        },
        {
            name: 'LinkedIn',
            icon: <LinkedinIcon className="w-6 md:w-9" />,
            link: 'https://www.linkedin.com/in/josu%C3%A9-perrault-2a663a265',
            linkTooltip: 'Josué Perrault',
            linkProperty: 'top-[65px]',
            color: 'text-linkedin',
            bg: 'bg-linkedin',
        },
        {
            name: 'Gitlab',
            icon: <GitlabIcon className="w-6 md:w-9" />,
            link: 'https://gitlab.com/josueprlt',
            linkTooltip: 'josueprlt',
            linkProperty: '-bottom-3 md:-bottom-5',
            color: 'text-gitlab',
            bg: 'bg-gitlab',
        },
    ]);

    return (
        <div className={`${ClimateCrisis.className} mt-20 md:mt-60`} id="contact">
            <Title className="text-center">Contactez moi</Title>

            <ComponentMobile data={arrayOfSocialMedias} />
            <ComponentDesktop data={arrayOfSocialMedias} />
        </div>
    );
}