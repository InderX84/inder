import Hero from '../components/Hero';
import About from '../components/About';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import GitHubActivity from '../components/GitHubActivity';
import AchievementsSection from '../components/AchievementsSection';
import CertificatesSection from '../components/CertificatesSection';
import ContactSection from '../components/ContactSection';
import PageTransition from '../components/PageTransition';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <PageTransition><About /></PageTransition>
      <PageTransition><SkillsSection /></PageTransition>
      <PageTransition><ProjectsSection /></PageTransition>
      <PageTransition><GitHubActivity /></PageTransition>
      <PageTransition><AchievementsSection /></PageTransition>
      <PageTransition><CertificatesSection /></PageTransition>
      <PageTransition><ContactSection /></PageTransition>
    </main>
  );
}
