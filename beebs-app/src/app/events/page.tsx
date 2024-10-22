"use client";

import { useEffect, useState } from "react";
import { useEvents } from "../hook/useEvents";
import { SearchBar } from "../components/SearchBar";
import { EventTags } from "../components/EventTags";
import { EventCard } from "../components/EventCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagChange = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const { filteredEvents, loading, errorMessage, allTags } = useEvents(
    searchTerm,
    selectedTags
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (errorMessage) {
    return <p>Error: {errorMessage}</p>;
  }

  return (
    <div>
      <nav className="flex">
        <button onClick={() => setOpenSideBar(!openSideBar)}>
          {openSideBar ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
        </button>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </nav>
      <div>
        <div className="flex flex-wrap justify-between">
          <EventTags
            allTags={allTags}
            selectedTags={selectedTags}
            handleTagChange={handleTagChange}
            openSideBar={openSideBar}
          />
          {filteredEvents.length === 0 && (
            <p className="text-center text-lg">Aucun résultat trouvé.</p>
          )}
          {filteredEvents.map((event, index) => (
            <div
              className="flex-1 basis-1 md:basis-1/2 lg:basis-1/3 flex justify-center p-5"
              key={index}
            >
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
