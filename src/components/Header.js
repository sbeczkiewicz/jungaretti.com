import { Container, Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Container py={4}>
        <Flex>
          <Text fontWeight="bold">JP Ungaretti</Text>
          <Spacer />
          <nav>
            <Stack direction="row" spacing={[2, null, 4]}>
              <Link href="/">Home</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </Stack>
          </nav>
        </Flex>
      </Container>
    </header>
  );
}
