import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Draggable } from "react-beautiful-dnd";

import "./TrelloCard.scss";

type Props = {
  text: string;
  id: number;
  index: number;
};

const TrelloCard = ({ text, id, index }: Props) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div>
          <Card className="trelloCard">
            <Typography variant="body2">{text}</Typography>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default TrelloCard;
