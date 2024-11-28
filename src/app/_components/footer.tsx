import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import { RiInstagramLine } from "react-icons/ri";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800 relative">
    <Container>
      <div className="py-28 px-12 flex flex-col lg:flex-row items-center relative">
        
      


          <h3 className=" text-4xl lg:text-[2.5rem] font-bold tracking-tighter justify-center items-center leading-tight text-left lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 z-10">
            Siga o DSWA no Instagram
          </h3>
          <div className="  flex flex-col lg:flex-row justify-center items-center lg:pl-z lg:w-1/2">
          <RiInstagramLine className="w-12 h-12  text-primary-500 size-10 z-10" />

            <a
              href={`https://www.instagram.com/dswa_ufscar`}
              className="mx-3 font-bold hover:underline text-2xl z-10"
            >
              @dswa_ufscar
            </a>
          </div>
        </div>
        <Image 
        src="/assets/logo/DSWA.svg" 
        alt="DSWA" 
        width={1000} 
        height={1200} 
        style={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translate(-50%, 0%)',
          zIndex: 0,
        }} 
      />
      </Container>
    </footer>
  );
}

export default Footer;
