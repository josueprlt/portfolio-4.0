import Home from '@/app/components/ui/projectPage/home/home';
import Tools from "@/app/components/ui/projectPage/tools/tools";
import Description from '@/app/components/ui/projectPage/description/description';
import ProjectBar from '@/app/components/ui/projectPage/projectBar/projectBar';
import Images from '@/app/components/ui/projectPage/images/images';
import projects from '@/app/data/projects.json';

interface Params {
    id: string;
}

// Fonction pour générer les paramètres statiques
export async function generateStaticParams(): Promise<Params[]> {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}

export default async function Page({ params }: { params: Promise<Params> }) {
    const resolvedParams = await params; // Résolution de la promesse
    const { id } = resolvedParams;
    const project = projects.find((project) => project.id === parseInt(id));

    if (!project) {
        return <div>Projet introuvable</div>;
    }

    return (
        <>
            <Home project={project} />
            <ProjectBar id={id} projects={projects} />

            <main className="px-4 md:px-8">
                <Tools project={project} />
                <Description project={project} />
                <Images project={project} />
            </main>
        </>
    );
}