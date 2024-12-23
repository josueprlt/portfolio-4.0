import Home from '@/app/components/ui/projectPage/home/page';
import Tools from "@/app/components/ui/projectPage/tools/page";

export default function Page() {
    return (
        <div className='bg-background'>
            <Home />
            <main className='px-4 md:px-8'>
                <Tools />
            </main>
        </div>
    );
}
