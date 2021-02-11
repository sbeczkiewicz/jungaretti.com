import {
  Box,
  Divider,
  Heading,
  Link as ExternalLink,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

function FooterColumn({ title, children }) {
  return (
    <Stack spacing={2}>
      <Heading as="h6" size="sm">
        {title}
      </Heading>
      <Stack spacing={0}>{children}</Stack>
    </Stack>
  );
}

export default function Footer() {
  return (
    <Box as="footer" marginY={4}>
      <Divider marginBottom={4} />
      <Stack spacing={8} direction={["column", null, "row"]}>
        <FooterColumn title="Here">
          <Link href="/">Home</Link>
          {/* <Link href="/blog">Blog</Link> */}
          {/* <Link href="/contact">Contact</Link> */}
        </FooterColumn>
        <FooterColumn title="There">
          <ExternalLink href="https://github.com/jungaretti/" isExternal>
            GitHub
          </ExternalLink>
          <ExternalLink href="https://twitter.com/jpungaretti" isExternal>
            Twitter
          </ExternalLink>
          <ExternalLink
            href="https://www.youtube.com/user/jungaretti"
            isExternal
          >
            YouTube
          </ExternalLink>
        </FooterColumn>
        <FooterColumn title="Anywhere">
          <Text>
            Crafted with Next.js and Chakra UI in Madison, Wisconsin. Inspired
            by Lee Robinson, Griko Nibras, and Alec Lomas.
          </Text>
        </FooterColumn>
      </Stack>
    </Box>
  );
}
