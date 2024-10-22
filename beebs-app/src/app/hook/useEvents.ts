import { useEffect, useState } from "react";
import { fetchEvent } from "@/app/utils/fetchEvents";
import { EventResult } from "../interface";

export const useEvents = (searchTerm: string, selectedTags: string[]) => {
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
    const results = events.filter((event) => {
      const matchSearchTerm = event.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchTags =
        selectedTags.length === 0 ||
        event.tags.some((tag) => selectedTags.includes(tag));
      return matchSearchTerm && matchTags;
    });
    setFilteredEvents(results);
  }, [searchTerm, selectedTags, events]);

  return { events, filteredEvents, loading, errorMessage, allTags };
};
