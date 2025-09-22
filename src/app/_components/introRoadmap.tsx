import { CMS_NAME } from "@/lib/constants";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import { RiHomeLine } from "react-icons/ri";
import { FaRegMap } from "react-icons/fa";
import { MdOutlineLeaderboard } from "react-icons/md";

export function IntroRoadmap() {

  //items: { title: string; icon: React.ReactNode; href: string }[];
  const items = [
    { title: "Home", icon: <RiHomeLine size={24} />, href: "/" },
    { title: "Roadmap", icon: <FaRegMap      size={24} />, href: "/roadmap" },
        { title: "Leaderboard", icon: <MdOutlineLeaderboard      size={24} />, href: "/leaderboard" },
    
    // { title: "Blog", icon: <IconLayoutNavbarCollapse size={24} />, href: "/blog" },
    // { title: "Contact", icon: <IconLayoutNavbarCollapse size={24} />, href: "/contact" },
  ];


  return (
    <>
        <section className="flex-col md:flex-row flex items-baseline md:justify-between mt-8 mb-2 md:mb-2">
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
  <img
    src="/assets/logo/logoPreto.svg"
    alt="Descrição da imagem"
    className="w-16 h-auto"
  />
</h4>

      <div className="md:pr-8">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight text-right">
          Roadmap
        </h1>
        <div className="mt-2 md:mt-4 text-right">
         
          <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
O roadmap DSWA é um guia de estudos 100% gratuito, estruturado em fases para facilitar o aprendizado. Ele começa com fundamentos matemáticos (álgebra linear, cálculo e probabilidade), passa por programação em Python e análise de dados, e segue para introdução ao Machine Learning. Todo o material é composto por cursos, vídeos e práticas selecionadas para quem deseja construir uma base sólida e avançar gradualmente até aplicações em inteligência artificial e ciência de dados.          </p>
        </div>
      </div>
      
    </section>

    <FloatingDock
  items={items}
  desktopClassName="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50"
  mobileClassName="position: fixed; right: 0; bottom: 0; z-50"
/>    
</>



  );
}
