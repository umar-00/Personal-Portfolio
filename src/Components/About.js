import React from "react";
import {
  Box,
  HStack,
  Text,
  Heading,
  Button,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { FaFileDownload } from "react-icons/fa";

const About = () => {
  return (
    <Box p="5" maxW="1080px" margin="auto">
      <Text pb="4" fontSize="1.25rem">
        Welcome To My Personal Portfolio! I am
      </Text>
      <Heading pb="3" fontSize="2.25rem">
        {"Muhammad "}
        <Text as="span" color="#319795" fontSize="3rem">
          {"Umar "}
        </Text>
        {"Shakeel"}
      </Heading>
      <Heading color="#319795" fontSize="2xl" pb="3">
        Front End Developer
      </Heading>
      <Text fontSize="1.25rem" display="inline">
        {"I am currently a "}
      </Text>
      <Tooltip label="Bachelor BSc, 3rd Semester" placement="top" fontSize="lg">
        <Text as="span" color="teal.500" fontSize="1.25rem">
          {"Computer Science student in Germany "}
        </Text>
      </Tooltip>
      <Text fontSize="1.25rem" display="inline">
        {"who loves to do Front End Web Development! I am a "}
        <Text as="span" color="teal.500" fontWeight="bold">
          fast learner
        </Text>{" "}
        and I am motivated to learn any new technology that can help me become a
        better web developer! HTML and CSS come natural to me, and I am also
        very skilled with all the fundamentals of JavaScript, ReactJS and its
        libraries.
      </Text>

      <HStack spacing="10px">
        <Button
          display="block"
          mt="6"
          mb="6"
          _hover="backgroundColor: none"
          p="0"
        >
          <Link
            href="mailto:umarshakeel002@gmail.com"
            _hover="textDecoration: none"
            display="flex"
            // border="2px"
            backgroundColor="#FF6666"
            variant="solid"
            borderRadius="10px"
            p="3"
          >
            <AiFillMail style={{ marginRight: "5px", marginTop: "1px" }} />
            {" Email Me"}
          </Link>
        </Button>

        <Button
          display="block"
          mt="6"
          mb="6"
          _hover="backgroundColor: none"
          p="0"
        >
          <Link
            href="https://umar-00.github.io/"
            _hover="textDecoration: none"
            display="flex"
            isExternal
            // border="2px"
            // backgroundColor="#893AE4"
            backgroundColor="#031D44"
            variant="solid"
            borderRadius="10px"
            p="3"
            color="white"
          >
            <FaFileDownload style={{ marginRight: "5px", marginTop: "1px" }} />
            {" Download CV"}
          </Link>
        </Button>
      </HStack>

      <HStack display={{ base: "block", md: "none" }} spacing="10px">
        <Link href="https://github.com/umar-00" isExternal>
          <AiFillGithub size={40} style={{ display: "inline" }} />
        </Link>
        <Link>
          <AiFillLinkedin size={40} style={{ display: "inline" }} />
        </Link>
      </HStack>

      <Box borderBottom="4px" w="15%" mt="10"></Box>
    </Box>
  );
};

export default About;
