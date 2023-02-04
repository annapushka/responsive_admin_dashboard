import React from "react";
import dayjs, { Dayjs } from 'dayjs';
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Draggable } from "@hello-pangea/dnd";
import AlarmIcon from '@mui/icons-material/Alarm';

import "./TrelloCard.scss";
import TrelloElementMenu from "../TrelloList/TrelloElementMenu/TrelloElementMenu";

type Props = {
  text: string;
  id: string;
  indexOfCard: number;
  listID: string;
  deadline?: Dayjs;
};

const TrelloCard = ({ text, id, indexOfCard, listID, deadline }: Props) => {
  let deadlineStatus = dayjs().isBefore(deadline) ? "deadline" : "deadline deadline__expired";

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
            <Typography variant="body1">{text}</Typography>
            {deadline && (

              <Typography variant="body2" className={deadlineStatus}>
                <AlarmIcon fontSize="small" />
                {deadline.format('DD.MM.YYYY')}
              </Typography>
            )}
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default TrelloCard;
