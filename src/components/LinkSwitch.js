import Link from "next/link";

export default function LinkSwitch({ title, href, isExternal }) {
  if (isExternal) {
    return (
      <a href={href} target="_blank">
        {title}
      </a>
    );
  } else {
    return <Link href={href}>{title}</Link>;
  }
}
