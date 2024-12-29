import { Climate_Crisis } from 'next/font/google';
import { PhoneIcon, EmailIcon, LinkIcon, LocationIcon } from '@/app/components/ui/icons';
import Image from 'next/image';

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
    display: 'swap',
});

export default function BusinessCard() {
    return (
        <div className={`${ClimateCrisis.className} pt-20 md:pt-60`}>

            <section className="max-w-96 mx-auto flex items-center flex-col gap-10 pt-10 bg-foreground rounded-lg shadow-lg overflow-hidden">
                <div className='flex items-center flex-col gap-2'>
                    <p className='text-2xl text-background'>Perrault Josué</p>
                    <p className='text-xl text-secondary'>Développeur Web</p>
                </div>

                <div className='w-48 h-48 flex justify-center items-center bg-background rounded-full overflow-hidden'>
                    <Image src="/img/profil.png" alt="Image de profil" width={182} height={245} />
                </div>

                <div className='flex items-center flex-col gap-2'>
                    <PhoneIcon className='w-6 h-6 text-primary' />
                    <EmailIcon className='w-6 h-6 text-primary' />
                    <LinkIcon className='w-6 h-6' />
                    <LocationIcon className='w-6 h-6' />
                </div>
                
                <span className='block pt-10 w-full h-5 bg-gradient-to-r from-primary to-secondary'></span>
            </section>
        </div>
    );
}