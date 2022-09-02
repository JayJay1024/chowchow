import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useMemo } from "react";

import { GqlComsumer } from "./GqlComsumer";

interface Props {
  endpoint: string;
  specName: string;
}

export const GqlProvider = ({ endpoint, specName }: Props) => {
  const client = useMemo(() => {
    return new ApolloClient({
      uri: endpoint,
      cache: new InMemoryCache(),
    });
  }, [endpoint]);

  return (
    <ApolloProvider client={client}>
      <GqlComsumer specName={specName} />
    </ApolloProvider>
  );
};
