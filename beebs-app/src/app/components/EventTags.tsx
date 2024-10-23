import { FunctionComponent, useState } from "react";
import { EventTagsProps } from "../interface";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export const EventTags: FunctionComponent<EventTagsProps> = ({
  allTags,
  selectedTags,
  handleTagChange,
  openSideBar,
  setSortBy,
  setSortOrder,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSortChange = (valueSort: string) => {
    setSelectedOption(valueSort);

    if (valueSort === "DateYoung") {
      setSortBy("date");
      setSortOrder("asc");
    } else if (valueSort === "DateOld") {
      setSortBy("date");
      setSortOrder("desc");
    } else if (valueSort === "NameAZ") {
      setSortBy("name");
      setSortOrder("asc");
      // Tri par date de début
    } else if (valueSort === "NameZA") {
      setSortBy("name");
      setSortOrder("desc");
    }
  };

  return (
    <div>
      {openSideBar && (
        <div>
          {/* Options de tri */}
          <div className="flex flex-wrap m-10">
            <FormControl>
              <FormLabel id="sortBy" sx={{ color: "white" }}>
                Ranger par :
              </FormLabel>
              <RadioGroup
                aria-labelledby="sortBy"
                name="sortNameAndDate"
                value={selectedOption}
                onChange={(event) => handleSortChange(event.target.value)}
              >
                <FormControlLabel
                  value="nameAZ"
                  control={<Radio />}
                  label="ordre alphabétique croissant (A - Z)"
                />
                <FormControlLabel
                  value="nameZA"
                  control={<Radio />}
                  label="ordre alphabétique décroissant (Z - A)"
                />
                <FormControlLabel
                  value="DateYoung"
                  control={<Radio />}
                  label="plus récentes"
                />
                <FormControlLabel
                  value="DateOld"
                  control={<Radio />}
                  label="plus anciennes"
                />
              </RadioGroup>
            </FormControl>
            {/* Tags */}
            <FormControl
              component="fieldset"
              className="flex flex-row flex-wrap"
            >
              {allTags.map((tag, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      checked={selectedTags.includes(tag)}
                      onChange={() => handleTagChange(tag)}
                    />
                  }
                  label={tag}
                />
              ))}
            </FormControl>
          </div>
        </div>
      )}
    </div>
  );
};
