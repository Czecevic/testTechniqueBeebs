"use client";

import { useState } from "react";
import { useEvents } from "@/hook/useEvents";
import { SearchBar } from "@/components/organisms/SearchBar";
import { EventTags } from "@/components/organisms/EventTags";
import { EventCard } from "@/components/organisms/EventCard";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { CircularProgress, Fab } from "@mui/material";
import { SVGLogo } from "@/components/atoms/SVGLogo";

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("name");
  const [sortOrder, setSortOrder] = useState<string>("asc");

  // Utilisation du hook pour récupérer les événements filtrés et trier
  const { filteredEvents, loading, errorMessage, allTags } = useEvents(
    searchTerm,
    selectedTags,
    sortBy,
    sortOrder
  );

  const handleTagChange = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Affichage de l'état "loading"
  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <CircularProgress color="inherit" />
      </div>
    );
  }

  // Gestion des erreurs
  if (errorMessage) {
    return (
      <div className="flex items-center justify-center flex-col h-screen w-full text-3xl">
        <h1>Erreur {errorMessage}</h1>
        <p> Nous n&apos;avons pas pu récuperer la page demander</p>
      </div>
    );
  }

  return (
    <div>
      <nav className="flex w-full items-center">
        {/* Barre de recherche */}
        <SVGLogo />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />{" "}
      </nav>

      <div className="relative">
        {/* Barre latérale des filtres et des options de tri */}
        <div
          className={`fixed bottom-0 left-0 w-full h-screen p-4 transition-transform bg-slate-900 ${
            openSideBar ? "-translate-y-0" : "translate-y-full"
          }`}
        >
          <EventTags
            allTags={allTags}
            selectedTags={selectedTags}
            handleTagChange={handleTagChange}
            openSideBar={openSideBar}
            setSortBy={setSortBy}
            setSortOrder={setSortOrder}
          />
        </div>

        {/* Liste des événements */}
        <div className="flex flex-wrap justify-around items-stretch">
          {filteredEvents.length === 0 ? (
            <p className="text-center text-lg">Aucun résultat trouvé.</p>
          ) : (
            filteredEvents.map((event, index) => (
              <div
                className="flex-1 basis-1 md:basis-1/2 lg:basis-1/3 flex justify-center p-5"
                key={index}
              >
                <EventCard event={event} />
              </div>
            ))
          )}
        </div>

        {/* Bouton flottant pour ouvrir/fermer la barre latérale */}
        <Fab
          aria-label="filter"
          onClick={() => setOpenSideBar(!openSideBar)}
          sx={{ position: "fixed", bottom: "16px", left: "16px", zIndex: "1" }}
        >
          <FilterAltIcon />
        </Fab>
      </div>
    </div>
  );
}
