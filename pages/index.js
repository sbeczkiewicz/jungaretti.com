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
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Box maxWidth="680px" ml="auto" mr="auto">
      <Head>
        <title>JP Ungaretti</title>
        <meta
          name="description"
          content="I'm a developer studying computer science and Italian. Welcome to my corner of the Internet!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
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
        </section>
        <section>
          <Heading>Projects</Heading>
          <Text>Coming soon...</Text>
        </section>
        <section>
          <Heading>Blog Posts</Heading>
          <Text>Coming soon...</Text>
        </section>
        <section>
          <Heading>Bookmarks</Heading>
          <Text>Coming soon...</Text>
        </section>
      </main>
      <footer>
        <Divider />
        <Box>
          <Text>
            Crafted with{" "}
            <Link href="https://nextjs.org/" isExternal>
              Next.js
            </Link>{" "}
            in Madison, Wisconsin
          </Text>
          <Text>MIT License © 2021 James Ungaretti.</Text>
        </Box>
      </footer>
    </Box>
  );
}
