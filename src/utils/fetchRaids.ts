import { useEffect, useState } from "react";
import { RaidsData } from "./spec";
import { date } from "./date";
import { sortByStatus } from "./sortArray";

export const useFetchRaids = () => {
  const [raids, setRaids] = useState<RaidsData[]>([]);

  const fetchUserData = () => {
    fetch(
      `https://seasons.l2reborn.org/wp-content/uploads/raids/raids.json?${date}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRaids(sortByStatus(data));
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return { raids };
};
