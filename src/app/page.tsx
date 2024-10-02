import AboutMe from "@/components/sections/about";
import Educations from "@/components/sections/educations";
import Experiences from "@/components/sections/experiences";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Navbar from "@/components/sections/navbar";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import WhatIdo from "@/components/sections/whatido";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <WhatIdo/>
      <Skills/>
      <Experiences/>
      <Educations/>
      <Projects/>
      <Footer/>
    </main>
  );
}