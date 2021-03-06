export default function Heading({ title, subtitle }) {
  return (
    <div>
      <h6 className="text-sm font-bold opacity-80 uppercase">{subtitle}</h6>
      <h2 className="text-2xl sm:text-4xl font-bold">{title}</h2>
    </div>
  );
}
