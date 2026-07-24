import Home from '@/app/components/ui/projectPage/home/home';
import Tools from "@/app/components/ui/projectPage/tools/tools";
import Description from '@/app/components/ui/projectPage/description/description';
import ProjectBar from '@/app/components/ui/projectPage/projectBar/projectBar';
import Images from '@/app/components/ui/projectPage/images/images';
import projects from '@/app/data/projects.json';
import type { Metadata } from "next";
import ProjectClientWrapper from '@/app/components/ui/projectPage/ProjectClientWrapper';

interface Params {
    id: string;
}

// Fonction pour générer les métadonnées statiques
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
    const resolvedParams = await params;
    const project = projects.find((p) => p.id === parseInt(resolvedParams.id));

    if (!project) {
        return { title: "Projet non trouvé" };
    }

    return {
        title: `${project.title} - Projet`,
        description: project.description || `Découvrez le projet ${project.title} réalisé par Josué Perrault.`,
        openGraph: {
            title: `${project.title} | Portfolio Josué Perrault`,
            description: project.description,
            images: project.image && project.image.length > 0 ? [{ url: project.image[0] }] : [],
        },
    };
}

// Fonction pour générer les paramètres statiques
export async function generateStaticParams(): Promise<Params[]> {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}

export default async function Page({ params }: { params: Promise<Params> }) {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const project = projects.find((project) => project.id === parseInt(id));

    if (!project) {
        return <div>Projet introuvable</div>;
    }

    return (
        <ProjectClientWrapper>
            <Home project={project} />
            <ProjectBar id={id} projects={projects} />

            <main className="px-4 md:px-8">
                <Tools project={project} />
                <Description project={project} />
                <Images project={project} />
            </main>
        </ProjectClientWrapper>
    );
}