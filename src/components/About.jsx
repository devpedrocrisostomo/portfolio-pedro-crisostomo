import SectionTitle from './SectionTitle.jsx';

export default function About() {
  return (
    <section id="sobre" className="section-shell">
      <SectionTitle
        eyebrow="Sobre mim"
        title="Tecnologia aplicada a processos reais"
        description="Atuação completa entre estratégia, desenvolvimento e integração para transformar ideias em sistemas úteis."
      />

      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <article className="glass-panel rounded-[var(--radius-card)] p-6 sm:p-8">
          <p className="text-lg leading-9 text-slate-100">
            Sou formado em Análise e Desenvolvimento de Sistemas e atuo com desenvolvimento web, automações,
            sistemas SaaS, agentes de IA, integrações com APIs, WhatsApp, CRMs e soluções digitais para negócios
            que precisam ganhar velocidade, organização e escala.
          </p>
        </article>

        <div className="grid gap-5">
          <article className="border-t border-[color:var(--color-rule)] pt-5">
            <p className="index-meta text-xs font-bold uppercase text-[color:var(--color-accent)]">01 · Produto</p>
            <p className="mt-3 text-base leading-8 text-slate-300">
              Meu foco é construir produtos com interface profissional, arquitetura simples de manter e fluxos que
              resolvem problemas operacionais de verdade.
            </p>
          </article>
          <article className="border-t border-[color:var(--color-rule)] pt-5">
            <p className="index-meta text-xs font-bold uppercase text-[color:var(--color-accent)]">02 · Entrega</p>
            <p className="mt-3 text-base leading-8 text-slate-300">
              Trabalho com implementação ponta a ponta: experiência do usuário, integrações, dados, automações e
              validação técnica para deixar a solução pronta para uso real.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
