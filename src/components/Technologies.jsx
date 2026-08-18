import { technologies } from '../data/portfolio.js';
import SectionTitle from './SectionTitle.jsx';

export default function Technologies() {
  return (
    <section id="tecnologias" className="section-shell">
      <SectionTitle
        eyebrow="Competências técnicas"
        title="Stack alinhada a implantação, suporte e integrações"
        description="Competências organizadas por frente de atuação profissional: CRM, APIs, dados, automações e operação."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {technologies.map((group) => (
          <article key={group.title} className="surface-card rounded-[var(--radius-card)] p-5 sm:p-6">
            <div className="border-b border-[color:var(--color-rule)] pb-5">
              <h3 className="text-lg font-extrabold leading-tight text-[color:var(--color-ink)]">{group.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--color-ink-2)]">{group.description}</p>
            </div>

            <div className="mt-5 flex flex-wrap content-start gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-[var(--radius-pill)] border border-[color:var(--color-rule)] bg-[color:var(--color-paper-3)] px-3 py-1.5 text-xs font-semibold text-[color:var(--color-ink-2)]"
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
