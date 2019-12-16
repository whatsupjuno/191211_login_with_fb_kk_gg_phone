import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";

import Theme from "../Styles/Theme";
import Routes from "../Routes/Route";
import SideNavContainer from "./SideNav/SideNavContainer";

// const QUERY = gql`
//   {
//     isLoggedIn @client
//   }
// `;

export default () => {
  // const {
  //   data: { isLoggedIn }
  // } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Container>
          <SideNavContainer />
          <Routes isLoggedIn={true}></Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

const Container = styled("div")`
  padding-left: 190px;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  background-color: #f2f4f4;
`;
