import { useQuery } from "@apollo/client";
import { Card } from "./Card";
import { LATEST_BLOCK } from "../config";
import type { SyncInfo, RefetchFn } from "../types";
import { useEffect } from "react";

interface Props {
  specName: string;
  setRefetch?: (refetch: RefetchFn) => void;
}

export const GqlComsumer = ({ specName, setRefetch }: Props) => {
  const { data, loading, refetch } = useQuery<{ blocks: { nodes: SyncInfo[] } | null }>(LATEST_BLOCK, {
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (setRefetch) {
      setRefetch(refetch);
    }
  }, [refetch, setRefetch]);

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
