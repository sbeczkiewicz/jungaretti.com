import Link from "next/link";

function FooterColumn({ title, children }) {
  return (
    <div>
      <h5 className="font-bold">{title}</h5>
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="max-w-screen-md px-4 my-4 mx-auto space-y-2">
      <hr />
      <div className="mt-4 space-y-2 sm:space-y-0 sm:flex sm:space-x-4">
        <FooterColumn title="Here">
          <Link href="/">Home</Link>
        </FooterColumn>
        <FooterColumn title="There">
          <a href="https://github.com/jungaretti/" target="_blank">
            GitHub
          </a>
        </FooterColumn>
        <FooterColumn title="Everywhere">
          <p>
            Crafted with{" "}
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>{" "}
            and{" "}
            <a href="https://tailwindcss.com/" target="_blank">
              Tailwind CSS
            </a>{" "}
            in Madison, Wisconsin. Inspired by{" "}
            <a href="https://leerob.io/" target="_blank">
              Lee Robinson
            </a>
            ,{" "}
            <a href="https://griko.id/" target="_blank">
              Griko Nibras
            </a>
            , and{" "}
            <a href="https://lowmess.com/" target="_blank">
              Alec Lomas
            </a>
            . MIT License © 2021 James Ungaretti.
          </p>
        </FooterColumn>
      </div>
    </footer>
  );
}
