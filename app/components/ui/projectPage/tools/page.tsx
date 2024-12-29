import { HtmlIcon, MuiIcon, ReactIcon, BootstrapIcon } from '@/app/components/ui/icons';
import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
});

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
});

export default function Tools() {
    return (
        <div className="pt-10 md:pt-30">
            <h2 className={`${ClimateCrisis.className} text-xl md:text-7xl`}>Outils</h2>
            
            <section className={`${DelaGothicOne.className} mt-5 flex flex-wrap gap-4 md:mt-10`}>
                <div className='w-max flex items-center gap-2 outline p-2 md:p-4 rounded-lg'>
                    <HtmlIcon className='w-8 h-8' />
                </div>
                <div className='w-max flex items-center gap-2 outline p-2 md:p-4 rounded-lg'>
                    <MuiIcon className='w-8 h-8' />
                    <p className='text-sm md:text-lg text-materialui'>Material UI</p>
                </div>
                <div className='w-max flex items-center gap-2 outline p-2 md:p-4 rounded-lg'>
                    <ReactIcon className='w-8 h-8' />
                </div>
                <div className='w-max flex items-center gap-2 outline p-2 md:p-4 rounded-lg'>
                    <BootstrapIcon className='w-8 h-8' />
                </div>
            </section>
        </div>
    );
}