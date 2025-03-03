import Navbar from "./navbar";
import Hero from "./hero";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";
import { Children } from "react";

export default function Home() {
  return (
    <html>
      <body>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      </body>
    </html>
  );
}
