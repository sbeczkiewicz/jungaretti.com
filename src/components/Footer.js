export default function Footer() {
  return (
    <footer>
      <div className="container">
        <hr className="opacity-40" />
        <div className="my-6 flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6">
          <div>
            <h5 className="font-bold">Here</h5>
            <span>Home</span>
          </div>
          <div>
            <h5 className="font-bold">There</h5>
            <span>GitHub</span>
          </div>
          <div>
            <p>
              Crafted with Next.js and Tailwind CSS in Madison, Wisconsin.
              Inspired by Griko Nibras, Alec Lomas, and Lee Robinson. MIT
              License © 2021 James Ungaretti.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
