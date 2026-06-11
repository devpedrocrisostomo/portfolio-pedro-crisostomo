import { contact } from '../data/portfolio.js';
import SectionTitle from './SectionTitle.jsx';

function GmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path fill="#EA4335" d="M4.5 6.8 12 12.3l7.5-5.5v10.7A1.5 1.5 0 0 1 18 19H6a1.5 1.5 0 0 1-1.5-1.5V6.8Z" />
      <path fill="#FBBC04" d="M3 6.5C3 5.7 3.6 5 4.5 5l7.5 5.5L19.5 5c.9 0 1.5.7 1.5 1.5v.8L12 14 3 7.3v-.8Z" />
      <path fill="#34A853" d="M3 7.3 7.4 10.6V19H4.5A1.5 1.5 0 0 1 3 17.5V7.3Z" />
      <path fill="#4285F4" d="M16.6 10.6 21 7.3v10.2a1.5 1.5 0 0 1-1.5 1.5h-2.9v-8.4Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path
        fill="#0A66C2"
        d="M20.4 3H3.6A1.6 1.6 0 0 0 2 4.6v16.8A1.6 1.6 0 0 0 3.6 23h16.8a1.6 1.6 0 0 0 1.6-1.6V4.6A1.6 1.6 0 0 0 20.4 3ZM8.2 19.6H5.1V9.8h3.1v9.8ZM6.7 8.4a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Zm12.9 11.2h-3.1v-4.8c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5v4.9H10V9.8h3v1.3h.1a3.3 3.3 0 0 1 3-1.6c3.2 0 3.8 2.1 3.8 4.8v5.3h-.3Z"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
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
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.08] text-white">
        {item.icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-bold uppercase text-cyan-300">{item.label}</span>
        <span className="mt-1 block break-words text-sm font-semibold leading-6 text-white sm:text-base">
          {item.value}
        </span>
      </span>
    </>
  );

  const className =
    'flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.08]';

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
        title="Vamos construir sua próxima solução digital"
        description="Disponível para projetos web, automações, integrações com IA e sistemas sob medida."
      />

      <div className="gradient-border glass-panel mx-auto max-w-5xl rounded-2xl p-5 sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {contactItems.map((item) => (
            <ContactCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
