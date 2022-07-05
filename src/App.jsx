import styled from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const IntroShape = styled.div`
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
`;

const App = () => {
  return (
    <Container>
      <Navbar />
      <Intro />
      <IntroShape />
    </Container>
  );
};

export default App;
