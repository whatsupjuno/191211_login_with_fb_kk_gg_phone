import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import SideNavLogo from "./SideNavLogo";

const SideNavPresenter = ({ items }) => {
  const handleClick = (e, item) => {
    console.log(`this is ${item.name}`);
  };

  return (
    <Container>
      <SideNavLogo />
      <List>
        <Wrapper>
          {items &&
            items.map((item, index) => {
              return (
                <Menu>
                  <LinkNav
                    key={index}
                    to={item.path}
                    onClick={e => handleClick(e, item)}
                  >
                    <Icon src={item.icon} />
                    <Text>{item.name}</Text>
                  </LinkNav>
                </Menu>
              );
            })}
        </Wrapper>
      </List>
    </Container>
  );
};

export default SideNavPresenter;

const Container = styled("nav")`
  position: fixed;
  top: 0;
  left: 0;
  width: 180px;
  height: 100%;
  background: #323232;
  z-index: 1000;
`;

const List = styled("ul")`
  margin: 10px;
  padding: 0;
  width: 100%;
  list-style: none;
`;

const Wrapper = styled("li")`
  position: absolute;
  left: 0;
  width: 100%;
  height: auto;
  text-align: center;
  box-sizing: border-box;
  background-color: #323232;
`;

const Menu = styled("div")`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LinkNav = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  width: auto;
  font-size: 20px;
  text-decoration: none;
  color: inherit;
  margin-top: 10px;
`;

const Icon = styled("img")`
  width: 30%;
  height: 30px;
  box-sizing: border-box;
  margin-right: 3px;
`;

const Text = styled("p")`
  font-size: 20px;
  font-family: "BareunDotum";
  font-weight: 600;
  color: white;
  letter-spacing: -0.3px;
  padding: 0;
  margin: 0;
`;
