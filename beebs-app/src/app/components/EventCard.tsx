/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { EventResult } from "../utils/fetchEvents";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";
import { Dialog, DialogTitle } from "@mui/material";
import Link from "next/link";

interface EventCardProps {
  event: EventResult;
}

const formatDate = (date: string) => {
  return format(parseISO(date), "dd/MM/yyyy", { locale: fr });
};

export const EventCard: React.FunctionComponent<EventCardProps> = ({
  event,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const handleCardClick = () => {
    setExpanded(!expanded);
  };
  const reformatDesc = (desc: string) => {
    return desc.replace(/<[^>]*>/g, "");
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
        cursor: "pointer",
      }}
      onClick={handleCardClick}
    >
      <CardMedia
        component="img"
        height="140"
        image={event.cover_url}
        alt={event.title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div">
          {event.title}
        </Typography>
        <div className="flex gap-2">
          <Typography variant="h6" color="text.secondary">
            {formatDate(event.date_start)}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            -
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {formatDate(event.date_end)}
          </Typography>
        </div>
        <Typography variant="body2" color="text.secondary">
          {event.address_name}
        </Typography>
        {expanded && (
          <Dialog onClose={handleCardClick} open={expanded}>
            <DialogTitle>{event.title}</DialogTitle>
            <CardContent>
              <Typography className="pt-3" variant="body2" component="p">
                {reformatDesc(event.description)}
              </Typography>
            </CardContent>
            <CardActions>
              {event.access_link && (
                <Button>
                  <Link href={event.access_link} target="_blank">
                    Prendre ma place
                  </Link>
                </Button>
              )}
            </CardActions>
            <CardActions>
              <Button onClick={handleCardClick}>Fermer</Button>
            </CardActions>
          </Dialog>
        )}
      </CardContent>
    </Card>
  );
};
