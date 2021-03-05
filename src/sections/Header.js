import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container my-8 flex">
        <div className="flex-auto">
          <span className="flex-auto font-bold">
            <Link href="/">JP Ungaretti</Link>
          </span>
        </div>
        <div className="flex flex-row space-x-4">
          <Link href="/">Home</Link>
        </div>
      </div>
    </header>
  );
}
