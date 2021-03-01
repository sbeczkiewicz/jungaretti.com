import Head from "next/head";
import Header from "../components/Header";
import DetailHeader from "../components/DetailHeader";
import Project from "../components/Project";

export default function Home() {
  return (
    <div>
      <Head>
        <title>JP Ungaretti</title>
        <meta
          name="description"
          content="I'm a developer studying computer science and Italian in Madison, Wisconsin. Welcome to my corner of the Internet!"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-theme-viridian to-theme-steel">
          <div className="container py-8 sm:py-12">
            <h1 className="text-4xl sm:text-5xl font-bold">Ciao, I'm JP</h1>
            <p className="text-lg sm:text-xl font-medium mt-2">
              I'm a developer studying computer science and Italian. I love to
              swim, play board games, mess around with computers, and visit
              national parks. Welcome to my corner of the Internet.
            </p>
          </div>
        </section>
        <section className="container my-6">
          <DetailHeader title="Notable Works" subtitle="Projects" />
          <div className="mt-4 space-y-4">
            <Project
              title="jungaretti.com"
              description="My corner of the Internet. Built with Next.js and Tailwind CSS. Thanks for checking it out!"
            />
            <Project
              title="Milk Chugger"
              description="5.6 million Wisconsinites use this product each day. Built with Steve Beczkiewicz during a weekend hackathon."
            />
            <Project
              title="Digist"
              description="Elegant and functional code snippets for the web. Built during Microsoft's annual Hackathon."
            />
          </div>
        </section>
      </main>
    </div>
  );
}
