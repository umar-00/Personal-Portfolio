import React from "react";
import { Box, Flex, Heading, Text, Badge, Link } from "@chakra-ui/react";
import Project from "./Project";

// Images and icons
import movieWebsiteImage from "../Images/movieWebsite.png";
import disasterTrackerWebsiteImage from "../Images/disasterTrackerWebsite.png";
import twitterCloneWebsiteImage from "../Images/twitterCloneWebsite.png";
import redditSearchWebsiteImage from "../Images/redditSearchWebsite.png";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <Box p="5" maxW="1080px" margin="auto">
      <Heading pb="6" fontSize="2.25rem" fontWeight="bolder">
        Projects
      </Heading>
      <Text pb="10" fontSize="1.25rem" color="gray.600">
        These are some projects I have worked on recently. You can also find
        them at my{" "}
        <Link
          color="#319795"
          href="https://github.com/umar-00"
          isExternal
          // style={{ outline: "0" }}
          _active="outline: 0"
          _focus="outline: 0"
        >
          {" GitHub link "}
          <AiFillGithub
            size={24}
            style={{ display: "inline", marginBottom: "6px" }}
          ></AiFillGithub>
        </Link>
      </Text>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        flexWrap="wrap"
        justifyContent="space-around"
      >
        <Project
          headingText={"React Movie Database Website"}
          imageSrc={movieWebsiteImage}
          websiteUrl={"https://reactjs-movie-website.netlify.app/"}
          text={
            "Fully responsive website that renders a huge database of movies. The homepage features the current most popular movies and a search functionality to search any movie. Each movie element is clickable and displays movie information and a list of its actors. Made using:"
          }
          badge1={
            <Badge
              colorScheme="gray"
              fontSize="1rem"
              p="2"
              variant="outline"
              m="2"
            >
              ReactJS
            </Badge>
          }
          badge2={
            <Badge
              colorScheme="gray"
              fontSize="1rem"
              p="2"
              variant="outline"
              m="2"
            >
              REST API
            </Badge>
          }
          badge3={
            <Badge
              colorScheme="gray"
              fontSize="1rem"
              p="2"
              variant="outline"
              m="2"
            >
              Fetch API
            </Badge>
          }
          badge4={
            <Badge
              colorScheme="gray"
              fontSize="1rem"
              p="2"
              variant="outline"
              m="2"
            >
              React Router
            </Badge>
          }
          badge5={
            <Badge
              colorScheme="gray"
              fontSize="1rem"
              p="2"
              variant="outline"
              m="2"
            >
              Styled Components
            </Badge>
          }
        />

        <Project
          headingText={"Twitter Clone"}
          websiteUrl={"https://twitter-clone-react-js.web.app/"}
          imageSrc={twitterCloneWebsiteImage}
          text={
            "Twitter Clone with the functionality to sign-up/log-in using Google Authentication. Each logged-in user has a unique profile, which can be used to send new Tweets and to view other user's Tweets. Tweets are sent and retrieved from a Google Firebase server in real time. Made using:"
          }
          badge1={
            <Badge
              colorScheme="gray"
              fontSize="1rem"
              p="2"
              variant="outline"
              m="2"
            >
              ReactJS
            </Badge>
          }
          badge2={
            <Badge
              colorScheme="gray"
              fontSize="1rem"
              p="2"
              variant="outline"
              m="2"
            >
              Google Firebase
            </Badge>
          }
          badge3={
            <Badge
              colorScheme="gray"
              fontSize="1rem"
              p="2"
              variant="outline"
              m="2"
            >
              Redux
            </Badge>
          }
          badge4={
            <Badge
              colorScheme="gray"
              fontSize="1rem"
              p="2"
              variant="outline"
              m="2"
            >
              Redux-Persist
            </Badge>
          }
          badge5={
            <Badge
              colorScheme="gray"
              fontSize="1rem"
              p="2"
              variant="outline"
              m="2"
            >
              React Router
            </Badge>
          }
          badge6={
            <Badge
              colorScheme="gray"
              fontSize="1rem"
              p="2"
              variant="outline"
              m="2"
            >
              TailWind CSS
            </Badge>
          }
        />

        <Project
          headingText={"Disaster Event Tracker"}
          websiteUrl={"https://disaster-tracker-reactjs.netlify.app/"}
          imageSrc={disasterTrackerWebsiteImage}
          text={
            "Powered by EONET API from NASA. Responsive website that accurately renders real-time natural disaster events (wildfires, storms and active volcanoes) on world map provided by Google Map. Clicking on an event marker pops up a modal box containing more information about the disaster. Made using:"
          }
          badge1={
            <Badge
              colorScheme="gray"
              fontSize="1rem"
              p="2"
              variant="outline"
              m="2"
            >
              ReactJS
            </Badge>
          }
          badge2={
            <Badge
              colorScheme="gray"
              fontSize="1rem"
              p="2"
              variant="outline"
              m="2"
            >
              REST API
            </Badge>
          }
          badge3={
            <Badge
              colorScheme="gray"
              fontSize="1rem"
              p="2"
              variant="outline"
              m="2"
            >
              Fetch API
            </Badge>
          }
          badge4={
            <Badge
              colorScheme="gray"
              fontSize="1rem"
              p="2"
              variant="outline"
              m="2"
            >
              Google Maps JavaScript API
            </Badge>
          }
        />

        <Project
          headingText={"Reddit Search"}
          websiteUrl={"https://js-reddit-search.netlify.app/"}
          imageSrc={redditSearchWebsiteImage}
          text={
            "Vanilla JavaScript used for searching and displaying Reddit posts by requesting Reddit API for results. Made using:"
          }
          badge1={
            <Badge
              colorScheme="gray"
              fontSize="1rem"
              p="2"
              variant="outline"
              m="2"
            >
              JavaScript
            </Badge>
          }
          badge2={
            <Badge
              colorScheme="gray"
              fontSize="1rem"
              p="2"
              variant="outline"
              m="2"
            >
              Reddit API
            </Badge>
          }
          badge3={
            <Badge
              colorScheme="gray"
              fontSize="1rem"
              p="2"
              variant="outline"
              m="2"
            >
              Bootstrap
            </Badge>
          }
          badge4={
            <Badge
              colorScheme="gray"
              fontSize="1rem"
              p="2"
              variant="outline"
              m="2"
            >
              HTML
            </Badge>
          }
        />
      </Flex>

      {/* <SimpleGrid columns={2} spacing={10}>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid> */}
      <Box borderBottom="4px" w="15%" mt="5"></Box>
    </Box>
  );
};

export default Projects;
