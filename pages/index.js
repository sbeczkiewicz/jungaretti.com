import { Box, Divider, Heading, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import Social from "../components/Social";

export default function Home() {
  return (
    <Box maxW="680px" mx="auto" px="8px">
      <Head>
        <title>JP Ungaretti</title>
        <meta
          name="description"
          content="I'm a developer studying computer science and Italian. Welcome to my corner of the Internet!"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <Box as="main">
        <Box as="section" mt="32px">
          <Heading>Ciao, I'm JP Ungaretti.</Heading>
          <Text>
            I'm a developer studying computer science and Italian. I love to
            swim, play board games, mess around with Linux, and explore nature.
            Welcome to my corner of the Internet!
          </Text>
          <Social />
          {/* Personal dashboard can be shown here */}
        </Box>
        <Box as="section" mt="16px">
          <Heading>Projects</Heading>
          <Text>Coming soon...</Text>
        </Box>
        <Box as="section" mt="16px">
          <Heading>Blog Posts</Heading>
          <Text>Coming soon...</Text>
        </Box>
        <Box as="section" mt="16px">
          <Heading>Bookmarks</Heading>
          <Text>Coming soon...</Text>
        </Box>
      </Box>
      <Box as="footer" mt="16px">
        <Divider />
        <Box mt="8px">
          <Text>
            Crafted with{" "}
            <Link href="https://nextjs.org/" isExternal>
              Next.js
            </Link>{" "}
            and
            <Link href="https://chakra-ui.com/" isExternal>
              Chakra UI
            </Link>{" "}
            in Madison, Wisconsin.
          </Text>
          <Text>MIT License © 2021 James Ungaretti.</Text>
        </Box>
      </Box>
    </Box>
  );
}
