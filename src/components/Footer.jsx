export default function Footer() {
  return (
    <footer className="section-shell py-8">
      <div className="flex flex-col gap-3 border-t border-[color:var(--color-rule)] pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Pedro Crisóstomo.</p>
        <p className="index-meta text-[11px] uppercase text-slate-500">Portfólio profissional · web · IA · automações</p>
      </div>
    </footer>
  );
}
