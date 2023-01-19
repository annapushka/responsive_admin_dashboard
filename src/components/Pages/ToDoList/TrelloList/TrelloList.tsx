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
  indexOfList: number;
};

const TrelloList = ({ title, cards, id, indexOfList }: Props) => {
  return (
    <Draggable draggableId={String(id)} index={indexOfList}>
      {provided => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <Droppable droppableId={String(id)} type="card" >
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className="trelloList">
                <h4>{title}</h4>
                {cards.map((card, i) => (
                  <TrelloCard
                    text={card.text}
                    key={card.id}
                    id={card.id}
                    indexOfCard={i}
                  />
                ))}
                {provided.placeholder}
                <TrelloActionButton listID={id} />
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>

  );
};

export default TrelloList;
