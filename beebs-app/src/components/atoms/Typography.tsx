import { Typography } from "@mui/material";
import { TypographyProps } from "@/types/interface";

export const CustomTypography = ({
  variant,
  children,
  className,
}: TypographyProps) => {
  return (
    <Typography variant={variant} className={className}>
      {children}
    </Typography>
  );
};
