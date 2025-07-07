import React from 'react'
import { SiJavascript, SiPython, SiHtml5, SiReact, SiNextdotjs, SiPostgresql, SiKaggle, SiOpenai, SiHuggingface     } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaCss3Alt, FaBrain  } from "react-icons/fa";
export function Row() {
  return (
    <div>
        

<section className="flex flex-wrap justify-center items-center gap-8 py-10 cursor-pointer ">
  <div className="flex flex-col items-center">
    <SiJavascript title="Java Script" className="text-yellow-400 text-5xl animate-pulse" />
    <span className="mt-2 text-sm text-gray-700 dark:text-gray-300"></span>
  </div>
  <div className="flex flex-col items-center">
    <SiHtml5 title="Html" className="text-orange-600 text-5xl animate-pulse" />
    <span className="mt-2 text-sm text-gray-700 dark:text-gray-300"></span>
  </div>
  <div className="flex flex-col items-center">
    <FaCss3Alt title="Css" className="text-blue-600 text-5xl animate-pulse" />
    <span className="mt-2 text-sm text-gray-700 dark:text-gray-300"></span>
  </div>
  <div className="flex flex-col items-center">
    <SiPython title="Python" className="text-blue-400 text-5xl animate-pulse" />
    <span className="mt-2 text-sm text-gray-700 dark:text-gray-300"></span>
  </div>
  <div className="flex flex-col items-center">
    <SiReact title="React" className="text-blue-600 text-5xl animate-pulse" />
    <span className="mt-2 text-sm text-gray-700 dark:text-gray-300"></span>
  </div>
  <div className="flex flex-col items-center">
    <VscVscode title="Vs Code" className="text-blue-600 text-5xl animate-pulse" />
    <span className="mt-2 text-sm text-gray-700 dark:text-gray-300"></span>
  </div>
  <div className="flex flex-col items-center">
    <SiNextdotjs title="Next js" className="text-grey-600 text-5xl animate-pulse" />
    <span className="mt-2 text-sm text-gray-700 dark:text-gray-300"></span>
  </div>
  <div className="flex flex-col items-center">
    <SiPostgresql title="Postgres Sql" className="text-blue-600 text-5xl animate-pulse" />
    <span className="mt-2 text-sm text-gray-700 dark:text-gray-300"></span>
  </div>
  <div className="flex flex-col items-center">
    <SiKaggle title="Kaggle" className="text-blue-300 text-5xl animate-pulse" />
    <span className="mt-2 text-sm text-gray-700 dark:text-gray-300"></span>
  </div>
  <div className="flex flex-col items-center">
    <FaBrain title="Natural Language Processing" className="text-purple-600 text-5xl animate-pulse" />
    <span className="mt-2 text-sm text-gray-700 dark:text-gray-300"></span>
  </div>
  <div className="flex flex-col items-center">
    <SiOpenai title="Prompt enginier" className="text-blue-300 text-5xl animate-pulse" />
    <span className="mt-2 text-sm text-gray-700 dark:text-gray-300"></span>
  </div>
  <div className="flex flex-col items-center">
    <SiHuggingface title="Hugging Face"  className="text-yellow-500 text-5xl animate-pulse" />
    <span className="mt-2 text-sm text-gray-700 dark:text-gray-300"></span>
  </div>
  
</section>

    </div>
  )
}
