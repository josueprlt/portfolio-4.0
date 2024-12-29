import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';
import { LogoIcon, PhoneIcon, EmailIcon, LinkIcon, LocationIcon } from '@/app/components/ui/icons';
import Image from 'next/image';

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
    display: 'swap',
});

export default function BusinessCard() {
    return (
        <div className={`${ClimateCrisis.className} pt-20 md:pt-60`}>

            <section className="max-w-96 mx-auto flex items-center flex-col gap-10 pt-10 bg-foreground rounded-lg shadow-lg overflow-hidden md:hidden">
                <div className='flex items-center flex-col gap-2'>
                    <p className='text-2xl text-background'>PERRAULT Josué</p>
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

                <span className='block mt-10 w-full h-5 bg-gradient-to-r from-primary to-secondary'></span>
            </section>

            <section className='relative hidden md:flex w-full pt-10 flex-col gap-10 bg-foreground rounded-xl shadow-lg overflow-hidden max-w-[994px] mx-auto'>
                <div className='flex justify-between w-full px-10'>
                    <div>
                        <p className='text-2xl text-background mb-5'>PERRAULT Josué</p>
                        <p className='text-xl text-secondary'>Développeur Web</p>
                    </div>
                    <div>
                        <LogoIcon className='text-background' />
                    </div>
                </div>

                <div className='flex flex-row justify-between lg:justify-around items-center px-10 py-5'>
                    <div className='w-56 h-56 flex justify-center items-center bg-background rounded-full overflow-hidden'>
                        <Image src="/img/profil.png" alt="Image de profil" width={182} height={245} />
                    </div>
                    <ul className={`${DelaGothicOne.className} flex items-start flex-col gap-6 text-background text-xl`}>
                        <li className='flex justify-center items-center flex-row gap-2'>
                            <PhoneIcon className='w-9 h-9 text-primary' />
                            <p>07 57 49 21 89</p>
                        </li>
                        <li className='flex justify-center items-center flex-row gap-2'>
                            <EmailIcon className='w-9 h-9 text-primary' />
                            <p>portfolio-josue.fr</p>
                        </li>
                        <li className='flex justify-center items-center flex-row gap-2'>
                            <LinkIcon className='w-9 h-9' />
                            <p>josueperrault@etu.unilim.fr</p>
                        </li>
                        <li className='flex justify-center items-center flex-row gap-2'>
                            <LocationIcon className='w-9 h-9' />
                            <p>185 avenue Albert Thomas</p>
                        </li>
                    </ul>
                </div>

                <span className='block w-full h-5 bg-gradient-to-r from-primary to-secondary'></span>
                <Image src="/img/effect.png" alt="Description de l'image" width={500} height={500} className='w-full h-full absolute top-0 left-0 opacity-25 z-10' />
            </section>
        </div>
    );
}