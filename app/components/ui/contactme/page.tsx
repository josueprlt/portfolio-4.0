import { PhoneIcon, EmailIcon, WhatsappIcon, LinkedinIcon, InstagramIcon } from "@/app/components/ui/icons";
import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
    display: 'swap',
});

export default function ContactMe() {
    return (
        <div className={`${ClimateCrisis.className} pt-20 md:pt-60`}>
            <h2 className="text-xl text-center relative z-10 md:text-7xl">Contactez moi</h2>

            <section className={`${DelaGothicOne.className} block md:hidden relative flex justify-center items-end h-48 mt-14 md:mt-40 outline outline-2 -outline-offset-2 outline-foreground rounded-2xl`}>
                <div className="absolute top-0 left-0 flex justify-center items-center gap-6 bg-gradient-to-r from-primary to-secondary w-full h-24 rounded-2xl">
                    <PhoneIcon />
                    <p className="text-background">07 57 49 21 89</p>
                </div>
                <div className="flex justify-center h-24 items-center gap-6 rounded-2xl">
                    <EmailIcon />
                    <p className="text-foreground">josue.perrault@etu.unilim.fr</p>
                </div>
            </section>

            <section className={`${DelaGothicOne.className} block md:hidden relative flex justify-center items-end h-28 mt-14 md:mt-40 outline outline-2 -outline-offset-2 outline-foreground rounded-2xl before:absolute before:top-1/2 before:w-full before:h-0.5 before:bg-foreground`}>
                <div className="absolute -top-3 px-4 flex justify-center items-center gap-4 text-whatsapp bg-background">
                    <WhatsappIcon />
                    <p>WhatsApp</p>
                </div>
                <div className="absolute top-1/2 -translate-y-3 px-4 flex justify-center items-center gap-4 text-linkedin bg-background">
                    <LinkedinIcon />
                    <p>LinkedIn</p>
                </div>
                <div className="absolute -bottom-3 px-4 flex justify-center items-center gap-4 text-instagram bg-background">
                    <InstagramIcon />
                    <p>Instagram</p>
                </div>
            </section>


            <section className={`${DelaGothicOne.className} relative grid grid-cols-2 mt-14 md:mt-40 outline outline-2 -outline-offset-2 outline-foreground rounded-2xl text-3xl`}>
                <div className="flex items-center gap-6 rounded-2xl">
                    <EmailIcon className="w-11" />
                    <p className="text-foreground">josue.perrault@etu.unilim.fr</p>
                </div>
                <div className="relative bg-gradient-to-r from-primary to-secondary h-24 rounded-2xl">
                    <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center gap-6">
                        <PhoneIcon className="w-11" />
                        <p className="text-background">07 57 49 21 89</p>
                    </div>
                </div>
                {/* <div className="absolute -top-3 px-4 flex justify-center items-center gap-4 text-whatsapp bg-background text-3xl">
                    <WhatsappIcon />
                    <p>WhatsApp</p>
                </div>
                <div className="absolute top-1/2 -translate-y-3 px-4 flex justify-center items-center gap-4 text-linkedin bg-background text-3xl">
                    <LinkedinIcon />
                    <p>LinkedIn</p>
                </div>
                <div className="absolute -bottom-3 px-4 flex justify-center items-center gap-4 text-instagram bg-background text-3xl">
                    <InstagramIcon />
                    <p>Instagram</p>
                </div> */}
            </section>
        </div>
    );
}