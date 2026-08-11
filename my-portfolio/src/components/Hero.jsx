import React from "react";
export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Hi, I’m <span className="text-indigo-600">Umwizerwa Ruth</span>
        </h2>
        <p className="mt-4 text-gray-700">
          I build web apps and tools that solve real-world problems. Currently,
          I’m a first-year Software Engineering student at AUCA, developing
          projects and sharpening my skills in web development, software design,
          and programming.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md font-medium"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-block px-4 py-2 border rounded-md"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="p-6 bg-white rounded-2xl shadow-md flex items-center justify-center text-gray-400">
        Quick Links Placeholder
      </div>
    </section>
  );
}
