import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Draggable } from "@hello-pangea/dnd";

import "./TrelloCard.scss";

type Props = {
  text: string;
  id: string;
  index: number;
};

const TrelloCard = ({ text, id, index }: Props) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className="trelloCard">
            <Typography variant="body2">{text}</Typography>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default TrelloCard;
