import SectionTitle from './SectionTitle.jsx';

export default function About() {
  return (
    <section id="sobre" className="section-shell">
      <SectionTitle
        eyebrow="Sobre mim"
        title="Perfil analítico para sistemas, CRM e integrações"
        description="Resumo profissional alinhado à rotina de implantação, configuração, sustentação e suporte de sistemas corporativos."
      />

      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <article className="surface-card rounded-[var(--radius-card)] p-6 sm:p-8">
          <p className="text-lg leading-9 text-[color:var(--color-ink)]">
            Tenho experiência prática com n8n, Kommo CRM, APIs REST, JSON, Webhooks, Python, SQL e ferramentas de
            análise de dados, além de vivência com suporte a sistemas e infraestrutura. Meu perfil é analítico,
            proativo e orientado à resolução de problemas e melhoria contínua.
          </p>
        </article>

        <div className="grid gap-5">
          <article className="surface-card rounded-[var(--radius-card)] p-6">
            <p className="text-xs font-bold uppercase text-[color:var(--color-accent)]">Análise</p>
            <p className="mt-3 text-base leading-8 text-[color:var(--color-ink-2)]">
              Atuo entendendo fluxos operacionais, acompanhando integrações, registrando falhas e convertendo problemas
              de usuários em ações técnicas claras.
            </p>
          </article>
          <article className="surface-card rounded-[var(--radius-card)] p-6">
            <p className="text-xs font-bold uppercase text-[color:var(--color-accent)]">Sustentação</p>
            <p className="mt-3 text-base leading-8 text-[color:var(--color-ink-2)]">
              Tenho vivência em manutenção de rotinas, automação de processos, suporte técnico, análise de dados e
              acompanhamento de indicadores de produtividade e qualidade.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
