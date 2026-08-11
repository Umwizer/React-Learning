import React from "react";
export default function Skills() {
  return (
    <section id="skills" className="mt-8 grid md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h4 className="font-semibold">Languages</h4>
        <ul className="mt-3 text-sm text-gray-700 space-y-2">
          <li>JavaScript</li>
          <li>C / C++</li>
          <li>Python (beginner)</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h4 className="font-semibold">Frameworks & Tools</h4>
        <ul className="mt-3 text-sm text-gray-700 space-y-2">
          <li>React</li>
          <li>Node.js, Express</li>
          <li>Tailwind CSS, Git</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h4 className="font-semibold">Other Skills</h4>
        <ul className="mt-3 text-sm text-gray-700 space-y-2">
          <li>Public Speaking</li>
          <li>Project Management</li>
          <li>Teamwork</li>
        </ul>
      </div>
    </section>
  );
}
