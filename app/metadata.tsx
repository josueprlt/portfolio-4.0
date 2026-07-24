import type {Metadata} from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://portfolio-josue.com"),
    title: {
        default: "Josué Perrault / Développeur Web",
        template: "%s | Josué Perrault",
    },
    icons: {
        icon: "/img/logo.png",
        shortcut: "/img/logo.png",
        apple: "/img/logo.png",
    },
    description:
        "Portfolio de Josué Perrault, étudiant en Master Ingénierie du Web (ESGI Rennes) et Développeur Web spécialisé en Next.js, React et TailwindCSS.",
    keywords: [
        "Josué Perrault",
        "Développeur Web",
        "Ingénieur Web",
        "Portfolio Développeur",
        "ESGI Rennes",
        "React",
        "Next.js",
        "TailwindCSS",
        "Front-End",
        "Back-End",
    ],
    authors: [{name: "Josué Perrault"}],
    creator: "Josué Perrault",
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: "https://portfolio-josue.com",
        title: "Josué Perrault | Développeur Web",
        description:
            "Découvrez mes projets web, mes compétences en front-end & back-end et mon parcours professionnel.",
        siteName: "Portfolio Josué Perrault",
        images: [
            {
                url: "/img/logo.png",
                width: 491,
                height: 491,
                alt: "Josué Perrault - Développeur Web",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Josué Perrault | Développeur Web",
        description:
            "Découvrez mes projets web et mon parcours professionnel.",
        images: ["/img/logo.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};