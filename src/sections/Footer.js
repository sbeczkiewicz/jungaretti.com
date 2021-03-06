import Link from "../components/Link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <hr className="opacity-40" />
        <div className="my-6 flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6">
          <div>
            <h5 className="font-bold">Here</h5>
            <Link title="Home" href="/" />
          </div>
          <div>
            <h5 className="font-bold">There</h5>
            <Link
              title="GitHub"
              href="https://github.com/jungaretti/"
              isExternal
            />
          </div>
          <div>
            <p>
              Crafted with{" "}
              <Link title="Next.js" href="https://nextjs.org/" isExternal /> and{" "}
              <Link
                title="Tailwind CSS"
                href="https://tailwindcss.com/"
                isExternal
              />{" "}
              in Madison, Wisconsin. Inspired by{" "}
              <Link title="Alec Lomas" href="https://lowmess.com/" isExternal />
              ,{" "}
              <Link title="Griko Nibras" href="https://griko.id/" isExternal />,
              and{" "}
              <Link title="Lee Robinson" href="https://leerob.io/" isExternal />
              . MIT License © 2021 James Ungaretti.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
