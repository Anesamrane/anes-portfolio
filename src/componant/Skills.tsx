
import React, { useState } from 'react';
import { FaLanguage } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';

const skillData = {
  devtools: [
    { name: '🖥️ Frontend', desc: 'HTML5, CSS3, JavaScript (ES6+), TypeScript' },
    { name: 'Frameworks & Libraries', desc: 'React.js, Next.js' },
    { name: 'Styling', desc: 'Tailwind CSS, Sass, Responsive Design (Flexbox, Grid)' },
    { name: 'Other Tools', desc: 'Framer Motion, React Icons, Heroicons' },
    { name: '🌐 Backend', desc: 'JavaScript, TypeScript, Python' },
    { name: 'Runtime & Frameworks', desc: 'Node.js, Express.js' },
    { name: 'Databases', desc: 'MongoDB, Basic PostgreSQL' },
    { name: 'Authentication & APIs', desc: 'RESTful APIs, JWT Auth' },
    { name: '🛠️ Dev Tools & Practices', desc: 'Git, GitHub, Docker (basic), npm, yarn, VS Code (ESLint, Prettier), Vercel, Netlify, Render' },
  ],
  ai: [
    { name: '🧠 AI/ML', desc: 'Python, Scikit-learn, NumPy, Pandas, Matplotlib, Seaborn, NLTK, spaCy, Transformers, OpenCV' },
    { name: 'Concepts', desc: 'Neural Networks, SVM, k-NN, NLP, Toxic speech detection, text classification' },
    { name: 'Projects', desc: 'PDF Chatbot, Sentiment Analysis, Abusive-to-Friendly Speech Transformer' },
    
  ],
  language: [
    { name: 'Python', desc: 'AI, ML, and scripting' },
    { name: 'JavaScript', desc: 'Web, backend, and scripting' },
    { name: 'TypeScript', desc: 'Typed JavaScript for large apps' },   
    { name: 'Arabic', desc: 'Native' },
    { name: 'English', desc: 'B2' },
    { name: 'French', desc: 'A2–B1' },
  ],
  study: [
    { name: '📚 Education', desc: `Bachelor's in Computer Science` },
    { name: 'Master’s', desc: 'Intelligent Systems Engineering (in progress)' },
    { name: 'Courses', desc: 'Machine Learning, Algorithms, Web Development Bootcamp, machine learnning kaggle courses' },
  ],
};

const categories = [
  { key: 'devtools', label: 'Dev tools', icon: <FaLaptopCode className="inline mr-2" /> },
  { key: 'ai', label: 'AI/ML', icon: <FaLaptopCode className="inline mr-2" /> },
  { key: 'language', label: 'Language', icon: <FaLanguage className="inline mr-2" /> },
  { key: 'study', label: 'Study', icon: <FaGraduationCap className="inline mr-2" /> },
];

export function Skills() {
  const [selected, setSelected] = useState('devtools');

  return (
    <div className="w-full flex flex-col items-center mt-8">
      <div className="flex gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelected(cat.key)}
            className={`px-6 py-2 text-stone-400 hover:text-stone-100 transition cursor-pointer
              ${selected === cat.key
                ? 'text-white stroke-white border-b border-white shadow-md'
                : 'text-stone-400'}`}
          >
            <span className="flex items-center gap-2">{cat.icon}{cat.label}</span>
          </button>
        ))}
      </div>
      <div className="w-full shadow p-6 flex flex-wrap gap-4 justify-center">
        {skillData[selected as keyof typeof skillData].map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center dark:bg-neutral-900 dark:text-white text-sm font-medium shadow px-4 py-2 min-w-[140px] max-w-[200px]"
          >
            <span className="font-semibold">{skill.name}</span>
            <span className="text-xs text-gray-600 dark:text-gray-300 text-center mt-1">{skill.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
