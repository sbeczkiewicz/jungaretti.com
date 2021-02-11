import { Container, Stack } from "@chakra-ui/react";
import Head from "next/head";
import Showcase from "../components/Showcase";
import Header from "../sections/Header";
import Welcome from "../sections/Welcome";
import Footer from "../sections/Footer";

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
      <Welcome />
      <Container>
        <main>
          <Stack my={4} spacing={4}>
            <Showcase title="Neat Projects">
              <p>Coming soon...</p>
            </Showcase>
            <Showcase title="Recent Thoughts">
              <p>Coming soon...</p>
            </Showcase>
            <Showcase title="Good Memories">
              <p>Coming soon...</p>
            </Showcase>
          </Stack>
        </main>
        <Footer />
      </Container>
    </div>
  );
}
