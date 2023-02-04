import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Draggable } from "@hello-pangea/dnd";

import "./TrelloCard.scss";
import TrelloElementMenu from "../TrelloList/TrelloElementMenu/TrelloElementMenu";

type Props = {
  text: string;
  id: string;
  indexOfCard: number;
  listID: string;
};

const TrelloCard = ({ text, id, indexOfCard, listID }: Props) => {
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
              <TrelloElementMenu id={id} text={text} type='card' listID={listID} />
            </div>
            <Typography variant="body2">{text}</Typography>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default TrelloCard;
