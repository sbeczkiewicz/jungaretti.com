export default function Gallery({ title, children }) {
  return (
    <div>
      <h3 className="font-bold text-xl md:text-3xl">{title}</h3>
      <div className="mt-2 space-y-4">{children}</div>
    </div>
  );
}
