"use client";

import { useState } from "react";
import { useEvents } from "@/app/hook/useEvents";
import { SearchBar } from "@/app/components/SearchBar";
import { EventTags } from "@/app/components/EventTags";
import { EventCard } from "@/app/components/EventCard";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { CircularProgress, Fab } from "@mui/material";

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
        <svg viewBox="0 0 167 45" role="img" className="w-1/4 m-5 invert">
          <path d="M71.11 18.01c0-1.978-1.397-3.491-3.298-3.491h-4.074v6.984h4.074c1.9 0 3.298-1.514 3.298-3.492zm6.208 0c0 5.161-4.152 9.313-9.506 9.313h-4.074v8.536H57.53V8.699h10.282c5.354 0 9.506 4.151 9.506 9.312zm56.867 17.849V8.699h6.209v27.16h-6.209zM113.65 21.902h4.656c1.708 0 3.104-1.6 3.104-3.692s-1.396-3.691-3.104-3.691h-4.656v7.383zm0 5.433v8.524h-6.208V8.699h10.864a9.29 9.29 0 0 1 9.312 9.312c0 3.336-1.929 6.6-4.927 8.01l5.703 9.838h-6.673l-4.892-8.524h-3.179zm-26.463-1.474c1.026.263 2.102.402 3.21.402 1.11 0 2.186-.139 3.212-.402L90.398 15.8l-3.211 10.06zm-1.668 5.224l-1.525 4.774h-6.79l9.236-27.16h7.916l9.232 27.16h-6.79l-1.521-4.774c-1.56.4-3.195.611-4.88.611-1.684 0-3.319-.211-4.878-.611zm70.638-16.877c-1.67 0-2.91.769-2.91 2.057 0 1.728 1.689 2.448 5.91 3.697 5.428 1.606 7.708 3.915 7.708 8.098 0 5.29-4.283 8.342-10.087 8.342-7.392 0-10.46-5.583-10.865-6.713l5.283-2.769c1.179 2.093 3.133 3.434 5.582 3.434 2.193 0 3.88-.608 3.88-2.216 0-2.31-3.732-2.78-5.626-3.454-1.895-.673-7.993-1.85-7.993-8.264 0-5.343 4.524-8.265 9.118-8.265 6.536 0 9.074 4.429 9.932 6.13l-5.18 2.728c-.937-1.352-2.046-2.805-4.752-2.805zM47.75 26.281c.243.003.276.744-.487 2.796-3.315 8.906-11.097 15.208-22.558 15.208-13.814 0-23.347-9.76-24.704-21.668a.37.37 0 0 1 .46-.396l15.607 3.403c.04.104 2.588 7.577 9.904 7.577 7.367 0 12.15-7.526 12.15-15.81 0-8.278-5.164-11.76-6.741-12.981a31815.5 31815.5 0 0 0-13.127 6.565c7.091 4.342 8.372 12.053 6.59 17.35-.502 1.494-1.025 1.627-.932.83.618-5.33-1.6-14.729-14.683-17.758a.248.248 0 0 1-.049-.466L32.797 0c5.27 3.863 8.9 8.787 8.9 17.392 0 9.563-6.453 18.811-15.724 18.811-8.764 0-12.084-7.631-12.128-7.725L5.17 26.856c.106.38 4.112 14.366 21.11 14.24 8.539-.063 16.598-4.65 20.97-14.227.196-.428.334-.59.502-.588z"></path>
        </svg>
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
          className="fixed bottom-4 left-4 z-10"
        >
          <FilterAltIcon />
        </Fab>
      </div>
    </div>
  );
}
