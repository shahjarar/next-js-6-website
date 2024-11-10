import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { About } from "@/components/About";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>
    <Hero/>
    <Navbar/>
    <Project/>
    <Skills/>
    <Contact/>
    <About/>
    <Footer/>
    </main>
   
  );
}

