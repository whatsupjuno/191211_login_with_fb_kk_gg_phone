import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const TextBase = styled("p")`
  font-size: 15px;
  font-family: "Helvetica";
  font-weight: 600;
  color: #323232;
  letter-spacing: 0px;
  padding: 0;
  margin: 0;
`;

const SubmenuView = styled("div")`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #f2f4f4;
`;

const LinkBase = styled(NavLink)`
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

export default ({ items }) => {
  return (
    <SubmenuView>
      {items &&
        items.map((item, index) => (
          <LinkBase key={index} to={item.path}>
            <TextBase>{item.name}</TextBase>
          </LinkBase>
        ))}
    </SubmenuView>
  );
};
