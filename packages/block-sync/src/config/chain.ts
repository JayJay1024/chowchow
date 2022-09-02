import type { ChainConf } from "../types";

export const CHAIN_CONF = [
  {
    specName: "Crab",
    subql: {
      endpoint: "https://subql.darwinia.network/subql-apps-crab/",
    },
  },
  {
    specName: "Darwinia",
    subql: {
      endpoint: "https://subql.darwinia.network/subql-apps-darwinia/",
    },
  },
  {
    specName: "Pangolin",
    subql: {
      endpoint: "https://subql.darwinia.network/subql-apps-pangolin/",
    },
  },
  {
    specName: "Pangoro",
    subql: {
      endpoint: "https://subql.darwinia.network/subql-apps-pangoro/",
    },
  },
] as ChainConf[];
