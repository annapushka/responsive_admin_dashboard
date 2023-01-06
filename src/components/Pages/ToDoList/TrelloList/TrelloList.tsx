import React from "react";
import { CardTypes } from "../../../../types/lists";

import { Droppable } from "react-beautiful-dnd";

import TrelloActionButton from "../TrelloActionButton/TrelloActionButton";
import TrelloCard from "../TrelloCard/TrelloCard";

import "./TrelloList.scss";

type Props = {
  title: string;
  cards: CardTypes[];
  id: number;
};

const TrelloList = ({ title, cards, id }: Props) => {
  return (
    <Droppable droppableId={String(id)}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="trelloList"
        >
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
  );
};

export default TrelloList;
