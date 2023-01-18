import React from "react";
import { CardTypes } from "../../../../types/lists";

import { Draggable, Droppable } from "@hello-pangea/dnd";

import TrelloActionButton from "../TrelloActionButton/TrelloActionButton";
import TrelloCard from "../TrelloCard/TrelloCard";

import "./TrelloList.scss";

type Props = {
  title: string;
  cards: CardTypes[];
  id: string;
  index: number;
};

const TrelloList = ({ title, cards, id, index }: Props) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={String(id)}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className="trelloList">
                <h4>{title}</h4>
                {cards.map((card, index) => (
                  <TrelloCard
                    text={card.text}
                    key={card.id}
                    id={card.id}
                    index={index}
                  />
                ))}
                <TrelloActionButton listID={id} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>

  );
};

export default TrelloList;
