import GitHubProjects from "./GithubProject";

export function Projects() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">My GitHub Projects</h1>
      <GitHubProjects />
    </section>
  );
}
