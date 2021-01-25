import { Wrap, WrapItem } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import SocialLink from "./SocialLink";

export default function Social() {
  return (
    <Wrap>
      <WrapItem>
        <SocialLink
          name="GitHub"
          link="https://github.com/jungaretti/"
          icon={<FaGithub />}
        />
      </WrapItem>
    </Wrap>
  );
}
