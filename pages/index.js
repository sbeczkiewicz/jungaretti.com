import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>JP Ungaretti</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <h1>Ciao, I'm JP Ungaretti.</h1>
          <p>
            I'm a developer studying computer science and Italian. I love to
            swim, play board games, mess around with Linux, and explore nature.
            Welcome to my corner of the Internet!
          </p>
          {/* Personal dashboard can be shown here */}
        </section>
        <section>
          <h3>Projects</h3>
          <p>Coming soon...</p>
        </section>
        <section>
          <h3>Blog Posts</h3>
          <p>Coming soon...</p>
        </section>
        <section>
          <h3>Bookmarks</h3>
          <p>Coming soon...</p>
        </section>
        <section>
          <h3>History</h3>
          <p>Coming soon..</p>
        </section>
      </main>
      <footer>
        <hr />
        <div>
          <p>Crafted with Next.js in Madison, Wisconsin.</p>
          <p>MIT License © 2021 James Ungaretti.</p>
        </div>
      </footer>
    </>
  );
}
