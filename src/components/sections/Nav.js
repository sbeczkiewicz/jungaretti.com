import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";

export default function Nav() {
  return (
    <nav>
      <Flex>
        <Box>
          <Text>JP Ungaretti</Text>
        </Box>
        <Spacer />
        <Box>
          <Link>Home</Link>
          <Link>Blog</Link>
        </Box>
      </Flex>
    </nav>
  );
}
