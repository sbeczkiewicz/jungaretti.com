import Link from "next/link";

export default function Header() {
  return (
    <header className="container py-6">
      <div className="flex">
        <div className="flex-auto">
          <span className="font-bold">JP Ungaretti</span>
        </div>
        <div>
          <ul className="flex space-x-2">
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
