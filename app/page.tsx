import { Header } from "@/components/header";
import { Masthead } from "@/components/masthead";
import { Stats } from "@/components/stats";
import { Timeline } from "@/components/timeline";
import { Skills } from "@/components/skills";
import { SkillTicker } from "@/components/skill-ticker";
import { Projects } from "@/components/projects";
import { CvViewer } from "@/components/cv-viewer";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Masthead />
        <Stats />
        <Timeline />
        <Skills />
        <SkillTicker />
        <Projects />
        <CvViewer />
      </main>
      <Contact />
    </>
  );
}
