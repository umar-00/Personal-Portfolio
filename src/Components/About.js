import React from "react";
import { Box, Flex, HStack, Image, Text, Heading, Button, Link, Tooltip, Center } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { FaFileDownload } from "react-icons/fa";
import resumePicture from "../Images/resumePicture.jpg";

const About = () => {
  return (
    <Box p="5" maxW="1080px" margin="auto">
      <Flex align="center">
        <Box>
          <Text pb="4" fontSize="1.25rem">
            Welcome To My Personal Portfolio! I am
          </Text>
          <Center>
            <Image
              border="2px"
              display={{ base: "block", md: "none" }}
              src={resumePicture}
              borderRadius="full"
              boxSize="180px"
              marginBottom="15px"
            ></Image>
          </Center>
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
          <Text fontSize="1rem" display="inline">
            {"I am currently a "}
          </Text>
          <Tooltip label="Bachelor BSc" placement="top" fontSize="lg">
            <Text as="span" color="teal.500" fontSize="1rem">
              {"Computer Science student in Germany "}
            </Text>
          </Tooltip>
          <Text fontSize="1rem" display="inline">
            {"who loves to do Front End Web Development! I have "}
            <Text as="span" color="teal.500" fontWeight="bold">
              1.5+ years of experience
            </Text>{" "}
            working with Angular and I am motivated to learn any new technology that can help me become a better web
            developer! HTML and CSS come natural to me, and I am also very skilled with JavaScript, Angular, React, UI
            libraries and state management libraries such as NgRx, React-Redux and Zustand.
          </Text>

          <HStack spacing="10px">
            <Button display="block" mt="6" mb="6" _hover="backgroundColor: none" p="0">
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

            <Button display="block" mt="6" mb="6" _hover="backgroundColor: none" p="0">
              <Link
                href="https://umar-00.github.io/"
                _hover="textDecoration: none"
                display="flex"
                isExternal
                backgroundColor="#031D44"
                variant="solid"
                borderRadius="10px"
                p="3"
                color="white"
              >
                <FaFileDownload style={{ marginRight: "5px", marginTop: "1px" }} />
                {" Download Resume"}
              </Link>
            </Button>
          </HStack>
        </Box>

        <Image
          // marginTop="50px"
          // paddingTop="50px"
          // position="absolute"
          border="2px"
          marginLeft="30px"
          display={{ base: "none", md: "block" }}
          src={resumePicture}
          borderRadius="full"
          boxSize="250px"
        ></Image>
      </Flex>

      <HStack display={{ base: "block", md: "none" }} spacing="10px">
        <Link href="https://github.com/umar-00" isExternal>
          <AiFillGithub size={40} style={{ display: "inline" }} />
        </Link>
        <Link href="https://www.linkedin.com/in/umar-00" isExternal>
          <AiFillLinkedin size={40} style={{ display: "inline" }} />
        </Link>
      </HStack>

      <Box borderBottom="4px" w="15%" mt="10"></Box>
    </Box>
  );
};

export default About;
