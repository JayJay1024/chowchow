import { useQuery } from "@apollo/client";
import { Card } from "./Card";
import { LATEST_BLOCK, LONG_DURATION } from "../config";
import type { SyncInfo } from "../types";

interface Props {
  specName: string;
}

export const GqlComsumer = ({ specName }: Props) => {
  const { data, loading } = useQuery<{ blocks: { nodes: SyncInfo[] } | null }>(LATEST_BLOCK, {
    notifyOnNetworkStatusChange: true,
    pollInterval: LONG_DURATION,
  });

  return data?.blocks?.nodes.length ? (
    <>
      {data.blocks.nodes.map((item, index) => (
        <Card key={index} title={specName} timestamp={item.timestamp} loading={loading} />
      ))}
    </>
  ) : (
    <Card loading={loading} />
  );
};
