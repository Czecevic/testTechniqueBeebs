import { SortOptionProps } from "@/types/interface";
import { RadioButton } from "../atoms/RadioButton";
import { FormControl, FormLabel, RadioGroup } from "@mui/material";

export const SortOptions = ({
  selectedOption,
  handleSortChange,
}: SortOptionProps) => {
  return (
    <FormControl>
      <FormLabel id="SortBy" sx={{ color: "white" }}>
        Ranger par :
      </FormLabel>
      <RadioGroup
        aria-labelledby="SortBy"
        name="sortNameAndDate"
        value={selectedOption}
        onChange={(event) => handleSortChange(event.target.value)}
      >
        <RadioButton
          label="odre alphabétique croissant (A - Z)"
          value="nameAZ"
          checked={selectedOption === "nameAZ"}
          onChange={() => handleSortChange("nameAZ")}
        />
        <RadioButton
          label="odre alphabétique croissant (Z - A)"
          value="nameZA"
          checked={selectedOption === "nameZA"}
          onChange={() => handleSortChange("nameZA")}
        />
        <RadioButton
          label="plus recentes"
          value="recentDate"
          checked={selectedOption === "recentDate"}
          onChange={() => handleSortChange("recentDate")}
        />
        <RadioButton
          label="plus anciennes"
          value="oldDate"
          checked={selectedOption === "oldDate"}
          onChange={() => handleSortChange("oldDate")}
        />
      </RadioGroup>
    </FormControl>
  );
};
