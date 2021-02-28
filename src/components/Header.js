export default function Header() {
  return (
    <header className="my-8">
      <div className="container flex">
        <div className="flex-auto">
          <span className="flex-auto font-bold">JP Ungaretti</span>
        </div>
        <div className="flex flex-row space-x-4">
          <span>Home</span>
          <span>Projects</span>
        </div>
      </div>
    </header>
  );
}
