import { RadioButtonProps } from "@/types/interface";
import { FormControlLabel, Radio } from "@mui/material";

export const RadioButton = ({
  label,
  value,
  checked,
  onChange,
}: RadioButtonProps) => {
  return (
    <FormControlLabel
      value={value}
      control={<Radio checked={checked} onChange={onChange} />}
      label={label}
    />
  );
};
