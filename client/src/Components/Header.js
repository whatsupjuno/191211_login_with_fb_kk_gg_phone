import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

export default withRouter(() => {
  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/fupload">FileUpload</HeaderLink>
          <HeaderLink to="/auth">auth</HeaderLink>
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
});

const Header = styled.header`
  width: 100%;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  border-bottom: 20px;
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  z-index: 2;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
`;

const HeaderColumn = styled.div`
  width: 33%;
  text-align: center;
  &:first-child {
    margin-right: auto;
    text-align: left;
  }
  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`;

const HeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;
