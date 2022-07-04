import styled from "styled-components";
import Navbar from "./components/Navbar";

const Container = styled.div`
  height: 100vh;
`;

const Wrapper = styled.div`
  padding: 20px 10px;
`;
const App = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  );
};

export default App;
