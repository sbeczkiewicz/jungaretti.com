export default function Project({ title, description, links }) {
  return (
    <div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{description}</p>
      <ul className="flex flex-row space-x-2">
        {links.map(({ title, href }, key, array) => (
          <li key={key}>
            <span className="text-theme-griko">
              <a href={href} target="_blank">
                {title}
              </a>
            </span>
            {key != array.length - 1 ? <span className="ml-2">·</span> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
