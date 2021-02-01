import { Box, Flex, Heading, Spacer, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Nav() {
  return (
    <Flex as="nav" marginY="12px">
      <Box>
        <Heading size="md">JP Ungaretti</Heading>
      </Box>
      <Spacer />
      <Stack direction="row">
        <Link href="/">Home</Link>
        {/* <Link href="/blog">Blog</Link> */}
      </Stack>
    </Flex>
  );
}
