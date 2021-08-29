import React, { useRef } from "react";
import {
  Drawer,
  Box,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  IconButton,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";

function DrawerFunction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        aria-label="Open Menu"
        size="lg"
        mr={2}
        icon={<GiHamburgerMenu />}
        onClick={onOpen} // added line
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="#EDF2F7">
          <DrawerCloseButton />
          {/* <DrawerHeader>Create your account</DrawerHeader> */}
          <DrawerBody>
            {/* <Input placeholder="Type here..." /> */}
            <Box marginTop="calc(100vh / 4)">
              <UnorderedList
                listStyleType="none"
                textAlign="center"
                fontSize="4xl"
                ml="0"
              >
                <ListItem pb="20px">
                  <Link>About Me</Link>
                </ListItem>
                <ListItem pb="20px">
                  <Link>Projects</Link>
                </ListItem>
                <ListItem pb="20px">
                  <Link>Technologies</Link>
                </ListItem>
                <ListItem pb="20px">
                  <Link>Contact Me</Link>
                </ListItem>
              </UnorderedList>
            </Box>
          </DrawerBody>
          <DrawerFooter>
            {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerFunction;
