import Home from '@/app/components/ui/profilPage/home/page';
import AboutMe from "@/app/components/ui/profilPage/aboutme/page";
import MyJourney from "@/app/components/ui/profilPage/myjourney/page";
import MyCompetences from "@/app/components/ui/profilPage/mycompetences/page";
import BusinessCard from "@/app/components/ui/profilPage/businesscard/page";

export default function Page() {
    return (
        <>
            <Home />
            <main className='px-4 md:px-8'>
                <AboutMe />
                <MyJourney />
                <MyCompetences />
                <BusinessCard />
            </main>
        </>
    );
}
