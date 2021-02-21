export default function FooterGroup({ title, children }) {
  return (
    <div>
      {title && <h5 className="font-bold">{title}</h5>}
      <div>{children}</div>
    </div>
  );
}
