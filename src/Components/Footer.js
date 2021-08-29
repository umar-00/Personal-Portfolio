import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box p="5" maxW="1080px" margin="auto" fontSize="sm" textAlign="center">
      <Text>
        This app was made using React.js and Chakra UI. To view the GitHub
        repository for this website,
      </Text>
      <Link
        href="https://github.com/umar-00/Personal-Portfolio"
        color="teal"
        isExternal
      >
        {"click here."}
      </Link>
    </Box>
  );
};

export default Footer;
