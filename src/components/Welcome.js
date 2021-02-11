import { Box, Container, Heading } from "@chakra-ui/react";

export default function Welcome() {
  return (
    <Box
      as="section"
      paddingY={[8, null, 12]}
      backgroundColor="black"
      color="white"
    >
      <Container>
        <Heading>Ciao, I'm JP!</Heading>
        <p>
          I'm a developer studying computer science and Italian. I love to swim,
          play board games, mess around with Linux, and visit national parks.
          Welcome to my corner of the Internet!
        </p>
      </Container>
    </Box>
  );
}
