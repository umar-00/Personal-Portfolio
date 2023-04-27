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

import RxJsSvg from '../Images/SVGComponents/RxJsSvg.js';
import NgRxSvg from '../Images/SVGComponents/NgRxSvg.js';

// Icons
import { FaReact, FaHtml5, FaGithub, FaServer, FaAngular, FaMap } from "react-icons/fa";
import { ImCss3 } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiStyledcomponents,
  SiRedux,
  SiVisualstudiocode,
  SiGnubash,
  SiFirebase,
  SiTailwindcss,
  SiBootstrap,
  SiSupabase,
  SiPostgresql,
  SiMaterialdesign
} from "react-icons/si";
import { BsFillLightningFill } from "react-icons/bs";

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
          React
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
              <Flex flexWrap="wrap" justifyContent="center">
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
                  <FaAngular size={30} />
                  <TagLabel ml="1" fontSize="lg">
                    Angular
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
                  {/* <img id="rxjs-svg" /> */}
                  <RxJsSvg />
                  <TagLabel ml="1" fontSize="lg">
                    RxJs
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
                    React
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
                  <NgRxSvg />
                  <TagLabel ml="1" fontSize="lg">
                    NgRx
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
                  <SiSupabase size={30} />
                  <TagLabel ml="1" fontSize="lg">
                    Supabase
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
                  <SiPostgresql size={30} />
                  <TagLabel ml="1" fontSize="lg">
                    PostgreSQL
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

                <Tag
                  variant="outline"
                  size="lg"
                  colorScheme="gray"
                  color="gray.700"
                  borderRadius="0px"
                  m="2"
                  p="2"
                >
                  <FaMap size={30} />
                  <TagLabel ml="1" fontSize="lg">
                    Google Maps API
                  </TagLabel>
                </Tag>
              </Flex>
            </TabPanel>

            {/* Second Tab Content */}

            <TabPanel>
              <Flex flexWrap="wrap" justifyContent="center" gridColumnGap={4}>
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
                  <SiMaterialdesign size={30} />
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
                  <SiStyledcomponents size={30} />
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
              <Flex flexWrap="wrap" justifyContent="center" gridColumnGap={12}>
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
