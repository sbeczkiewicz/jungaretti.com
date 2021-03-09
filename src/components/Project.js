export default function Project({ title, description, links }) {
  return (
    <div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{description}</p>
      <ul className="flex flex-row space-x-4">
        {links.map(({ title, href }, key) => (
          <li key={key}>
            <span className="text-theme-griko underline">
              <a href={href} target="_blank">
                {title}
              </a>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
