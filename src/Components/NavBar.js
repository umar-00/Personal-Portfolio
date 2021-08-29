/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
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
} from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import DrawerFunction from "./DrawerFunction";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
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
        <DrawerFunction />
      </Box>

      <Box display={{ base: "none", md: "block" }}>
        <Breadcrumb fontSize="1xl" display="block" separator="" fontSize="xl">
          <BreadcrumbItem>
            <BreadcrumbLink>
              <ScrollLink
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
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <ScrollLink
                to="project_section"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Projects
              </ScrollLink>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <ScrollLink
                to="technologies"
                spy={true}
                smooth={true}
                duration={500}
              >
                Technologies
              </ScrollLink>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Spacer display={{ base: "none", md: "flex" }} />

      <Stack
        display={{ base: "none", md: "flex" }}
        direction="row"
        spacing="30px"
      >
        <Link
          href="https://github.com/umar-00"
          isExternal
          _hover={{
            color: "teal.500",
          }}
          // color="blue"
        >
          <AiFillGithub size={40} />
        </Link>
        <Link
          _hover={{
            color: "teal.500",
          }}
        >
          <AiFillLinkedin size={40} />
        </Link>
      </Stack>
    </Flex>
  );
};

export default NavBar;
