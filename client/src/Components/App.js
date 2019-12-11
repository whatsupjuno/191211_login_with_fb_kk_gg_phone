import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

const Say_Hello = gql`
  {
    sayHello
  }
`;

export default () => {
  const { data, loading } = useQuery(Say_Hello);

  return loading ? <div>wating</div> : <div>{data.sayHello}</div>;
};
