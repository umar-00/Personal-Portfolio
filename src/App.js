import "./App.css";
import { Box } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import ProjectSection from "./Components/ProjectSection";
import Technologies from "./Components/Technologies";

function App() {
  return (
    <Box bg="#EDF2F7">
      <NavBar />
      <About />
      <ProjectSection />
      <Technologies />
    </Box>
  );
}

export default App;
