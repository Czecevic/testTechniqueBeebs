import { useState } from "react";
import { EventTagsProps } from "@/types/interface";
import { SortOptions } from "../molecules/SortOption";
import { TagSelector } from "../molecules/TagSelector";

export const EventTags = ({
  allTags,
  selectedTags,
  handleTagChange,
  openSideBar,
  setSortBy,
  setSortOrder,
}: EventTagsProps) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSortChange = (valueSort: string) => {
    setSelectedOption(valueSort);

    if (valueSort === "recentDate") {
      setSortBy("date");
      setSortOrder("asc");
    } else if (valueSort === "oldDate") {
      setSortBy("date");
      setSortOrder("desc");
    } else if (valueSort === "nameAZ") {
      setSortBy("name");
      setSortOrder("asc");
    } else if (valueSort === "nameZA") {
      setSortBy("name");
      setSortOrder("desc");
    }
  };

  return (
    <div>
      {openSideBar && (
        <div className="m-10">
          <SortOptions
            selectedOption={selectedOption}
            handleSortChange={handleSortChange}
          />
          <TagSelector
            allTags={allTags}
            selectedTags={selectedTags}
            handleTagChange={handleTagChange}
          />
        </div>
      )}
    </div>
  );
};
