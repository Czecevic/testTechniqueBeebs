import { EventResult } from "@/app/interface";

export const fetchEvent = async (): Promise<EventResult[]> => {
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
    .filter((event: EventResult, index: number, self: EventResult[]) => {
      const titleSplit = event.title.split(":")[0];

      return (
        index === self.findIndex((e) => e.title.split(":")[0] === titleSplit)
      );
    });

  return result;
};
