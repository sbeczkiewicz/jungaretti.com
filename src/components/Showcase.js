export default function Showcase({ title, children }) {
  return (
    <div>
      <h3 className="font-bold mb-2 text-xl sm:text-2xl">{title}</h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
