import { Container, Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Container>
        <Flex>
          <Text fontWeight="bold">JP Ungaretti</Text>
          <Spacer />
          <Stack as="nav" direction="row">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </Stack>
        </Flex>
      </Container>
    </header>
  );
}
