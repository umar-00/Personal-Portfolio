import React from "react";
import {
  Drawer,
  Box,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

import { GiHamburgerMenu } from "react-icons/gi";

function DrawerFunction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        _focus="outline: none"
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
                  <Link>
                    <ScrollLink
                      onClick={onClose}
                      // activeClass="active"
                      // className="test1"
                      to="about_me"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-50}
                    >
                      About Me
                    </ScrollLink>
                  </Link>
                </ListItem>
                <ListItem pb="20px">
                  <Link>
                    <ScrollLink
                      onClick={onClose}
                      to="project_section"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-50}
                    >
                      Projects
                    </ScrollLink>
                  </Link>
                </ListItem>
                <ListItem pb="20px">
                  <Link>
                    <ScrollLink
                      onClick={onClose}
                      to="technologies"
                      spy={true}
                      smooth={true}
                      duration={500}
                      // offset={-50}
                    >
                      Technologies
                    </ScrollLink>
                  </Link>
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
