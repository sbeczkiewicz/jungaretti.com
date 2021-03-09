import Link from "next/link";

const Heading = ({ title }) => <h5 className="font-bold">{title}</h5>;

function Here() {
  return (
    <div>
      <Heading title="Here" />
      <ul>
        <li>
          <span className="text-theme-griko">
            <Link href="/">Home</Link>
          </span>
        </li>
      </ul>
    </div>
  );
}

function There() {
  return (
    <div>
      <Heading title="There" />
      <ul>
        <li>
          <span className="text-theme-griko">
            <a href="https://github.com/jungaretti/" target="_blank">
              GitHub
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
}

function Anywhere() {
  return (
    <div>
      <p>
        Crafted with{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="text-theme-griko"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          className="text-theme-griko"
        >
          Tailwind CSS
        </a>{" "}
        in Madison, Wisconsin. Inspired by{" "}
        <a
          href="https://lowmess.com/"
          target="_blank"
          className="text-theme-griko"
        >
          Alec Lomas
        </a>
        ,{" "}
        <a
          href="https://griko.id/"
          target="_blank"
          className="text-theme-griko"
        >
          Griko Nibras
        </a>
        , and{" "}
        <a
          href="https://leerob.io/"
          target="_blank"
          className="text-theme-griko"
        >
          Lee Robinson
        </a>
        . MIT License © 2021 James Ungaretti.
      </p>
    </div>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <hr className="opacity-40" />
        <div className="my-6 flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-8">
          <Here />
          <There />
          <Anywhere />
        </div>
      </div>
    </footer>
  );
}
