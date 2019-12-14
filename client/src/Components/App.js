import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";

import Theme from "../Styles/Theme";
import Header from "../Components/Header";
import Routes from "../Routes/Route";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Header />
        <Routes isLoggedIn={isLoggedIn}></Routes>
      </Router>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;
