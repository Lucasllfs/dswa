import { CMS_NAME } from "@/lib/constants";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import { RiHomeLine } from "react-icons/ri";
import { FaRegMap } from "react-icons/fa";
import { MdOutlineLeaderboard } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";

export function Intro() {

  //items: { title: string; icon: React.ReactNode; href: string }[];
  const items = [
    { title: "Home", icon: <RiHomeLine size={24} />, href: "/" },
    { title: "Roadmap", icon: <FaRegMap size={24} />, href: "/roadmap" },
    { title: "Leaderboard", icon: <MdOutlineLeaderboard size={24} />, href: "/leaderboard" },
    { title: "Inscrições", icon: <IoPersonAddOutline size={24} />, href: "/inscricoes" },
    // { title: "Blog", icon: <IconLayoutNavbarCollapse size={24} />, href: "/blog" },
    // { title: "Contact", icon: <IconLayoutNavbarCollapse size={24} />, href: "/contact" },
  ];


  return (
    <>
        <section className="flex-col md:flex-row flex items-baseline md:justify-between mt-8 mb-8 md:mb-8">
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
  <img
    src="/assets/logo/logoPreto.svg"
    alt="Descrição da imagem"
    className="w-16 h-auto"
  />
</h4>

      <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight md:pr-8">
        DSWA
      </h1>
      
    </section>

    <FloatingDock
  items={items}
  desktopClassName="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50"
  mobileClassName="position: fixed; right: 0; bottom: 0; z-50"
/>    
</>



  );
}
