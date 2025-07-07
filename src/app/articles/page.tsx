'use client';
import { FaExternalLinkAlt } from "react-icons/fa";
import { NavBar } from "@/componant/NavBar";





export default function articles() {
  return (
    <div>
        <NavBar />
        
    <div className="justify-center max-w-4xl mx-auto py-12 px-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="block p-3 rounded-lg dark:border-gray-700 hover:bg-neutral-900 hover:shadow-md hover:scale-[1.01] transition"
        >
          <h2 className="text-md font-semibold text-primary mb-2 inline-flex items-center gap-2">Nothing here yet — check back soon for awesome reads!<FaExternalLinkAlt /></h2>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            I`m currently working on some exciting articles that will be published soon. Stay tuned for updates!
          </p>
          <p className="text-sm text-gray-400">
          </p>
        </a>
    </div>
    </div>
  );
}

