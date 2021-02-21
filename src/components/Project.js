import Link from "./Link";

export default function Project({ title, description, links }) {
  return (
    <div>
      <h3 className="font-medium">{title}</h3>
      <p>{description}</p>
      <ul className="mt-1 flex flex-row space-x-2">
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
