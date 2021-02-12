export default function Showcase({ title, children }) {
  return (
    <div className="my-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {children}
    </div>
  );
}
