import Link from "next/link";

export default function Header({ name, links }) {
  return (
    <header>
      <div className="flex text-lg">
        <div className="flex-auto">
          <span className="font-bold">{name}</span>
        </div>
        <div>
          <ul className="flex">
            {links.map(({ href, title }) => (
              <li>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
