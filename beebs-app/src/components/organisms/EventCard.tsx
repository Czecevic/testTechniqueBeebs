import { EventCardProps } from "@/types/interface";
import { useState } from "react";
import { Media } from "../atoms/CardMedia";
import { CustomTypography } from "../atoms/Typography";
import {
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  CardActions,
} from "@mui/material";
import { formatDate } from "@/utils/dateHelpers";
import { EventDescription } from "../molecules/EventDescription";
import { CustomButton } from "../atoms/Button";

export const EventCard = ({ event }: EventCardProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {/* individual card */}
      <Card
        sx={{
          maxWidth: 300,
          cursor: "pointer",
          transition: "0.3s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
        onClick={handleCardClick}
      >
        <Media image={event.cover_url} alt={event.title} height="200" />
        <CardContent>
          <CustomTypography variant="subtitle1">{event.title}</CustomTypography>
          <CustomTypography variant="h6">
            {formatDate(event.date_start)} - {formatDate(event.date_end)}
          </CustomTypography>
          <EventDescription
            address={event.address_name || event.address_text}
            tags={event.tags as unknown as string[]}
          />
        </CardContent>
      </Card>

      {/* Dialog */}
      <Dialog open={expanded} onClose={handleCardClick}>
        <DialogTitle>{event.title}</DialogTitle>
        <CardContent>
          <CustomTypography variant="body2">
            {event.description.replace(/<[^>]*>/g, "")}
          </CustomTypography>
        </CardContent>
        <CardActions>
          {event.access_link && (
            <CustomButton label="Prendre ma place" link={event.access_link} />
          )}
          <CustomButton label="Fermer" onClick={handleCardClick} />
        </CardActions>
      </Dialog>
    </>
  );
};
