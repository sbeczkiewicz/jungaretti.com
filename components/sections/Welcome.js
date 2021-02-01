import { Box, Heading, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import SocialLink from "../SocialLink";

export default function Welcome() {
  return (
    <Box
      as="section"
      marginY="8px"
      paddingX="12px"
      bgGradient="linear(to-r, cyan.800, blue.900)"
      borderRadius="md"
    >
      <Box paddingTop="3rem">
        <Heading size="xl" color="white">
          Ciao, I'm JP
        </Heading>
        <Text fontSize="md" color="white">
          Student / Developer
        </Text>
      </Box>
      <Box marginTop="16px" paddingBottom="2rem">
        <SocialLink
          name="GitHub"
          link="https://github.com/jungaretti/"
          icon={<FaGithub />}
        />
      </Box>
    </Box>
  );
}
