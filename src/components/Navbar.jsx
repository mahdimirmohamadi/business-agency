import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  /* position: fixed; */
  /* z-index: +1; */
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`;
const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-right: 30px;
  color: gray;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  font-weight: bold;
  background-color: crimson;
  color: white;
  border-radius: 10px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Agency</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Contact</MenuItem>
            <MenuItem>Pricing</MenuItem>
          </Menu>
        </Left>
        <Button>JOIN US TODAY!</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
