import {
  Button,
  ListItem,
  UnorderedList,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export default function Social() {
  return (
    <UnorderedList ml="0" styleType="none">
      <ListItem display="inline-block">
        <Wrap mt="16px">
          <WrapItem>
            <Button
              variant="solid"
              as="a"
              href="https://github.com/jungaretti/"
              target="_blank"
            >
              GitHub
            </Button>
          </WrapItem>
        </Wrap>
      </ListItem>
    </UnorderedList>
  );
}
