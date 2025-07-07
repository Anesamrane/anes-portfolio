import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope , FaInstagram, FaTelegram  } from 'react-icons/fa';

const contacts = [
  {
    icon: <FaGithub className="text-2xl" />, label: 'GitHub', url: 'https://github.com/Anesamrane',
  },
  {
    icon: <FaLinkedin className="text-2xl" />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/anes-amrane-a33776292/',
  },
  {
    icon: <FaEnvelope className="text-2xl" />, label: 'Email', url: 'mailto:anesamrane@gmail.com',
  },
  {
    icon: <FaTelegram className="text-2xl" />, label: 'Twitter', url: 'https://t.me/anesamrane',
  },
  {
    icon: <FaInstagram className="text-2xl" />, label: 'Instagram', url: 'https://www.instagram.com/anesamrane/',
  },
];

export function Contact() {
  return (
    <section className="flex flex-col items-center justify-center py-12">
      <h2 className="text-3xl font-bold mb-6 font-bold tracking-tight">Contact Me</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-stone-400 gap-2 p-4 rounded-lg shadow dark:hover:text-stone-100 transition min-w-[100px]"
          >
            {contact.icon}
            <span className="text-base font-medium text-gray-700 dark:text-gray-200"></span>
          </a>
        ))}
      </div>
    </section>
  );
}
