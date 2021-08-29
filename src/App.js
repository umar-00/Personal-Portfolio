import "./App.css";
import { Box } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import ProjectSection from "./Components/ProjectSection";
import Technologies from "./Components/Technologies";
import { Element } from "react-scroll";
import Footer from "./Components/Footer";

function App() {
  return (
    <Box bg="#EDF2F7">
      <NavBar />

      <Element name="about_me">
        <About />
      </Element>

      <Element name="project_section">
        <ProjectSection />
      </Element>

      <Element name="technologies">
        <Technologies />
      </Element>

      <Footer></Footer>
    </Box>
  );
}

export default App;
