import { FormControl } from "@mui/material";
import { CheckboxButton } from "../atoms/CheckboxButton";
import { TagSelectorProps } from "@/types/interface";

export const TagSelector = ({
  allTags,
  selectedTags,
  handleTagChange,
}: TagSelectorProps) => {
  return (
    <FormControl component="fieldset" className="flex flex-row flex-wrap">
      {allTags.map((tag, index) => (
        <CheckboxButton
          key={index}
          label={tag}
          checked={selectedTags.includes(tag)}
          onChange={() => handleTagChange(tag)}
        />
      ))}
    </FormControl>
  );
};
