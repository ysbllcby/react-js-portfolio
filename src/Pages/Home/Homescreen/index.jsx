import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import MyPortfolio from "../MyPortfolio";
import Education from "../Education";
import Experience from "../Experience";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <Education />
      <Experience />
      <MyPortfolio />
      <ContactMe />
      <Footer />
    </>
  );
}
