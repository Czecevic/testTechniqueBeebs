import { useEffect, useState } from "react";
import { fetchEvent } from "@/app/utils/fetchEvents";
import { EventResult } from "@/app/interface";

export const useEvents = (
  searchTerm: string,
  selectedTags: string[],
  sortBy: string,
  sortOrder: string
) => {
  const [events, setEvents] = useState<EventResult[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<EventResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [allTags, setAllTags] = useState<string[]>([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const eventsData = await fetchEvent();
        setEvents(eventsData);
        setAllTags(
          Array.from(new Set(eventsData.flatMap((event) => event.tags)))
        );
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) setErrorMessage(error.message);
        else setErrorMessage("An unexpected error occurred.");
        setLoading(false);
      }
    };
    getEvents();
  }, []);

  useEffect(() => {
    let results = events.filter((event) => {
      const matchSearchTerm = event.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchTags =
        selectedTags.length === 0 ||
        (event.tags as unknown as string[]).some((tag: string) =>
          selectedTags.includes(tag)
        );
      return matchSearchTerm && matchTags;
    });

    // Tri par nom
    if (sortBy === "name") {
      console.log();
      results = results.sort((ascTitle, descTitle) =>
        sortOrder === "asc"
          ? ascTitle.title.localeCompare(descTitle.title)
          : descTitle.title.localeCompare(ascTitle.title)
      );
    }

    // Tri par date
    if (sortBy === "date") {
      results = results.sort((ascDate, descDate) =>
        sortOrder === "asc"
          ? new Date(ascDate.date_start).getTime() -
            new Date(descDate.date_start).getTime()
          : new Date(descDate.date_start).getTime() -
            new Date(ascDate.date_start).getTime()
      );
    }
    setFilteredEvents(results);
  }, [searchTerm, selectedTags, sortBy, sortOrder, events]);

  return { events, filteredEvents, loading, errorMessage, allTags };
};
