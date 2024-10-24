"use serveur";

import { EventResult } from "@/types/interface";

export const getEvent = async (): Promise<EventResult[]> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL + "2025%22";

  if (!apiUrl) throw new Error("API URL not defined");

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  const result = data.results
    .map((result: EventResult) => ({
      ...result,
    }))
    // remove duplicates based on title and date (for events with same name, date, and location)
    .filter((event: EventResult, index: number, self: EventResult[]) => {
      const titleSplit = event.title.split(":")[0];
      return (
        index === self.findIndex((e) => e.title.split(":")[0] === titleSplit)
      );
    });

  return result;
};
