import { Box, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../components/sections/Footer";
import Welcome from "../components/sections/Welcome";

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
        <Welcome />
        <Box as="section" mt={4}>
          <Heading>Projects</Heading>
          <Text>Coming soon...</Text>
        </Box>
        <Box as="section" mt={4}>
          <Heading>Blog Posts</Heading>
          <Text>Coming soon...</Text>
        </Box>
        <Box as="section" mt={4}>
          <Heading>Bookmarks</Heading>
          <Text>Coming soon...</Text>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
