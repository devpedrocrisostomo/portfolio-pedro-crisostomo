import { projects } from '../data/portfolio.js';
import SectionTitle from './SectionTitle.jsx';

function ProjectCard({ project }) {
  return (
    <article className="card-3d gradient-border glass-panel group flex min-h-[320px] flex-col rounded-2xl p-6">
      <div className={`mb-7 h-2 w-24 rounded-full bg-gradient-to-r ${project.accent}`} />
      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.href}
        className="mt-7 inline-flex w-fit rounded-full border border-cyan-300/40 px-5 py-2.5 text-sm font-bold text-cyan-200 transition group-hover:bg-cyan-300 group-hover:text-slate-950"
      >
        Ver mais
      </a>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projetos" className="section-shell">
      <SectionTitle
        eyebrow="Projetos"
        title="Produtos digitais com foco em operação"
        description="Algumas soluções estruturadas para atendimento, automação, jurídico e geração de conteúdo."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
