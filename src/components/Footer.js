import Link from "../components/Link";

function FooterGroup({ title, children }) {
  return (
    <div>
      {title && <h5 className="font-bold">{title}</h5>}
      <div>{children}</div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="container">
      <hr />
      <footer className="py-6">
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
          <FooterGroup title="Here">
            <Link title="Home" href="/" />
          </FooterGroup>
          <FooterGroup title="There">
            <Link
              title="GitHub"
              href="https://github.com/jungaretti/"
              isExternal
            />
          </FooterGroup>
          <FooterGroup>
            <p>
              Crafted with{" "}
              <Link title="Next.js" href="https://nextjs.org/" isExternal /> and{" "}
              <Link
                title="Tailwind CSS"
                href="https://tailwindcss.com/"
                isExternal
              />{" "}
              in Madison, Wisconsin. Inspired by{" "}
              <Link title="Lee Robinson" href="https://leerob.io/" isExternal />
              ,{" "}
              <Link title="Griko Nibras" href="https://griko.id/" isExternal />,
              and{" "}
              <Link title="Alec Lomas" href="https://lowmess.com/" isExternal />
              .
            </p>
            <p className="mt-2">MIT License © 2021 James Ungaretti.</p>
          </FooterGroup>
        </div>
      </footer>
    </div>
  );
}
