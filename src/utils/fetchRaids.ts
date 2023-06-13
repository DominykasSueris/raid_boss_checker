import { useEffect, useState } from "react";
import { RaidsData } from "./spec";
import { date } from "./date";
import { sortByStatus } from "./sortArray";

export const useFetchRaids = () => {
  const [raids, setRaids] = useState<RaidsData[]>([]);

  const fetchUserData = async () => {
    const res = await fetch(
      `https://seasons.l2reborn.org/wp-content/uploads/raids/raids.json?${date}`
    );
    const data = await res.json();
    setRaids(sortByStatus(data));
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return { raids };
};
