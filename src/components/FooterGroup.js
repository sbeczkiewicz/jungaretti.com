export default function FooterGroup({ title, children }) {
  return (
    <div>
      {title && <h5 className="font-bold mb-1">{title}</h5>}
      <div className="flex flex-col space-y-1">{children}</div>
    </div>
  );
}
