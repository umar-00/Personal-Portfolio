import { extendTheme } from "@chakra-ui/react";
// import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: "light",
      },
    },
    // Tag: {
    //   baseStyle: {
    //     borderRadius: "30px",
    //   },
    //   variants: {
    //     "custom-tag-color": {
    //       color: "red.700",
    //     },
    //   },
    // },
  },
  fonts: {
    heading: "Noto Sans",
    body: "Poppins",
  },
});

export default theme;
