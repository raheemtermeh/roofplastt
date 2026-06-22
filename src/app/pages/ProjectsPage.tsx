import { ProjectsHero } from '../components/ProjectsHero';
import { ProjectStats } from '../components/ProjectStats';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { BeforeAfter } from '../components/BeforeAfter';
import { ProjectsCTA } from '../components/ProjectsCTA';

export function ProjectsPage() {
  return (
    <div className="pt-20">
      <ProjectsHero />
      <ProjectStats />
      <ProjectsGrid />
      <BeforeAfter />
      <ProjectsCTA />
    </div>
  );
}
