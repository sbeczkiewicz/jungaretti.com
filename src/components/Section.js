import { Box, Heading } from "@chakra-ui/react";

export default function Section({ title, children }) {
  return (
    <section>
      <Box as="section">
        <Heading as="h3" size="lg">
          {title}
        </Heading>
        {children}
      </Box>
    </section>
  );
}
