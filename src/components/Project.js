import LinkWrapper from "./LinkWrapper";

export default function Project({ title, description, links }) {
  return (
    <div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{description}</p>
      <ul className="flex flex-row space-x-2">
        {links.map((link, key) => (
          <li key={key}>
            <LinkWrapper {...link} isExternal />
          </li>
        ))}
      </ul>
    </div>
  );
}
