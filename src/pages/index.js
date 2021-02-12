import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Showcase from "../components/Showcase";

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
      </Head>
      <Header />
      <main>
        <Showcase title="Neat Projects">
          <p>Coming soon...</p>
        </Showcase>
        <Showcase title="Recent Thoughts">
          <p>Coming soon...</p>
        </Showcase>
        <Showcase title="Good Memories">
          <p>Coming soon...</p>
        </Showcase>
      </main>
      <Footer />
    </div>
  );
}
