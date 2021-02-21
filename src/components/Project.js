import Link from "./Link";

export default function Project({ title, description, links }) {
  return (
    <div>
      <h3 className="font-bold">{title}</h3>
      <p>{description}</p>
      <ul className="flex space-x-2">
        {links &&
          links.map(({ title, href, isExternal }) => (
            <li className="underline">
              <Link title={title} href={href} isExternal={isExternal} />
            </li>
          ))}
      </ul>
    </div>
  );
}
