import Link from "next/link";

export default function LinkWrapper({
  children,
  href,
  isExternal,
  noUnderline,
}) {
  return (
    <span className={"cursor-pointer"}>
      {isExternal ? (
        <a href={href} target="_blank" className={noUnderline || "underline"}>
          {children}
        </a>
      ) : (
        <span className={noUnderline || "underline"}>
          <Link href={href}>{children}</Link>
        </span>
      )}
    </span>
  );
}
