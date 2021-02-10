import { Heading, Stack } from "@chakra-ui/react";

export default function FooterColumn({ title, children }) {
  return (
    <Stack>
      <Heading as="h6" size="sm">
        {title}
      </Heading>
      <Stack spacing={0}>{children}</Stack>
    </Stack>
  );
}
