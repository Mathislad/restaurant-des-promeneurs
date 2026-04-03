import { HeroSection } from "@/components/sections/hero";
import { CheminSection } from "@/components/sections/chemin";
import { SoulSection } from "@/components/sections/soul";
import { SignsSection } from "@/components/sections/signs";
import { RevelationSection } from "@/components/sections/revelation";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <CheminSection />
      <SoulSection />
      <SignsSection />
      <RevelationSection />
      <Footer />
    </main>
  );
}
