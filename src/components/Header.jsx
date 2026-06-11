import { useState } from 'react';
import { navItems } from '../data/portfolio.js';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a href="#inicio" className="group flex items-center gap-3" aria-label="Ir para o início">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold text-cyan-200 shadow-glow">
            PC
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">Pedro Crisóstomo</span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contato"
          className="hidden rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 lg:inline-flex"
        >
          Contato
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.06] md:hidden"
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
        <div className="border-t border-white/10 bg-slate-950/95 px-5 py-4 md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10"
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
