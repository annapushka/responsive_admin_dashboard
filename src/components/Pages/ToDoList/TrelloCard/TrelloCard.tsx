import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Draggable } from "@hello-pangea/dnd";

import "./TrelloCard.scss";
import { idText } from "typescript";
import TrelloListMenu from "../TrelloList/TrelloListMenu/TrelloListMenu";

type Props = {
  text: string;
  id: string;
  indexOfCard: number;
};

const TrelloCard = ({ text, id, indexOfCard }: Props) => {
  return (
    <Draggable draggableId={String(id)} index={indexOfCard} key={`card_${id}`}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className="trelloCard">
            <div className="trelloCard__menu">
              <TrelloListMenu id={id} text={text} type='card' />
            </div>
            <Typography variant="body2">{text}</Typography>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default TrelloCard;
