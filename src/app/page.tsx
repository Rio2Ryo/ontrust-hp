import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Story from "@/components/Story";
import HowItWorks from "@/components/HowItWorks";
import Applications from "@/components/Applications";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Problem />
        <Story />
        <HowItWorks />
        <Applications />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
