import { Box, Divider, Heading, Stack } from "@chakra-ui/react";

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
      <Stack spacing={4} direction={["column", null, "row"]}>
        <FooterColumn title="Here">
          <span>Blog</span>
          <span>Home</span>
          <span>Contact</span>
        </FooterColumn>
        <FooterColumn title="There">
          <span>GitHub</span>
          <span>YouTube</span>
          <span>Twitter</span>
        </FooterColumn>
        <FooterColumn title="Anywhere">
          <span>
            Crafted with Next.js and Chakra UI in Madison, Wisconsin. Inspired
            by Lee Robinson, Griko Nibras, and Alec Lomas.
          </span>
        </FooterColumn>
      </Stack>
    </Box>
  );
}
