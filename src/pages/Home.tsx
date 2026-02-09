import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TechStackSection from "../components/TechStackSection";
import ProfessionalRolesSection from "../components/ProfessionalRolesSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import CertificationsSection from "../components/CertificationsSection";
import AchievementsSection from "../components/AchievementsSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProfessionalRolesSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <CertificationsSection />
      <AchievementsSection />
      <ContactSection />
      
      <footer className="py-8 border-t border-border/60 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-10" />
        <div className="container px-6 text-center relative">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Syed Iliyaz. Built with React, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
}
