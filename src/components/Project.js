export default function Project({ title, description, links }) {
  return (
    <div>
      <h3 className="font-bold">{title}</h3>
      <p>{description}</p>
      <ul className="flex space-x-2">
        {links &&
          links.map(({ title, href }) => (
            <li className="underline">
              <a href={href} target="_blank">
                {title}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}
