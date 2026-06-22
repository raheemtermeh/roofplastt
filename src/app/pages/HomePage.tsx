import { HeroSection } from '../components/HeroSection';
import { ProductIntro } from '../components/ProductIntro';
import { Benefits } from '../components/Benefits';
import { Applications } from '../components/Applications';
import { WhyUs } from '../components/WhyUs';
import { Clients } from '../components/Clients';
import { ProjectsSlider } from '../components/ProjectsSlider';
import { CTA } from '../components/CTA';

export function HomePage() {
  return (
    <div className="pt-20">
      <HeroSection />
      <ProductIntro />
      <Benefits />
      <Applications />
      <WhyUs />
      <ProjectsSlider />
      <Clients />
      <CTA />
    </div>
  );
}
