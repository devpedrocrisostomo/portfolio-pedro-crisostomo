import { technologies } from '../data/portfolio.js';
import SectionTitle from './SectionTitle.jsx';

export default function Technologies() {
  return (
    <section id="tecnologias" className="section-shell">
      <SectionTitle
        eyebrow="Tecnologias"
        title="Stack para interfaces, dados e automações"
        description="Ferramentas usadas para entregar aplicações completas, integrações confiáveis e experiências responsivas."
      />

      <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3">
        {technologies.map((tech, index) => (
          <span
            key={tech}
            className="card-3d rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-bold text-slate-100 backdrop-blur transition hover:border-cyan-300/50 hover:text-cyan-200"
            style={{ animationDelay: `${index * 45}ms` }}
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
