import { projects } from '../data/portfolio.js';
import SectionTitle from './SectionTitle.jsx';

function ProjectCard({ project, index }) {
  return (
    <article className="glass-panel group flex min-h-[300px] flex-col rounded-[var(--radius-card)] p-5 transition hover:border-[color:var(--color-accent)]">
      <div className="mb-5 flex items-center justify-between border-b border-[color:var(--color-rule)] pb-4">
        <span className="index-meta text-[11px] font-bold uppercase text-[color:var(--color-accent)]">
          Projeto {String(index + 1).padStart(2, '0')}
        </span>
        <span className="h-px w-10 bg-[color:var(--color-rule)]" />
      </div>

      <h3 className="display-wrap text-2xl font-extrabold leading-tight text-white">{project.title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-[var(--radius-pill)] border border-[color:var(--color-rule)] px-2.5 py-1 text-[11px] font-semibold text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.href}
        className="mt-7 inline-flex w-fit items-center gap-2 whitespace-nowrap text-sm font-bold text-[color:var(--color-accent)] transition hover:text-sky-100"
      >
        Ver detalhes <span aria-hidden="true">→</span>
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

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
