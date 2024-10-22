import { FunctionComponent } from "react";
import { EventTagsProps } from "../interface";
import { Checkbox, FormControl, FormControlLabel } from "@mui/material";

export const EventTags: FunctionComponent<EventTagsProps> = ({
  allTags,
  selectedTags,
  handleTagChange,
  openSideBar,
}) => {
  return (
    <div>
      {openSideBar === true && (
        <FormControl
          sx={{
            top: "100px",
            height: "100%",
          }}
        >
          {allTags.map((tag: string, index: number) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={selectedTags.includes(tag)}
                  onChange={() => handleTagChange(tag)}
                />
              }
              label={tag}
            ></FormControlLabel>
          ))}
        </FormControl>
      )}
    </div>
  );
};
