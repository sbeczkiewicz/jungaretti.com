import LinkWrapper from "../components/LinkWrapper";

export default function Header() {
  return (
    <header>
      <div className="container my-8 flex">
        <div className="flex-auto">
          <span className="flex-auto font-bold">
            <LinkWrapper href="/" noUnderline>
              <span>JP Ungaretti</span>
            </LinkWrapper>
          </span>
        </div>
        <div className="flex flex-row space-x-4">
          <LinkWrapper href="/" noUnderline>
            <span>Home</span>
          </LinkWrapper>
        </div>
      </div>
    </header>
  );
}
