import LinkWrapper from "../components/LinkWrapper";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <hr className="opacity-40" />
        <div className="my-6 flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6">
          <div>
            <h5 className="font-bold">Here</h5>
            <LinkWrapper href="/">
              <span>Home</span>
            </LinkWrapper>
          </div>
          <div>
            <h5 className="font-bold">There</h5>
            <LinkWrapper href="https://github.com/jungaretti/" isExternal>
              <span>GitHub</span>
            </LinkWrapper>
          </div>
          <div>
            <p>
              Crafted with{" "}
              <LinkWrapper href="https://nextjs.org/" isExternal>
                <span>Next.js</span>
              </LinkWrapper>{" "}
              and{" "}
              <LinkWrapper href="https://tailwindcss.com/" isExternal>
                <span>Tailwind CSS</span>
              </LinkWrapper>{" "}
              in Madison, Wisconsin. Inspired by{" "}
              <LinkWrapper href="https://lowmess.com/" isExternal>
                <span>Alec Lomas</span>
              </LinkWrapper>
              ,{" "}
              <LinkWrapper href="https://griko.id/" isExternal>
                <span>Griko Nibras</span>
              </LinkWrapper>
              , and{" "}
              <LinkWrapper href="https://leerob.io/" isExternal>
                <span>Lee Robinson</span>
              </LinkWrapper>
              . MIT License © 2021 James Ungaretti.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
