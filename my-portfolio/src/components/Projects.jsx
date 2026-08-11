import React from "react";
import { motion } from "framer-motion";

export default function Projects({ projects, setSelected }) {
  return (
    <section id="projects" className="mt-10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Projects</h3>
        <p className="text-sm text-gray-600">
          A selection of my work — click a card to view details.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.article
            key={p.id}
            whileHover={{ y: -6 }}
            className="bg-white p-4 rounded-2xl shadow cursor-pointer"
            onClick={() => setSelected(p)}
          >
            <div className="h-40 bg-indigo-50 rounded-lg flex items-center justify-center text-gray-400 font-semibold">
              {p.title} Screenshot
            </div>
            <h4 className="mt-3 font-semibold">{p.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{p.short}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="text-xs px-2 py-1 border rounded-full">
                  {s}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
