import {
  Box,
  Divider,
  Heading,
  Link,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Head from "next/head";
import { FaGithub } from "react-icons/fa";
import SocialLink from "../components/SocialLink";

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
        <Box as="section" mt={6}>
          <Heading>Ciao, I'm JP Ungaretti.</Heading>
          <Text mt={2}>
            I'm a developer studying computer science and Italian. I love to
            swim, play board games, mess around with Linux, and explore nature.
            Welcome to my corner of the Internet!
          </Text>
          <Wrap mt={2}>
            <WrapItem>
              <SocialLink
                name="GitHub"
                link="https://github.com/jungaretti/"
                icon={<FaGithub />}
              />
            </WrapItem>
          </Wrap>
          {/* Personal dashboard can be shown here */}
        </Box>
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
      <Box as="footer" mt={4}>
        <Divider />
        <Box mt={4}>
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
