import { useEffect, useState } from "react";
import { RaidsData, RaidsInfo } from "./spec";
import { date } from "./date";
import NpcList from "../NpcList";

export const useFetchRaids = () => {
  const [raids, setRaids] = useState<RaidsInfo[]>([]);

  const fetchUserData = async () => {
    const res = await fetch(
      `https://seasons.l2reborn.org/wp-content/uploads/raids/raids.json?${date}`
    );
    const data = (await res.json()) as RaidsData[];
    const raidsInfo = data.map((r) => mapToRaidsInfo(r));
    setRaids(raidsInfo);
  };

  const mapToRaidsInfo = (raid: RaidsData): RaidsInfo => {
    const npc = NpcList.getById(raid.id);
    const isUp = raid.status === "1";
    return {
      id: raid.id,
      status: isUp ? "On" : "Off",
      name: npc.name,
      level: npc.level,
      date: isUp ? "" : raid.date,
    };
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return { raids };
};
