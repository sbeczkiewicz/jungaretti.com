import { Box, Heading, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import SocialLink from "../SocialLink";

export default function Welcome() {
  return (
    <Box as="section" marginY="20px">
      <Heading size="xl">Ciao, I'm JP</Heading>
      <Text fontSize="lg">Student / Developer</Text>
      <SocialLink
        name="GitHub"
        link="https://github.com/jungaretti/"
        icon={<FaGithub />}
      />
    </Box>
  );
}
