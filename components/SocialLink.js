import { Button } from "@chakra-ui/react";

export default function SocialLink({ name, link, icon }) {
  return (
    <Button leftIcon={icon} as="a" href={link} target="_blank">
      {name}
    </Button>
  );
}
