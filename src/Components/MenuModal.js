import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSpring, useTransition, config, animated } from "react-spring";
import { Sling as Hamburger } from "hamburger-react";

import {
  Box,
  Flex,
  Portal,
  Link,
  ListItem,
  UnorderedList,
  SlideFade,
} from "@chakra-ui/react";

const MenuModal = ({ isOpen }) => {
  const [showA, setShowA] = useState(false);
  const [display, setDisplay] = useState(false); //perhaps use two states, then use timeout on close state
  //   const { menuIsOpen, onToggle } = useDisclosure();
  console.log("showA: ", showA);
  console.log("display: ", display);

  const fadeStyles = useSpring({
    config: { ...config.stiff },
    from: { opacity: 0 },
    to: {
      opacity: showA ? 0.9 : 0,
    },
  });

  // Perhaps use timeout function on setting the state for "closed" a little late. And use // regular "showA && <whatever>" syntax

  return (
    <div>
      {/* <button onClick={() => setShowA((val) => !val)}>Toggle</button> */}
      <div onClick={() => setTimeout(() => setDisplay(!display), 300)}>
        <Hamburger
          toggled={showA}
          toggle={setShowA}
          // toggle={() => setTimeout(setShowA, 1000)}
          rounded
          hideOutline={false}
          size={25}
        />
      </div>

      <animated.div style={fadeStyles}>
        {/* <Portal> */}
        {/* {display && ( */}
        <Flex
          m="auto"
          h="calc(100vh)"
          w="100vw"
          bg="#EDF2F7"
          // opacity="0.9"
          position="absolute"
          left="0"
          // top="88px"
          // pb="88px"
          align="center"
          justify="center"
        >
          {display && (
            <UnorderedList
              listStyleType="none"
              textAlign="center"
              fontSize="4xl"
              ml="0"
            >
              <ListItem pb="20px">
                <Link>About</Link>
              </ListItem>
              <ListItem pb="20px">
                <Link>Projects</Link>
              </ListItem>
              <ListItem pb="20px">
                <Link>Technologies</Link>
              </ListItem>
              <ListItem pb="20px">
                <Link>Contact Me</Link>
              </ListItem>
            </UnorderedList>
          )}
        </Flex>

        {/* </Portal> */}
      </animated.div>
      {/* )} */}
    </div>
  );

  // if (isOpen) {
  //   return (
  //     <animated.div style={fadeStyles}>
  // <Portal>
  //   <Flex
  //     m="auto"
  //     h="calc(100vh - 88px)"
  //     w="100vw"
  //     bg="#EDF2F7"
  //     // opacity="0.9"
  //     position="absolute"
  //     top="88px"
  //     pb="88px"
  //     align="center"
  //     justify="center"
  //   >
  // <UnorderedList
  //   listStyleType="none"
  //   textAlign="center"
  //   fontSize="4xl"
  //   ml="0"
  // >
  //   <ListItem pb="20px">
  //     <Link>About</Link>
  //   </ListItem>
  //   <ListItem pb="20px">
  //     <Link>Projects</Link>
  //   </ListItem>
  //   <ListItem pb="20px">
  //     <Link>Technologies</Link>
  //   </ListItem>
  //   <ListItem pb="20px">
  //     <Link>Contact Me</Link>
  //   </ListItem>
  // </UnorderedList>
  //   </Flex>
  // </Portal>
  //     </animated.div>
  //   );
  // } else return null
};

export default MenuModal;
