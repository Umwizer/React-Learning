import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ selected, setSelected }) {
  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-30 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.98, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.98, y: 10 }}
            className="bg-white max-w-3xl w-full rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">{selected.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{selected.long}</p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {selected.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-1 border rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <a
                    href={selected.github}
                    className="px-3 py-2 border rounded-md"
                  >
                    View GitHub
                  </a>
                  <a
                    href={selected.demo}
                    className="px-3 py-2 border rounded-md"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
              <div className="ml-auto text-right">
                <button
                  onClick={() => setSelected(null)}
                  className="text-gray-400 hover:text-gray-700"
                >
                  Close ✕
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
