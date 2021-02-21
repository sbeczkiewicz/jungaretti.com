export default function Gallery({ title, children }) {
  return (
    <div className="">
      <h3 className="font-bold text-xl">{title}</h3>
      <div className="mt-2 space-y-4">{children}</div>
    </div>
  );
}
