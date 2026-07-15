import { technologies } from '../data/portfolio.js';
import SectionTitle from './SectionTitle.jsx';

export default function Technologies() {
  return (
    <section id="tecnologias" className="section-shell">
      <SectionTitle
        eyebrow="Skills"
        title="Competências para construir produtos digitais confiáveis"
        description="Stack organizada por frente de entrega: interface, backend, dados, deploy, integrações e experiência do usuário."
      />

      <div className="grid border-t border-[color:var(--color-rule)] lg:grid-cols-2">
        {technologies.map((group) => (
          <article key={group.title} className="grid gap-5 border-b border-[color:var(--color-rule)] py-6 lg:grid-cols-[0.42fr_1fr] lg:pr-8">
            <div>
              <h3 className="text-lg font-extrabold leading-tight text-white">{group.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{group.description}</p>
            </div>

            <div className="flex flex-wrap content-start gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-[var(--radius-pill)] border border-[color:var(--color-rule)] px-3 py-1.5 text-xs font-semibold text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
