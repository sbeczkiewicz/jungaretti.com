function FooterColumn({ title, children }) {
  return (
    <div className="ml-2 first:ml-0">
      <h5 className="font-bold">{title}</h5>
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer>
      <hr className="mb-1" />
      <div className="flex">
        <FooterColumn title="Here">
          <span>Home</span>
        </FooterColumn>
        <FooterColumn title="There">
          <span>GitHub</span>
        </FooterColumn>
        <FooterColumn title="Everywhere">
          <p>
            Crafted with Next.js in Madison, Wisconsin. Inspired by Lee
            Robinson, Griko Nibras, and Alec Lomas.
          </p>
        </FooterColumn>
      </div>
    </footer>
  );
}
