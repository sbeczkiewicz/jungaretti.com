import Head from "next/head";
import Header from "../components/Header";

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
        <section className="container">
          <h1 className="text-3xl sm:text-4xl font-bold">Ciao, I'm JP.</h1>
          <p>
            I'm a developer studying computer science and Italian. I love to
            swim, play board games, mess around with Linux, and visit national
            parks. Welcome to my corner of the Internet.
          </p>
        </section>
      </main>
    </div>
  );
}
