export default function Section({ title, subtitle, className, children }) {
  return (
    <section className={className}>
      <span className="text-sm font-bold opacity-60 uppercase">{subtitle}</span>
      <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
