import Home from '@/app/components/ui/filterPage/home/page';
import ResearchBar from '@/app/components/ui/filterPage/researchBar/page';
import Tags from '@/app/components/ui/filterPage/tags/page';

export default function Page() {
    return (
        <>
            <Home />
            <main className='px-4 md:px-8'>
                <ResearchBar placeholder='Recherchez...' />
                <Tags />
            </main>
        </>
    );
}
