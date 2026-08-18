import { contact } from '../data/portfolio.js';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 shrink-0 fill-current">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12.004 2C6.477 2 2 6.477 2 12.004c0 1.771.465 3.433 1.276 4.878L2 22l5.294-1.258A9.958 9.958 0 0 0 12.004 22C17.527 22 22 17.527 22 12.004 22 6.477 17.527 2 12.004 2zm0 18.182a8.164 8.164 0 0 1-4.162-1.138l-.298-.177-3.093.736.761-3.009-.194-.31A8.134 8.134 0 0 1 3.818 12c0-4.508 3.67-8.18 8.182-8.18 4.508 0 8.18 3.672 8.18 8.18 0 4.508-3.672 8.182-8.18 8.182z"/>
    </svg>
  );
}

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

          {/* Availability badge */}
          <div className="mt-8 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="text-xs font-semibold text-[color:var(--color-muted)]">Disponível para oportunidades</span>
          </div>

          {/* CTA buttons */}
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Primary – WhatsApp */}
            <a
              id="cta-whatsapp"
              href={contact.whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-[var(--radius-pill)] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-blue-900/30 active:translate-y-0 active:shadow-none"
              style={{
                background: 'linear-gradient(135deg, oklch(42% 0.085 235) 0%, oklch(55% 0.095 215) 100%)',
              }}
            >
              {/* Shimmer overlay */}
              <span
                className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-18deg] bg-white/20 transition-transform duration-500 group-hover:translate-x-[200%]"
                aria-hidden="true"
              />
              <WhatsAppIcon />
              Conversar no WhatsApp
            </a>

            {/* Secondary – scroll to contact */}
            <a
              id="cta-contato"
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-pill)] border border-[color:var(--color-rule)] bg-transparent px-7 py-3.5 text-sm font-bold text-[color:var(--color-ink)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] active:translate-y-0"
            >
              Ver contato completo
              <span
                className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
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
