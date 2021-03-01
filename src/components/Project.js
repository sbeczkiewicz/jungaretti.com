export default function Project({ title, description }) {
  return (
    <div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
