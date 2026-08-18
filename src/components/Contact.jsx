import { contact } from '../data/portfolio.js';
import SectionTitle from './SectionTitle.jsx';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 shrink-0 fill-current">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12.004 2C6.477 2 2 6.477 2 12.004c0 1.771.465 3.433 1.276 4.878L2 22l5.294-1.258A9.958 9.958 0 0 0 12.004 22C17.527 22 22 17.527 22 12.004 22 6.477 17.527 2 12.004 2zm0 18.182a8.164 8.164 0 0 1-4.162-1.138l-.298-.177-3.093.736.761-3.009-.194-.31A8.134 8.134 0 0 1 3.818 12c0-4.508 3.67-8.18 8.182-8.18 4.508 0 8.18 3.672 8.18 8.18 0 4.508-3.672 8.182-8.18 8.182z"/>
    </svg>
  );
}

function GmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path fill="#EA4335" d="M4.5 6.8 12 12.3l7.5-5.5v10.7A1.5 1.5 0 0 1 18 19H6a1.5 1.5 0 0 1-1.5-1.5V6.8Z" />
      <path fill="#FBBC04" d="M3 6.5C3 5.7 3.6 5 4.5 5l7.5 5.5L19.5 5c.9 0 1.5.7 1.5 1.5v.8L12 14 3 7.3v-.8Z" />
      <path fill="#34A853" d="M3 7.3 7.4 10.6V19H4.5A1.5 1.5 0 0 1 3 17.5V7.3Z" />
      <path fill="#4285F4" d="M16.6 10.6 21 7.3v10.2a1.5 1.5 0 0 1-1.5 1.5h-2.9v-8.4Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="#0A66C2"
        d="M20.4 3H3.6A1.6 1.6 0 0 0 2 4.6v16.8A1.6 1.6 0 0 0 3.6 23h16.8a1.6 1.6 0 0 0 1.6-1.6V4.6A1.6 1.6 0 0 0 20.4 3ZM8.2 19.6H5.1V9.8h3.1v9.8ZM6.7 8.4a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Zm12.9 11.2h-3.1v-4.8c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5v4.9H10V9.8h3v1.3h.1a3.3 3.3 0 0 1 3-1.6c3.2 0 3.8 2.1 3.8 4.8v5.3h-.3Z"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M12 2.3a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-2c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.2-4.7-5a4 4 0 0 1 1.1-2.8c-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.9 1.1a10 10 0 0 1 5.3 0C17 5.7 17.9 6 17.9 6c.6 1.4.2 2.5.1 2.8a4 4 0 0 1 1.1 2.8c0 3.9-2.4 4.7-4.7 5 .4.3.7.9.7 1.8v2.9c0 .3.2.6.7.5A10 10 0 0 0 12 2.3Z"
      />
    </svg>
  );
}

const contactItems = [
  { label: 'Gmail', value: contact.email, href: contact.emailHref, icon: <GmailIcon /> },
  { label: 'LinkedIn', value: 'pedro-crisóstomo', href: contact.linkedIn, icon: <LinkedInIcon /> },
  { label: 'GitHub', value: 'devpedrocrisostomo', href: contact.gitHub, icon: <GitHubIcon /> },
];

function ContactCard({ item }) {
  const content = (
    <>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[var(--radius-card)] border border-[color:var(--color-rule)] bg-[color:var(--color-paper-3)] text-[color:var(--color-ink)] transition-colors duration-200 group-hover:border-[color:var(--color-accent)] group-hover:bg-[color:var(--color-paper-2)]">
        {item.icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[11px] font-bold uppercase text-[color:var(--color-accent)]">{item.label}</span>
        <span className="mt-1 block break-words text-sm font-semibold leading-6 text-[color:var(--color-ink)] sm:text-base">
          {item.value}
        </span>
      </span>
      <span
        className="ml-auto text-[color:var(--color-accent)] transition-transform duration-200 group-hover:translate-x-1"
        aria-hidden="true"
      >
        →
      </span>
    </>
  );

  const className =
    'group flex items-center gap-4 border-t border-[color:var(--color-rule)] py-5 transition-all duration-200 hover:border-[color:var(--color-accent)] rounded-sm';

  if (!item.href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a
      href={item.href}
      target={item.href.startsWith('http') ? '_blank' : undefined}
      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={className}
    >
      {content}
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contato" className="section-shell pb-12">
      <SectionTitle
        eyebrow="Contato"
        title="Contato profissional"
        description="Canais para falar comigo sobre oportunidades, projetos, sistemas, automações e integrações."
      />

      <div className="surface-card grid gap-8 rounded-[var(--radius-card)] p-6 sm:p-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div className="flex flex-col gap-6">
          <p className="text-2xl font-extrabold leading-tight text-[color:var(--color-ink)] sm:text-3xl">
            Disponível para contribuir com CRM, APIs, automações, suporte técnico e sustentação de sistemas.
          </p>

          {/* Primary CTA */}
          <a
            id="contact-cta-whatsapp"
            href={contact.whatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex w-fit items-center gap-2 overflow-hidden whitespace-nowrap rounded-[var(--radius-pill)] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-blue-900/30 active:translate-y-0 active:shadow-none"
            style={{
              background: 'linear-gradient(135deg, oklch(42% 0.085 235) 0%, oklch(55% 0.095 215) 100%)',
            }}
          >
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-18deg] bg-white/20 transition-transform duration-500 group-hover:translate-x-[200%]"
              aria-hidden="true"
            />
            <WhatsAppIcon />
            Falar no WhatsApp
          </a>
        </div>

        <div>
          {contactItems.map((item) => (
            <ContactCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
