import { useState } from 'react';
import { navItems } from '../data/portfolio.js';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[color:var(--color-paper)]/90 backdrop-blur-xl lg:bottom-0 lg:left-0 lg:right-auto lg:w-64 lg:border-b-0 lg:border-r">
      <nav className="flex items-center justify-between px-5 py-4 lg:h-full lg:flex-col lg:items-start lg:p-6">
        <a href="#inicio" className="group flex items-center gap-3" aria-label="Ir para o início">
          <span className="grid h-10 w-10 place-items-center rounded-[var(--radius-card)] border border-[color:var(--color-rule)] bg-[color:var(--color-paper-2)] text-sm font-bold text-[color:var(--color-accent)]">
            PC
          </span>
          <span className="text-sm font-semibold leading-none text-white">Pedro Crisóstomo</span>
        </a>

        <div className="hidden w-full lg:mt-14 lg:flex lg:flex-col lg:gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between border-b border-white/10 py-3 text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              <span>{item.label}</span>
              <span className="text-[10px] text-slate-600 transition group-hover:text-[color:var(--color-accent)]">/</span>
            </a>
          ))}
        </div>

        <a
          href="#contato"
          className="hidden w-full items-center justify-between rounded-[var(--radius-card)] border border-[color:var(--color-accent)] px-4 py-3 text-sm font-bold text-[color:var(--color-accent)] transition hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-accent-ink)] lg:flex"
        >
          <span>Contato</span>
          <span aria-hidden="true">→</span>
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-[var(--radius-card)] border border-white/10 bg-white/[0.06] md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Abrir menu"
          aria-expanded={isOpen}
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-white" />
            <span className="block h-0.5 w-5 rounded-full bg-white" />
            <span className="block h-0.5 w-5 rounded-full bg-white" />
          </span>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-[color:var(--color-paper)] px-5 py-4 md:hidden">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-[var(--radius-card)] px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
