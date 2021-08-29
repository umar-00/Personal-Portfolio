import React from "react";
import {
  Box,
  Stack,
  Flex,
  Heading,
  Image,
  Text,
  Button,
  Divider,
  Wrap,
  WrapItem,
  Center,
  Link,
} from "@chakra-ui/react";

const Project = ({
  headingText,
  websiteUrl,
  imageSrc,
  text,
  badge1,
  badge2,
  badge3,
  badge4,
  badge5,
  badge6,
}) => {
  return (
    <Flex
      justify="center"
      align="center"
      width="100%"
      border="2px"
      flexDirection="column"
      borderRadius="15px"
      textAlign="center"
      marginBottom="10"
      backgroundColor="#E3E8ED"
      overflow="hidden"
      maxWidth="800px"

      //   backgroundColor="#EDF2F7"
    >
      <Image src={imageSrc} />
      <Heading pt="3" pb="4" w="80%" fontSize="xl">
        {headingText}
      </Heading>
      <Divider w="90%" />
      <Text pt="3" pb="4" w="80%" color="gray.600">
        {text}
      </Text>
      <Flex mb="5" flexWrap="wrap" justifyContent="center">
        {badge1}
        {badge2}
        {badge3}
        {badge4}
        {badge5}
        {badge6}
      </Flex>
      <Link href={websiteUrl} isExternal _hover="textDecoration: none">
        <Button
          colorScheme="teal"
          // backgroundColor="#FF6666"
          mb="5"
          variant="solid"
          borderRadius="10px"
          style={{ textDecoration: "none" }}
        >
          Visit Website
        </Button>
      </Link>
    </Flex>
  );
};

export default Project;
