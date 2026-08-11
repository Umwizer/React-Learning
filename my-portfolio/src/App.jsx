import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectModal from "./components/ProjectModel";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const projects = [
  {
    id: "agrisoko",
    title: "AgriSoko Connect",
    short: "Marketplace platform for farmers to connect with buyers.",
    long: "AgriSoko Connect helps farmers list produce and buyers search by location, price, and category. I worked on backend APIs, authentication, and database models.",
    stack: ["Node.js", "Express", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    id: "quickbite",
    title: "QuickBite",
    short: "A food delivery app designed for seamless user experience.",
    long: "QuickBite focuses on minimal friction ordering experience with menu browsing, cart management, and order tracking. I contributed to the frontend UI with React + Tailwind.",
    stack: ["React", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    id: "gymsoft",
    title: "Gym Software Program",
    short: "Manage gym members, payments, and attendance.",
    long: "A member management system with attendance tracking and payment logs. I improved backend logic and added UI views for staff.",
    stack: ["Node.js", "Express", "React"],
    github: "#",
    demo: "#",
  },
  {
    id: "calculator",
    title: "Calculator App",
    short: "Simple, responsive calculator built with JavaScript.",
    long: "A clean calculator demonstrating state, edge-case handling, and responsive layout. Useful as a demo of core JS skills.",
    stack: ["HTML", "CSS", "JavaScript", "ReactJs"],
    github: "#",
    demo: "#",
  },
  {
    id: "vanlife",
    title: "Van Life App",
    short: "Explore van rental options and plan trips.",
    long: "Van Life App helps users browse van rental listings, save favorites, and plan itineraries. Built as a routed React app with attention to UX.",
    stack: ["React", "React Router", "Tailwind"],
    github: "#",
    demo: "#",
  },
];

export default function App() {
  const [selected, setSelected] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />
        <About />
        <Skills />
        <Projects projects={projects} setSelected={setSelected} />
        <ProjectModal selected={selected} setSelected={setSelected} />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
