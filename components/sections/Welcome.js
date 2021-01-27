import { Box, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import SocialLink from "../SocialLink";

export default function Welcome() {
  return (
    <Box as="section">
      <Box>
        <Heading>Ciao, I'm JP Ungaretti.</Heading>
        <Text>
          I'm a developer studying computer science and Italian. I love to swim,
          play board games, mess around with Linux, and explore nature. Welcome
          to my corner of the Internet!
        </Text>
      </Box>
      <Wrap>
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
  );
}
