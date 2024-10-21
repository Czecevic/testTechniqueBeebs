"use client";

import { useEffect, useState } from "react";
import { EventResult, fetchEvent } from "@/app/utils/fetchEvents";
import { EventCard } from "@/app/components/EventCard";

export default function EventsPage() {
  const [events, setEvents] = useState<EventResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const eventsData = await fetchEvent();
        setEvents(eventsData);
        setLoading(false);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    getEvents();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Événements à Paris</h1>
      <div className="flex flex-wrap justify-between">
        {events.map((event, index) => (
          <div
            className="flex-1 basis-1/1 md:basis-1/2 lg:basis-1/3 flex justify-center p-5"
            key={index}
          >
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
}
