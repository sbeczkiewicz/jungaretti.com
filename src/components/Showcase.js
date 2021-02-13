export default function Showcase({ title, children }) {
  return (
    <div>
      <h3 className="font-bold text-xl sm:text-2xl">{title}</h3>
      {children}
    </div>
  );
}
