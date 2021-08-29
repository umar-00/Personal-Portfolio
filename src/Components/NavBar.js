/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Link,
  Stack,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  useDisclosure,
  Button,
  Lorem,
} from "@chakra-ui/react";
import { Sling as Hamburger } from "hamburger-react";
// import { FaPager } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import MenuModal from "./MenuModal";
import DrawerFunction from "./DrawerFunction";
import {
  Link as ScrollLink,
  Element,
  animateScroll as scroll,
} from "react-scroll";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  //console.log(isOpen);

  return (
    <Flex
      backgroundColor="#EDF2F7"
      p="3"
      align="center"
      maxW="1280px"
      margin="auto"
      mb="6"
      alignSelf="flex-start"
      position="sticky"
      top="0"
      zIndex="3"
    >
      <DiCssdeck size={30} />
      <Text fontSize="2xl" ml="1">
        Portfolio
      </Text>
      <Spacer />
      <Box display={{ md: "none" }}>
        {/* <Hamburger
          toggled={isMenuOpen}
          toggle={setIsMenuOpen}
          onToggle={(toggled) => {
            if (toggled) {
              onToggle();
            } else {
              onToggle();
            }
          }}
          rounded
          hideOutline={false}
          size={25}
        /> */}
        {/* <Button onClick={onToggle}>Menu</Button> */}

        {/* <MenuModal isOpen={isOpen} /> */}

        <DrawerFunction />

        {/* {isOpen && (
          <SlideFade in={isOpen} offsetY="20px">
            <Box>
              <MenuModal />
            </Box>
          </SlideFade>
        )} */}
      </Box>
      <Box display={{ base: "none", md: "block" }}>
        <Breadcrumb fontSize="1xl" display="block" separator="">
          <BreadcrumbItem>
            <BreadcrumbLink>Things</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>Projects</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Technologies</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Contact Me</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Spacer display={{ base: "none", md: "flex" }} />

      <Stack
        display={{ base: "none", md: "flex" }}
        direction="row"
        spacing="30px"
      >
        <Link href="https://github.com/umar-00" isExternal>
          <AiFillGithub size={40} />
        </Link>
        <Link>
          <AiFillLinkedin size={40} />
        </Link>
      </Stack>
    </Flex>
  );
};

export default NavBar;
