'use client';
import { useEffect, useState } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";


interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
}

const GitHubProjects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/Anesamrane/repos')
      .then((res) => res.json())
      .then((data: Repo[]) => {
        const filtered = data
          .filter((repo) => repo.description)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepos(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch repos:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading GitHub projects...</p>;

  return (
    <div className="justify-center">
      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-3 rounded-lg dark:border-gray-700 hover:bg-neutral-900 hover:shadow-md hover:scale-[1.01] transition"
        >
          <h2 className="text-md font-semibold text-primary mb-2 inline-flex items-center gap-2">{repo.name} <FaExternalLinkAlt /></h2>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            {repo.description}
          </p>
          <p className="text-sm text-gray-400">
          Updated: {new Date(repo.updated_at).toLocaleDateString()}
          </p>
        </a>
      ))}
    </div>
  );
};

export default GitHubProjects;
