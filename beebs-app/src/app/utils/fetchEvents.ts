export interface EventResult {
  id: string;
  title: string;
  cover_url: string;
  lead_text: string;
  date_start: string;
  date_end: string;
  address_name: string;
  access_link: string;
  description: string;
  tags: string[];
}

export const fetchEvent = async (): Promise<EventResult[]> => {
  const response = await fetch(
    "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?refine=updated_at%3A%222024%22"
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data);
  const result = data.results
    .map((result: EventResult) => ({
      id: result.id,
      title: result.title,
      cover_url: result.cover_url,
      lead_text: result.lead_text,
      date_start: result.date_start,
      date_end: result.date_end,
      address_name: result.address_name,
      access_link: result.access_link,
      tags: result.tags,
      description: result.description,
    }))
    .filter((event: EventResult, index: number, self: EventResult[]) => {
      const titleSplit = event.title.split(":")[0];

      return (
        index === self.findIndex((e) => e.title.split(":")[0] === titleSplit)
      );
    });

  return result;
};
