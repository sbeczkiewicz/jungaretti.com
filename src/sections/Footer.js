import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <hr className="opacity-40" />
        <div className="my-6 flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6">
          <div>
            <h5 className="font-bold">Here</h5>
            <span className="underline">
              <Link href="/">Home</Link>
            </span>
          </div>
          <div>
            <h5 className="font-bold">There</h5>
            <a
              href="https://github.com/jungaretti/"
              target="_blank"
              className="underline"
            >
              GitHub
            </a>
          </div>
          <div>
            <p>
              Crafted with{" "}
              <a
                href="https://nextjs.org/"
                target="_blank"
                className="underline"
              >
                Next.js
              </a>
              and{" "}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                className="underline"
              >
                Tailwind CSS
              </a>{" "}
              in Madison, Wisconsin. Inspired by{" "}
              <a
                href="https://lowmess.com/"
                target="_blank"
                className="underline"
              >
                Alec Lomas
              </a>
              ,{" "}
              <a href="https://griko.id/" target="_blank" className="underline">
                Griko Nibras
              </a>
              , and{" "}
              <a
                href="https://leerob.io/"
                target="_blank"
                className="underline"
              >
                Lee Robinson
              </a>
              . MIT License © 2021 James Ungaretti.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
