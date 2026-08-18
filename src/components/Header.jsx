import { useState } from 'react';
import { navItems } from '../data/portfolio.js';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--color-rule)] bg-[color:var(--color-paper-2)]/92 backdrop-blur-xl">
      <nav className="section-shell flex items-center justify-between py-4">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Ir para o início">
          <span className="grid h-10 w-10 place-items-center rounded-[var(--radius-card)] bg-[color:var(--color-accent)] text-sm font-bold text-[color:var(--color-accent-ink)]">
            PC
          </span>
          <span className="text-sm font-bold leading-none text-[color:var(--color-ink)]">Pedro Crisóstomo</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[color:var(--color-ink-2)] transition hover:text-[color:var(--color-accent)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contato"
          className="hidden items-center justify-center whitespace-nowrap rounded-[var(--radius-pill)] border border-[color:var(--color-accent)] px-4 py-2.5 text-sm font-bold text-[color:var(--color-accent)] transition hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-accent-ink)] lg:inline-flex"
        >
          Conversar
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-[var(--radius-card)] border border-[color:var(--color-rule)] bg-[color:var(--color-paper-2)] lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Abrir menu"
          aria-expanded={isOpen}
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-[color:var(--color-ink)]" />
            <span className="block h-0.5 w-5 rounded-full bg-[color:var(--color-ink)]" />
            <span className="block h-0.5 w-5 rounded-full bg-[color:var(--color-ink)]" />
          </span>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-[color:var(--color-rule)] bg-[color:var(--color-paper-2)] px-5 py-4 lg:hidden">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-[var(--radius-card)] px-4 py-3 text-sm font-semibold text-[color:var(--color-ink-2)] transition hover:bg-[color:var(--color-paper-3)]"
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
