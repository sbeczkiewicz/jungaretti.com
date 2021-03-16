import Head from "next/head";
import Heading from "../components/Heading";
import Project from "../components/Project";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Welcome from "../sections/Welcome";

import { projects } from "../../data/projects";

export default function Home({ projects }) {
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
        <link rel="stylesheet" href="/inter/inter.css" />
      </Head>
      <Header />
      <main>
        <div className="bg-gradient-to-r from-theme-viridian to-theme-steel">
          <Welcome />
        </div>
        <div className="container my-6">
          <Heading title="Notable Works" subtitle="Projects" />
          <div className="mt-4 space-y-4">
            {projects.map((project, key) => (
              <Project {...project} key={key} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      projects,
    },
  };
}
