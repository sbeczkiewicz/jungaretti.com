import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container my-8 flex">
        <div className="flex-auto">
          <span className="flex-auto font-bold">
            <span>
              <Link href="/">JP Ungaretti</Link>
            </span>
          </span>
        </div>
        <div className="flex flex-row space-x-4">
          <span>
            <Link href="/">Home</Link>
          </span>
        </div>
      </div>
    </header>
  );
}
