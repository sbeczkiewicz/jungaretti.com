import Link from "../components/Link";
import FooterGroup from "./FooterGroup";

export default function Footer() {
  return (
    <footer className="container pb-4 space-y-4">
      <hr />
      <div className="space-y-4 md:flex md:space-y-0 md:space-x-8">
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
            <Link title="Lee Robinson" href="https://leerob.io/" isExternal />,{" "}
            <Link title="Griko Nibras" href="https://griko.id/" isExternal />,
            and{" "}
            <Link title="Alec Lomas" href="https://lowmess.com/" isExternal />.
          </p>
          <p>MIT License © 2021 James Ungaretti.</p>
        </FooterGroup>
      </div>
    </footer>
  );
}
