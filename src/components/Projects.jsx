import { projects } from '../data/portfolio.js';
import SectionTitle from './SectionTitle.jsx';

function ProjectCard({ project }) {
  const isExternalLink = project.href.startsWith('http');

  return (
    <article className="card-3d gradient-border glass-panel group flex min-h-[270px] flex-col rounded-2xl p-5">
      <div className={`mb-5 h-1.5 w-20 rounded-full bg-gradient-to-r ${project.accent}`} />
      <h3 className="text-xl font-bold leading-tight text-white">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[11px] font-semibold text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.href}
        target={isExternalLink ? '_blank' : undefined}
        rel={isExternalLink ? 'noopener noreferrer' : undefined}
        className="mt-6 inline-flex w-fit rounded-full border border-cyan-300/40 px-4 py-2 text-xs font-bold text-cyan-200 transition group-hover:bg-cyan-300 group-hover:text-slate-950"
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
        description="Soluções para atendimento, automação, jurídico, IA e geração de conteúdo."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
