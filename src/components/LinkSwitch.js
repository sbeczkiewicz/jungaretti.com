import Link from "next/link";

export default function LinkSwitch({ title, href, isExternal }) {
  return isExternal ? (
    <a href={href} target="_blank" className="link">
      {title}
    </a>
  ) : (
    <Link href={href}>{title}</Link>
  );
}
