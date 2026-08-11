import { AnimatePresence, motion } from "framer-motion";

export default function Header({ mobileMenu, setMobileMenu }) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-indigo-600 text-white px-3 py-2 font-semibold">
              UR
            </div>
            <div>
              <h1 className="font-bold">Umwizerwa Ruth</h1>
              <p className="text-xs text-gray-600">
                Software Engineering Student • Aspiring Full-Stack Dev
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-indigo-600">
              About
            </a>
            <a href="#skills" className="hover:text-indigo-600">
              Skills
            </a>
            <a href="#projects" className="hover:text-indigo-600">
              Projects
            </a>
            <a href="#contact" className="hover:text-indigo-600">
              Contact
            </a>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenu((v) => !v)}
              aria-label="menu"
              className="p-2 rounded-md hover:bg-gray-100"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              <a href="#about" onClick={() => setMobileMenu(false)}>
                About
              </a>
              <a href="#skills" onClick={() => setMobileMenu(false)}>
                Skills
              </a>
              <a href="#projects" onClick={() => setMobileMenu(false)}>
                Projects
              </a>
              <a href="#contact" onClick={() => setMobileMenu(false)}>
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
