import Home from '@/app/components/ui/homePage/home/page';
import AboutMe from '@/app/components/ui/homePage/aboutme/page';
import MyWork from '@/app/components/ui/homePage/mywork/page';
import ContactMe from '@/app/components/ui/homePage/contactme/page';

export default function Page() {
  return (
    <>
      <Home />
      <main className='px-4 md:px-8'>
        <AboutMe />
        <MyWork />
        <ContactMe />
      </main>
    </>
  );
}
