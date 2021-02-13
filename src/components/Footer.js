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
    <footer className="px-4 my-4">
      <hr />
      <div className="mt-4 space-y-2 sm:space-y-0 sm:flex sm:space-x-4">
        <FooterColumn title="Here">
          <span>Home</span>
        </FooterColumn>
        <FooterColumn title="There">
          <span>GitHub</span>
        </FooterColumn>
        <FooterColumn title="Everywhere">
          <p>
            Crafted with Next.js and Tailwind CSS in Madison, Wisconsin.
            Inspired by Lee Robinson, Griko Nibras, and Alec Lomas.
          </p>
        </FooterColumn>
      </div>
    </footer>
  );
}
