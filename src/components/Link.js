import LinkSwitch from "./LinkSwitch";

export default function Link(link) {
  // I can't import next/link as anything OTHER than Link
  return (
    <span className="link">
      <LinkSwitch {...link} />
    </span>
  );
}
