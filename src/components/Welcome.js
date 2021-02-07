import { Box, Heading } from "@chakra-ui/react";

export default function Welcome() {
  return (
    <Box as="section" backgroundColor="black" color="white">
      <Heading>Ciao, I'm JP!</Heading>
      <p>
        I'm a developer studying computer science and Italian. I love to swim,
        play board games, mess around with Linux, and visit national parks.
        Welcome to my corner of the Internet!
      </p>
    </Box>
  );
}
