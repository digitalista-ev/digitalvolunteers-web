import { Hero } from "@/components/Hero";
import { SectionAbout } from "@/components/SectionAbout";
import { SectionProjects } from "@/components/SectionProjects";
import { SectionTeam } from "@/components/SectionTeam";
import { SectionPartners } from "@/components/SectionPartners";
import { DonateBlock } from "@/components/DonateBlock";
import { ContactForm } from "@/components/ContactForm";
import { getHomeContent } from "@/lib/content";

export default function HomePage() {
  const home = getHomeContent();
  return (
    <>
      <Hero {...home.hero} />
      <SectionAbout blocks={home.about} />
      <SectionProjects intro={home.projectsIntro} projects={home.projects} />
      <SectionTeam intro={home.teamIntro} members={home.team} />
      <SectionPartners intro={home.partnersIntro} partners={home.partners} />
      <DonateBlock {...home.donate} />
      <ContactForm {...home.contact} />
    </>
  );
}
