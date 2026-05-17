import Hero from '../components/Hero';
import About from '../components/About';
import EducationTimeline from '../components/EducationTimeline';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import GitHubActivity from '../components/GitHubActivity';
import AchievementsSection from '../components/AchievementsSection';
import CertificatesSection from '../components/CertificatesSection';
import LearningSection from '../components/LearningSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <About />
      <EducationTimeline />
      <SkillsSection />
      <ProjectsSection />
      <GitHubActivity />
      <AchievementsSection />
      <CertificatesSection />
      <LearningSection />
      <ContactSection />
    </main>
  );
}
