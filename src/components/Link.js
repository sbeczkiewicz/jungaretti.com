import LinkSwitch from "./LinkSwitch";

export default function Link({ title, href, isExternal }) {
  return (
    <span className="underline">
      <LinkSwitch title={title} href={href} isExternal={isExternal} />
    </span>
  );
}
