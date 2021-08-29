import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Tag,
  TagLabel,
} from "@chakra-ui/react";

// Icons
import { FaReact, FaHtml5, FaGithub, FaServer } from "react-icons/fa";
import { ImCss3 } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiStyledComponents,
  SiMaterialUi,
  SiRedux,
  SiVisualstudiocode,
  SiGnubash,
  SiFirebase,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";
import { BsFillLightningFill } from "react-icons/bs";
// import { AiOutlineCloudServer } from "react-icons/ai";

const Technologies = () => {
  return (
    <Flex p="5" maxW="1080px" margin="auto" flexDirection="column">
      <Heading pb="6" fontSize="2.25rem" fontWeight="bolder">
        Technologies
      </Heading>
      <Text pb="6" fontSize="1.25rem" color="gray.600">
        {"As a front end developer, I have worked with a range of "}
        <Text as="span" color="#319795">
          JavaScript
        </Text>
        {" and "}
        <Text as="span" color="#319795">
          React.js
        </Text>
        {" libraries. Here are a few technologies that I am skilled in:"}
      </Text>

      <Box border="1px" p="3" borderRadius="15px" mb="10">
        <Tabs variant="solid-rounded" colorScheme="teal" isFitted size="sm">
          <TabList>
            <Tab p={{ md: "1" }} fontSize={{ md: "1.5rem" }}>
              Web Dev
            </Tab>
            <Tab p={{ md: "1" }} fontSize={{ md: "1.5rem" }}>
              UI Frameworks
            </Tab>
            <Tab p={{ md: "1" }} fontSize={{ md: "1.5rem" }}>
              Dev Tools
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex flexWrap="wrap" justifyContent="space-around">
                <Tag
                  variant="outline"
                  // variant="custom-tag-color"
                  size="lg"
                  colorScheme="gray"
                  color="gray.700"
                  // color="gray.700"
                  borderRadius="0px"
                  // fontWeight="bold"
                  m="2"
                  p="2"
                >
                  <FaHtml5 size={30} />
                  <TagLabel ml="1" fontSize="lg">
                    HTML
                  </TagLabel>
                </Tag>
                <Tag
                  variant="outline"
                  size="lg"
                  colorScheme="gray"
                  color="gray.700"
                  borderRadius="0px"
                  m="2"
                  p="2"
                >
                  <ImCss3 size={30} />
                  <TagLabel ml="1" fontSize="lg">
                    CSS
                  </TagLabel>
                </Tag>
                <Tag
                  variant="outline"
                  size="lg"
                  colorScheme="gray"
                  color="gray.700"
                  borderRadius="0px"
                  m="2"
                  p="2"
                >
                  <IoLogoJavascript size={30} />
                  <TagLabel ml="1" fontSize="lg">
                    JavaScript
                  </TagLabel>
                </Tag>
                <Tag
                  variant="outline"
                  size="lg"
                  colorScheme="gray"
                  color="gray.700"
                  borderRadius="0px"
                  m="2"
                  p="2"
                >
                  <FaReact size={30} />
                  <TagLabel ml="1" fontSize="lg">
                    React.js
                  </TagLabel>
                </Tag>
                <Tag
                  variant="outline"
                  size="lg"
                  colorScheme="gray"
                  color="gray.700"
                  borderRadius="0px"
                  m="2"
                  p="2"
                >
                  <SiRedux size={30} />
                  <TagLabel ml="1" fontSize="lg">
                    Redux
                  </TagLabel>
                </Tag>
                <Tag
                  variant="outline"
                  size="lg"
                  colorScheme="gray"
                  color="gray.700"
                  borderRadius="0px"
                  m="2"
                  p="2"
                >
                  <FaServer size={30} />
                  <TagLabel ml="1" fontSize="lg">
                    REST API
                  </TagLabel>
                </Tag>
                <Tag
                  variant="outline"
                  size="lg"
                  colorScheme="gray"
                  color="gray.700"
                  borderRadius="0px"
                  m="2"
                  p="2"
                >
                  <SiFirebase size={30} />
                  <TagLabel ml="1" fontSize="lg">
                    Firebase
                  </TagLabel>
                </Tag>
              </Flex>
            </TabPanel>

            {/* Second Tab Content */}

            <TabPanel>
              <Flex flexWrap="wrap" justifyContent="space-around">
                <Tag
                  variant="outline"
                  size="lg"
                  colorScheme="gray"
                  color="gray.700"
                  borderRadius="0px"
                  m="2"
                  p="2"
                >
                  <BsFillLightningFill size={30} />
                  <TagLabel ml="1" fontSize="lg">
                    Chakra UI
                  </TagLabel>
                </Tag>
                <Tag
                  variant="outline"
                  size="lg"
                  colorScheme="gray"
                  color="gray.700"
                  borderRadius="0px"
                  m="2"
                  p="2"
                >
                  <SiMaterialUi size={30} />
                  <TagLabel ml="1" fontSize="lg">
                    Material UI
                  </TagLabel>
                </Tag>
                <Tag
                  variant="outline"
                  size="lg"
                  colorScheme="gray"
                  color="gray.700"
                  borderRadius="0px"
                  m="2"
                  p="2"
                >
                  <SiStyledComponents size={30} />
                  <TagLabel ml="1" fontSize="lg">
                    {`Styled Components`}
                  </TagLabel>
                </Tag>
                <Tag
                  variant="outline"
                  size="lg"
                  colorScheme="gray"
                  color="gray.700"
                  borderRadius="0px"
                  m="2"
                  p="2"
                >
                  <SiTailwindcss size={30} />
                  <TagLabel ml="1" fontSize="lg">
                    TailWind CSS
                  </TagLabel>
                </Tag>
                <Tag
                  variant="outline"
                  size="lg"
                  colorScheme="gray"
                  color="gray.700"
                  borderRadius="0px"
                  m="2"
                  p="2"
                >
                  <SiBootstrap size={30} />
                  <TagLabel ml="1" fontSize="lg">
                    Bootstrap
                  </TagLabel>
                </Tag>
              </Flex>
            </TabPanel>

            {/* Third Tab Content */}

            <TabPanel>
              <Flex flexWrap="wrap" justifyContent="space-around">
                <Tag
                  variant="outline"
                  size="lg"
                  colorScheme="gray"
                  color="gray.700"
                  borderRadius="0px"
                  m="2"
                  p="2"
                >
                  <SiVisualstudiocode size={30} />
                  <TagLabel ml="1" fontSize="lg">
                    VS Code
                  </TagLabel>
                </Tag>
                <Tag
                  variant="outline"
                  size="lg"
                  colorScheme="gray"
                  color="gray.700"
                  borderRadius="0px"
                  m="2"
                  p="2"
                >
                  <FaGithub size={30} />
                  <TagLabel ml="1" fontSize="lg">
                    GitHub
                  </TagLabel>
                </Tag>
                <Tag
                  variant="outline"
                  size="lg"
                  colorScheme="gray"
                  color="gray.700"
                  borderRadius="0px"
                  m="2"
                  p="2"
                >
                  <SiGnubash size={30} />
                  <TagLabel ml="1" fontSize="lg">
                    Bash
                  </TagLabel>
                </Tag>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      {/* <Box borderBottom="4px" w="15%" mt="5"></Box> */}
    </Flex>
  );
};

export default Technologies;
