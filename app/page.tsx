import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import WhatIBuildSection from "@/components/sections/WhatIBuildSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import MouseSpotlight from "@/components/ui/MouseSpotlight";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <MouseSpotlight />
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <WhatIBuildSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
