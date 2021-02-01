import {
  Box,
  Container,
  Divider,
  Heading,
  Link,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../components/sections/Footer";
import Welcome from "../components/sections/Welcome";

export default function Home() {
  return (
    <Container maxW="2xl">
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
      <main>
        <Welcome />
        <section>
          <Text>
            I'm a developer studying computer science and Italian. I love to
            swim, play board games, mess around with Linux, and visit national
            parks. Welcome to my corner of the Internet!
          </Text>
        </section>
      </main>
      <Footer />
    </Container>
  );
}
