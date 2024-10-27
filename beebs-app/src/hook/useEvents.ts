import useSWR from "swr";
import { getEvent } from "@/app/actions/getEvents";
import { EventResult } from "@/types/interface";

// Fetches event data using SWR caching for efficient re-fetching
const fetcher = async () => {
  const eventsData = await getEvent();
  return eventsData;
};

export const useEvents = (
  searchTerm: string,
  selectedTags: string[],
  sortBy: string,
  sortOrder: string
) => {
  // Fetch and caches event data, handling loading and error states
  const { data: events = [], error } = useSWR<EventResult[]>(
    "/api/events",
    fetcher
  );

  const loading = !events && !error;
  const errorMessage = error ? (error as Error).message : null;

  // Filters and sorts events based on search term, selected tags, and sorting options
  const filteredEvents = events
    ?.filter((event) => {
      const matchSearchTerm = event.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchTags =
        selectedTags.length === 0 ||
        (event.tags as unknown as string[]).some((tag: string) =>
          selectedTags.includes(tag)
        );
      return matchSearchTerm && matchTags;
    })
    .sort((a, b) => {
      if (sortBy === "name") {
        return sortOrder === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      } else if (sortBy === "date") {
        return sortOrder === "asc"
          ? new Date(a.date_start).getTime() - new Date(b.date_start).getTime()
          : new Date(b.date_start).getTime() - new Date(a.date_start).getTime();
      }
      return 0;
    });

  // Extracts unique tags from all events for tag-based filtering
  const allTags = Array.from(new Set(events.flatMap((event) => event.tags)));

  return { events, filteredEvents, loading, errorMessage, allTags };
};
