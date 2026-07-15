export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-9 grid gap-5 border-t border-[color:var(--color-rule)] pt-5 lg:grid-cols-[0.28fr_1fr]">
      <p className="index-meta text-xs font-bold uppercase text-[color:var(--color-accent)]">{eyebrow}</p>
      <div className="min-w-0">
        <h2 className="display-wrap max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          {title}
        </h2>
        {description && <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">{description}</p>}
      </div>
    </div>
  );
}
