import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useMemo } from "react";

import { GqlComsumer } from "./GqlComsumer";
import type { RefetchFn } from "../types";

interface Props {
  endpoint: string;
  specName: string;
  setRefetch?: (refetch: RefetchFn) => void;
}

export const GqlProvider = ({ endpoint, specName, setRefetch }: Props) => {
  const client = useMemo(() => {
    return new ApolloClient({
      uri: endpoint,
      cache: new InMemoryCache(),
    });
  }, [endpoint]);

  return (
    <ApolloProvider client={client}>
      <GqlComsumer specName={specName} setRefetch={setRefetch} />
    </ApolloProvider>
  );
};
