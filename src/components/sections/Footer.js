import { Divider, Text, Link, Box } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer">
      <Divider marginTop="12px" marginBottom="4px" />
      <Text>
        Crafted with{" "}
        <Link href="https://nextjs.org/" isExternal>
          Next.js
        </Link>{" "}
        and{" "}
        <Link href="https://chakra-ui.com/" isExternal>
          Chakra UI
        </Link>{" "}
        in Madison, Wisconsin.
      </Text>
      <Text>MIT License © 2021 James Ungaretti.</Text>
    </Box>
  );
}
