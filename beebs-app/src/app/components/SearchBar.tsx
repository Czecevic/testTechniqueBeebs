import { useState, FunctionComponent } from "react";
import { SearchBarProps } from "../interface";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar: FunctionComponent<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <div>
      <h1 className="text-3xl font-bold">Paris Event</h1>
      <div
        className={`flex items-center rounded-full transition-all duration-300 ease-in-out ${
          isFocused ? "w-3/4" : "w-1/4"
        }`}
      >
        <button className="p-4 bg-transparent">
          <SearchIcon />
        </button>
        <input
          type="text"
          placeholder="Rechercher un évenement"
          className="w-full p-4 bg-transparent outline-none transition-all duration-300 ease-in-out"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  );
};
