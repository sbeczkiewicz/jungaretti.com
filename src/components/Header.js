export default function Header() {
  return (
    <header>
      <div className="flex">
        <div className="flex-auto">
          <span className="font-bold">JP Ungaretti</span>
        </div>
        <div>
          <ul className="flex">
            <li>Home</li>
            <li className="ml-2">Test</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
