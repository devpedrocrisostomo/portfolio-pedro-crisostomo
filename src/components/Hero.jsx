export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen pt-24">
      <div className="section-shell grid min-h-[calc(100vh-6rem)] items-center gap-12 pb-16 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="animate-reveal">
          <div className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            Desenvolvimento web, automações e produtos digitais
          </div>

          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
            Pedro Crisóstomo
          </h1>

          <p className="mt-5 text-xl font-semibold text-cyan-200 sm:text-2xl">
            Desenvolvedor Web | Automações | IA | SaaS
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Crio aplicações web modernas, automações inteligentes e soluções SaaS para empresas que precisam
            transformar processos em sistemas digitais eficientes, seguros e escaláveis.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projetos"
              className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-7 py-4 text-sm font-bold text-slate-950 shadow-glow transition hover:-translate-y-1 hover:bg-cyan-200"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/10"
            >
              Entrar em Contato
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-float lg:max-w-lg">
          <div className="gradient-border glass-panel aspect-[4/5] rounded-[2rem] p-5">
            <div className="relative flex h-full flex-col justify-end overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900">
              <img
                src="/pedro-crisostomo.png"
                alt="Foto de Pedro Crisóstomo"
                className="absolute inset-0 h-full w-full object-cover object-[50%_38%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.02)_0%,rgba(2,6,23,0.08)_48%,rgba(2,6,23,0.88)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.18),transparent_36%),linear-gradient(315deg,rgba(168,85,247,0.16),transparent_36%)]" />
              <div className="relative m-4 rounded-2xl border border-white/10 bg-slate-950/75 p-5 backdrop-blur">
                <p className="text-sm font-semibold text-cyan-200">Pedro Crisóstomo</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Desenvolvedor focado em interfaces premium, integrações e automações que reduzem trabalho manual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
