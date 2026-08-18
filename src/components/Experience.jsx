import { certifications, differentials, education, experiences } from '../data/portfolio.js';
import SectionTitle from './SectionTitle.jsx';

function ResumeList({ title, items }) {
  return (
    <article className="surface-card rounded-[var(--radius-card)] p-5 sm:p-6">
      <h3 className="text-lg font-extrabold leading-tight text-[color:var(--color-ink)]">{title}</h3>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <p key={item} className="text-sm font-semibold leading-6 text-[color:var(--color-ink-2)]">
            {item}
          </p>
        ))}
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experiencia" className="section-shell">
      <SectionTitle
        eyebrow="Experiência profissional"
        title="Trajetória conectada a CRM, suporte, dados e operação"
        description="Histórico prático em automações, integrações, atendimento, sustentação de sistemas e resolução de problemas técnicos."
      />

      <div className="grid gap-5">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.role}`}
            className="surface-card rounded-[var(--radius-card)] p-6 sm:p-8"
          >
            <div className="grid gap-3 border-b border-[color:var(--color-rule)] pb-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
              <div>
                <h3 className="text-2xl font-extrabold leading-tight text-[color:var(--color-ink)]">
                  {experience.company}
                </h3>
                <p className="mt-2 text-base font-bold leading-6 text-[color:var(--color-accent)]">
                  {experience.role}
                </p>
              </div>
              <p className="text-sm font-bold text-[color:var(--color-muted)]">{experience.period}</p>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {experience.items.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[color:var(--color-accent)]" />
                  <p className="text-sm leading-7 text-[color:var(--color-ink-2)]">{item}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-3">
        <ResumeList title="Formação acadêmica" items={education} />
        <ResumeList title="Cursos e certificações" items={certifications} />
        <ResumeList title="Diferenciais" items={differentials} />
      </div>
    </section>
  );
}
