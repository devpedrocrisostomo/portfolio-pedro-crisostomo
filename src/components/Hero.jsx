import { contact } from '../data/portfolio.js';

export default function Hero() {
  const focusAreas = ['Followop, Kommo CRM e Salesbot', 'APIs REST, Webhooks e JSON', 'n8n, SQL, Python e dados', 'Suporte técnico e sustentação'];

  return (
    <section id="inicio" className="section-shell pt-32 sm:pt-36">
      <div className="grid gap-10 border-b border-[color:var(--color-rule)] pb-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-end lg:pb-20">
        <div className="min-w-0">
          <p className="mb-5 text-sm font-bold text-[color:var(--color-accent)]">
            Currículo digital profissional
          </p>

          <h1 className="display-wrap max-w-4xl text-[length:var(--text-display)] font-extrabold leading-[1.02] text-[color:var(--color-ink)]">
            Pedro Crisóstomo • Analista de Sistemas
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[color:var(--color-ink-2)]">
            Profissional de TI com experiência em CRM, integrações entre sistemas, APIs REST, Webhooks, automação de
            processos e suporte técnico. Atuo na implantação, configuração e sustentação de fluxos integrados a CRMs e
            canais digitais.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={contact.whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius-pill)] border border-[color:var(--color-rule)] bg-[color:var(--color-paper-2)] px-6 py-3 text-sm font-bold text-[color:var(--color-ink)] transition hover:-translate-y-0.5 hover:border-[color:var(--color-accent)] active:translate-y-0"
            >
              Entrar em contato
            </a>
          </div>
        </div>

        <aside className="surface-card rounded-[var(--radius-card)] p-6 sm:p-7">
          <p className="text-xs font-bold uppercase text-[color:var(--color-accent)]">Objetivo profissional</p>
          <h2 className="mt-4 max-w-sm text-2xl font-extrabold leading-tight text-[color:var(--color-ink)]">
            Atuar com sistemas, integrações, automação e melhoria de processos.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--color-ink-2)]">
            Busco contribuir com experiência em CRM, APIs, Webhooks, suporte técnico e soluções digitais para
            implantação, sustentação e evolução de processos tecnológicos.
          </p>

          <div className="mt-6 divide-y divide-[color:var(--color-rule)] border-y border-[color:var(--color-rule)]">
            {focusAreas.map((item) => (
              <div key={item} className="flex items-center justify-between gap-4 py-4">
                <span className="text-sm font-semibold text-[color:var(--color-ink)]">{item}</span>
                <span className="text-[11px] font-bold uppercase text-[color:var(--color-muted)]">Base</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
