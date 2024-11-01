import { CustomTypography } from "../atoms/Typography";

interface EventDescriptionProps {
  address: string;
  tags: string[];
}

export const EventDescription = ({ address, tags }: EventDescriptionProps) => {
  return (
    <CustomTypography variant="body2" className="flex flex-col">
      <strong>Adresse:</strong> {address}
      <strong>Tags:</strong> {tags.join(", ")}
    </CustomTypography>
  );
};
