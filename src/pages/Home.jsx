import Hero from '../components/Hero';
import About from '../components/About';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import GitHubActivity from '../components/GitHubActivity';
import AchievementsSection from '../components/AchievementsSection';
import CertificatesSection from '../components/CertificatesSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <GitHubActivity />
      <AchievementsSection />
      <CertificatesSection />
      <ContactSection />
    </main>
  );
}
