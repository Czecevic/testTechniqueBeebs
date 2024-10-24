import { FunctionComponent } from "react";
import { SearchBarProps } from "@/types/interface";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar: FunctionComponent<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center rounded-full bg-slate-700 m-5 mx-20">
        <button className="p-4 bg-transparent" aria-label="SearchIcon">
          <SearchIcon />
        </button>
        <input
          type="text"
          placeholder="Rechercher un évènement"
          className="w-full p-4 bg-transparent outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};
