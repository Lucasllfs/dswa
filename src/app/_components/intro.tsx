import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-baseline md:justify-between mt-16 mb-8 md:mb-8">
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
  );
}
