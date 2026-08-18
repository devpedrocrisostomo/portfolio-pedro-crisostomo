export default function Footer() {
  return (
    <footer className="section-shell py-8">
      <div className="flex flex-col gap-3 border-t border-[color:var(--color-rule)] pt-6 text-sm text-[color:var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Pedro Crisóstomo.</p>
        <p className="text-[11px] font-bold uppercase text-[color:var(--color-muted)]">Portfólio profissional · web · IA · automações</p>
      </div>
    </footer>
  );
}
