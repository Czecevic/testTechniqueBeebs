import { CardMedia } from "@mui/material";
import { MediaProps } from "@/types/interface";

export const Media = ({ image, alt, height }: MediaProps) => {
  return (
    <CardMedia
      component="img"
      alt={alt}
      height={height}
      image={image}
      sx={{ objectFit: "cover" }}
    />
  );
};
