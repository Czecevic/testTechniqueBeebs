import { Checkbox, FormControlLabel } from "@mui/material";
import { CheckboxButtonProps } from "@/types/interface";

export const CheckboxButton = ({
  label,
  checked,
  onChange,
}: CheckboxButtonProps) => {
  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={onChange} />}
      label={label}
    />
  );
};
