import { Hero } from "@/components/Hero";
import { AboutMini } from "@/components/AboutMini";
import { LogoCarousel } from "@/components/LogoCarousel";
import { FeaturedWork } from "@/components/FeaturedWork";
import { ImpactQuote } from "@/components/ImpactQuote";
import { Curiosities } from "@/components/Curiosities";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* 1. Welcome */}
      <Hero />
      {/* 2. Mini sobre mim + link saber mais */}
      <AboutMini />
      {/* 3. Carrossel de logos */}
      <LogoCarousel />
      {/* 4. 3 últimos trabalhos */}
      <FeaturedWork />
      {/* 5. Frase de impacto */}
      <ImpactQuote />
      {/* 6. Curiosidades */}
      <Curiosities />
      {/* 7. Falar comigo */}
      <Contact />
    </>
  );
}
