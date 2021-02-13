import Link from "next/link";

export default function Header() {
  return (
    <header className="max-w-screen-md px-4 my-4 mx-auto">
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
