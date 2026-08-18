export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-9 max-w-3xl">
      <p className="text-xs font-bold uppercase text-[color:var(--color-accent)]">{eyebrow}</p>
      <h2 className="display-wrap mt-3 text-3xl font-extrabold leading-tight text-[color:var(--color-ink)] sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-7 text-[color:var(--color-ink-2)]">{description}</p>}
    </div>
  );
}
