import Link from "next/link";

export default function LinkWrapper({
  children,
  href,
  isExternal,
  noUnderline,
}) {
  return (
    <span className={`link cursor-pointer ${noUnderline || "underline"}`}>
      {isExternal ? (
        <a href={href} target="_blank">
          {children}
        </a>
      ) : (
        <Link href={href}>{children}</Link>
      )}
    </span>
  );
}
