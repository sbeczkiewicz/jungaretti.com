import { Button, IconButton, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export default function SocialLink({ name, link, icon }) {
  return (
    <IconButton
      as={Link}
      aria-label="GitHub"
      href={link}
      icon={<FaGithub />}
      isExternal
    >
      {name}
    </IconButton>
  );
}
