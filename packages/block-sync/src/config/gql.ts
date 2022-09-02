import { gql } from "@apollo/client";

export const LATEST_BLOCK = gql`
  query queryLatestBlock {
    blocks(last: 1, orderBy: NUMBER_ASC) {
      totalCount
      nodes {
        number
        timestamp
      }
    }
  }
`;
