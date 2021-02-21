import Link from "./Link";

export default function Project({ title, description, links }) {
  return (
    <div className="border rounded p-4">
      <h3 className="font-bold">{title}</h3>
      <p>{description}</p>
      <ul className="mt-2 flex flex-row space-x-4">
        {links &&
          links.map(({ title, href, isExternal }) => (
            <li>
              <Link title={title} href={href} isExternal={isExternal} />
            </li>
          ))}
      </ul>
    </div>
  );
}
