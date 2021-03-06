export default function Project({ title, description, links }) {
  return (
    <div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{description}</p>
      <ul className="flex flex-row space-x-2">
        {links.map(({ title, href }, key) => (
          <li key={key}>
            <a href={href} target="_blank" className="underline">
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
