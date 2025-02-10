"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        {/* Added IDs for Navigation */}
        <section id="home">
          <Hero />
        </section>
        {/* <Clients /> */}
        <section id="about">
          <Grid />
        </section>

        <section id="experience">
          <Experience />
        </section>
        {/* <Approach /> */}
        <section id="recentprojects">
          <RecentProjects />
        </section>

        <section id="contact">
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default Home;
