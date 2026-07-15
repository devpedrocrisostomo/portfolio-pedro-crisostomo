export default function Hero() {
  const focusAreas = ['SaaS sob medida', 'Automações operacionais', 'IA aplicada a processos', 'Integrações com APIs'];

  return (
    <section id="inicio" className="section-shell pt-28 lg:min-h-screen lg:pt-14">
      <div className="grid min-h-[calc(100vh-7rem)] gap-10 lg:grid-cols-[minmax(0,1.06fr)_minmax(320px,0.94fr)] lg:items-end">
        <div className="min-w-0 self-center lg:self-end">
          <p className="index-meta mb-8 text-xs font-bold uppercase text-[color:var(--color-accent)]">
            Desenvolvimento web · automações · IA aplicada
          </p>

          <h1 aria-label="Pedro Crisóstomo" className="display-wrap max-w-4xl text-[length:var(--text-display)] font-extrabold leading-[0.98] tracking-[-0.02em] text-white">
            <span className="block">Pedro</span>
            <span className="block">Crisóstomo</span>
          </h1>

          <div className="mt-8 grid min-w-0 gap-6 border-t border-[color:var(--color-rule)] pt-6 md:grid-cols-[0.8fr_1fr]">
            <p className="display-wrap min-w-0 text-xl font-semibold leading-8 text-[color:var(--color-accent)]">
              Desenvolvedor Web | Automações | IA | SaaS
            </p>
            <p className="display-wrap max-w-2xl min-w-0 text-base leading-8 text-slate-300 sm:text-lg">
              Crio aplicações web modernas, automações inteligentes e soluções SaaS para empresas que precisam
              transformar processos em sistemas digitais eficientes, seguros e escaláveis.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projetos"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius-pill)] bg-[color:var(--color-accent)] px-6 py-3 text-sm font-bold text-[color:var(--color-accent-ink)] transition hover:-translate-y-0.5 hover:bg-sky-200 active:translate-y-0"
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius-pill)] border border-[color:var(--color-rule)] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-[color:var(--color-accent)] active:translate-y-0"
            >
              Entrar em contato
            </a>
          </div>
        </div>

        <aside className="glass-panel self-end rounded-[var(--radius-card)] p-6 sm:p-7">
          <p className="index-meta text-xs font-bold uppercase text-[color:var(--color-accent)]">Atuação</p>
          <h2 className="mt-5 max-w-sm text-2xl font-extrabold leading-tight text-white">
            Execução técnica para produtos que precisam funcionar em operação real.
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-300">
            Do diagnóstico ao deploy, organizo interfaces, dados, integrações e automações para reduzir trabalho manual
            e dar previsibilidade ao negócio.
          </p>

          <div className="mt-7 divide-y divide-[color:var(--color-rule)] border-y border-[color:var(--color-rule)]">
            {focusAreas.map((item) => (
              <div key={item} className="flex items-center justify-between gap-4 py-4">
                <span className="text-sm font-semibold text-slate-100">{item}</span>
                <span className="index-meta text-[10px] uppercase text-slate-500">Entrega</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
