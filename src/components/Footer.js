import { Container, Divider, Stack } from "@chakra-ui/react";
import FooterColumn from "./FooterColumn";

export default function Footer() {
  return (
    <footer>
      <Container maxW="2xl">
        <Divider mt={4} mb={2} />
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
            <span>MIT License © 2021 James Ungaretti.</span>
          </FooterColumn>
        </Stack>
      </Container>
    </footer>
  );
}
