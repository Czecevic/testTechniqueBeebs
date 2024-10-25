import { FormControl } from "@mui/material";
import { CheckboxButton } from "../atoms/CheckboxButton";
import { TagSelectorProps } from "@/types/interface";

export const TagSelector = ({
  allTags,
  selectedTags,
  handleTagChange,
}: TagSelectorProps) => {
  return (
    <FormControl
      component="fieldset"
      sx={{ width: "100%", display: "flex", alignItems: "center" }}
    >
      <h1 className="mb-4">Tags</h1>
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
