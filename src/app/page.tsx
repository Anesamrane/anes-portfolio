// app/page.jsx
'use client';

import { Projects } from '@/componant/Projects';
import { NavBar } from '@/componant/NavBar';
import { Row } from '@/componant/Row';
import { Skills } from '@/componant/Skills';
import { Contact } from '@/componant/Contact';

export default function Home() {
  return (
    <div>
    <NavBar />
    <section className="flex flex-col items-center mt-10 text-center space-y-6">
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
        Hey, I’m <span className="text-primary">Anes</span>
      </h1>
      <p className="text-lg max-w-xl text-gray-600 dark:text-gray-300">
        I’m an AI student and developer passionate about building smart applications,
        solving real-world problems, and provide intilligent soloutions.
      </p>
      <div className="flex gap-4">
        <a
          href="mailto:anesamrane9@gmail.com"
          className="px-6 py-2 rounded bg-primary text-white hover:bg-indigo-700 transition"
        >
          Hire me
        </a>
        <a
          href="/anes-resume.pdf" download
          className="px-6 py-2 rounded border border-primary text-primary hover:bg-white hover:text-black transition"
        >
          Download Resume
        </a>
      </div>
      <Row />
    </section>
    {/*<hr className="w-8/10 mt-8 h-5vh mx-auto dark:border-gray-200" />*/}
    <div>
      <Skills />
    </div>
    <div>
      <Projects />      
    </div>
    <div>
      <Contact />      
    </div>
    <div className="justify-center w-4/6 mx-auto mt-10 mb-20 p-6 bg-white dark:bg-neutral-900 rounded-lg shadow-lg">
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
  I’m Anes Amrane, a passionate Master’s student in Intelligent Systems Engineering based in Algeria, with a strong background in computer science and a growing focus on AI and web development.
  <br /><br />
  My journey began with curiosity — from building my first simple app to diving deep into neural networks and natural language processing. Through self-study and academic projects, I’ve developed full-stack applications, NLP models, and data-driven systems that solve real problems. One example is my Bachelor s project “Tabibi,” a medical platform that simplifies patient-doctor interaction.
  <br /><br />
  What drives me is the impact of technology: making knowledge more accessible, automating routine work, and empowering others. I`m not only a developer — I`m a builder, a thinker, and a learner committed to using technology ethically and effectively.
  <br /><br />
  I’m currently seeking opportunities to grow as a software engineer or AI practitioner, where I can contribute meaningfully while expanding my skill set. I’m also open to internships, remote collaborations, or research opportunities that align with my vision.
  <br /><br />
  Thank you for taking the time to explore my work.
</p>

    </div>


    </div>
    
  );
}
