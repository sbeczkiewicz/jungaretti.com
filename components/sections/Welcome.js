import { Heading, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import SocialLink from "../SocialLink";
import styles from "../../styles/Welcome.module.css";

export default function Welcome() {
  return (
    <section className={styles.container}>
      <Heading size="xl">Ciao, I'm JP</Heading>
      <Text fontSize="lg">Student / Developer</Text>
      <SocialLink
        name="GitHub"
        link="https://github.com/jungaretti/"
        icon={<FaGithub />}
      />
    </section>
  );
}
