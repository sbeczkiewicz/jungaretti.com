import {
  Box,
  Center,
  Divider,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <Box maxW="680px" mx="auto">
      <Head>
        <title>JP Ungaretti</title>
        <meta
          name="description"
          content="I'm a developer studying computer science and Italian. Welcome to my corner of the Internet!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main">
        <Box as="section" mt="32px">
          <Heading>Ciao, I'm JP Ungaretti.</Heading>
          <Text>
            I'm a developer studying computer science and Italian. I love to
            swim, play board games, mess around with Linux, and explore nature.
            Welcome to my corner of the Internet!
          </Text>
          <UnorderedList>
            <ListItem>
              <Link href="https://github.com/jungaretti/" isExternal>
                GitHub
              </Link>
            </ListItem>
          </UnorderedList>
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
            in Madison, Wisconsin.
          </Text>
          <Text>MIT License © 2021 James Ungaretti.</Text>
        </Box>
      </Box>
    </Box>
  );
}
