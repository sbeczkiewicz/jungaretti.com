import { Box, Divider, Link, Text } from "@chakra-ui/react";
import styles from "../../styles/Footer.module.css";

export default function Footer() {
  return (
    <Box as="footer" className={styles.container}>
      <Divider className={styles.divider} />
      <Box>
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
    </Box>
  );
}
