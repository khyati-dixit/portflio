import React from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Loader from "./components/ui/Loader.jsx";
import ScrollProgress from "./components/ui/ScrollProgress.jsx";
import CursorGlow from "./components/ui/CursorGlow.jsx";
import BackToTop from "./components/ui/BackToTop.jsx";
import Navbar from "./components/sections/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills.jsx";
import Experience from "./components/sections/Experience.jsx";
import Contact from "./components/sections/Contact.jsx";
import Footer from "./components/sections/Footer.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <Loader />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}
