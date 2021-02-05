import { Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Flex padding="30px">
        <Text fontWeight="bold">JP Ungaretti</Text>
        <Spacer />
        <Stack as="nav" direction="row" spacing="30px">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </Stack>
      </Flex>
    </header>
  );
}
