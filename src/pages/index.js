import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Showcase from "../components/Showcase";
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
        <div className="bg-gradient-to-r from-yellow-500 via-red-500 to-pink-600 text-white">
          <div className="max-w-screen-md py-11 px-4 my-4 mx-auto space-y-2">
            <h1 className="mb-0 sm:mb-2 text-3xl sm:text-5xl font-bold">
              Ciao, I'm JP!
            </h1>
            <p className="font-medium">
              I'm a developer studying computer science and Italian. I love to
              swim, play board games, mess around with Linux, and visit national
              parks. Welcome to my corner of the Internet!
            </p>
          </div>
        </div>
        <div className="max-w-screen-md px-4 my-4 mx-auto space-y-4">
          <Showcase title="Neat Projects">
            <Project
              title="jungaretti.com"
              description="My personal website built with Next.js and Tailwind CSS. Thanks for checking it out!"
              links={[
                {
                  title: "Repository",
                  href: "https://github.com/jungaretti/jungaretti.com",
                },
              ]}
            />
            <Project
              title="Milk Chugger"
              description="An innovative solution to a problem faced by 5.6 million Wisconsinites: logging milk consumption. Steve Beczkiewicz and I built Milk Chugger during a weekend hackathon."
              links={[
                {
                  title: "Repository",
                  href: "https://github.com/jungaretti/milk-chugger/",
                },
                {
                  title: "Steve's Website",
                  href: "https://sbeczkiewicz.github.io/",
                },
              ]}
            />
            <Project
              title="LeetCode"
              description="Efficient solutions to LeetCode challenges written in several programming languages."
              links={[
                {
                  title: "Repository",
                  href: "https://github.com/jungaretti/leetcode",
                },
              ]}
            />
            <Project
              title="Digist"
              description="Transforms your GitHub Gists into highly-functional code snippets for the web."
              links={[
                {
                  title: "Repository",
                  href: "https://github.com/jungaretti/digist",
                },
              ]}
            />
          </Showcase>
          {/* <Showcase title="Recent Thoughts"></Showcase> */}
          {/* <Showcase title="Good Memories"></Showcase> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
