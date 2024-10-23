import { useState, FunctionComponent } from "react";
import { SearchBarProps } from "../interface";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar: FunctionComponent<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-between w-full">
      <div
        className={`flex items-center rounded-full bg-slate-700 m-5 mx-20 transition-all duration-300 ease-in-out ${
          isFocused ? "w-full" : "w-1/4"
        }`}
      >
        <button className="p-4 bg-transparent" aria-label="SearchIcon">
          <SearchIcon />
        </button>
        <input
          type="text"
          placeholder="Rechercher un évènement"
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
