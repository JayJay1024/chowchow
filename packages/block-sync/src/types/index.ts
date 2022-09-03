export type RefetchFn = () => void;
export interface ChainConf {
  specName: "Crab" | "Darwinia" | "Pangolin" | "Pangoro";
  subql: {
    endpoint: string;
  };
}

export interface SyncInfo {
  number: number;
  timestamp: string;
}
