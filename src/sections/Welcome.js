import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Welcome() {
  return (
    <Box
      as="section"
      paddingY={[8, null, 12]}
      bgGradient="linear(to-r, cyan.900, cyan.800)"
      color="white"
    >
      <Container>
        <Heading as="h1" size="2xl">
          Ciao, I'm JP!
        </Heading>
        <Text marginTop={[0, null, 2]}>
          I'm a developer studying computer science and Italian. I love to swim,
          play board games, mess around with Linux, and visit national parks.
          Welcome to my corner of the Internet!
        </Text>
      </Container>
    </Box>
  );
}
