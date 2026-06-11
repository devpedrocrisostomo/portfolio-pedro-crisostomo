import SectionTitle from './SectionTitle.jsx';

export default function About() {
  return (
    <section id="sobre" className="section-shell">
      <SectionTitle
        eyebrow="Sobre mim"
        title="Tecnologia aplicada a processos reais"
        description="Atuação completa entre estratégia, desenvolvimento e integração para transformar ideias em sistemas úteis."
      />

      <div className="mx-auto max-w-4xl">
        <article className="gradient-border glass-panel rounded-2xl p-7 sm:p-10">
          <p className="text-lg leading-9 text-slate-200">
            Sou formado em Análise e Desenvolvimento de Sistemas e atuo com desenvolvimento web, automações,
            sistemas SaaS, agentes de IA, integrações com APIs, WhatsApp, CRMs e soluções digitais para negócios
            que precisam ganhar velocidade, organização e escala.
          </p>
          <p className="mt-6 text-base leading-8 text-slate-300">
            Meu foco é construir produtos com interface profissional, arquitetura simples de manter e fluxos que
            resolvem problemas operacionais de verdade.
          </p>
        </article>
      </div>
    </section>
  );
}
