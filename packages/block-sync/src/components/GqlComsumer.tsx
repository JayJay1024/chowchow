import { useQuery } from "@apollo/client";
import { Card } from "./Card";
import { LATEST_BLOCK } from "../config";
import type { SyncInfo } from "../types";

interface Props {
  specName: string;
}

export const GqlComsumer = ({ specName }: Props) => {
  const { data, loading } = useQuery<{ blocks: { nodes: SyncInfo[] } | null }>(LATEST_BLOCK);

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
