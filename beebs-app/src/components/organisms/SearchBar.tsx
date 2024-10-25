import { FunctionComponent } from "react";
import { SearchBarProps } from "@/types/interface";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar: FunctionComponent<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center rounded-full bg-slate-700 m-5 lg:mx-20 mx-5 w-full">
        <button className="p-4 bg-transparent" aria-label="SearchIcon">
          <SearchIcon />
        </button>
        <input
          type="text"
          placeholder="Rechercher un évènement"
          className="p-4 bg-transparent outline-none w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};
