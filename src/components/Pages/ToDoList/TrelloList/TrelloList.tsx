import React from "react";
import { CardTypes } from "../../../../types/lists";

import { Draggable, Droppable } from "@hello-pangea/dnd";

import TrelloActionButton from "../TrelloActionButton/TrelloActionButton";
import TrelloCard from "../TrelloCard/TrelloCard";

import "./TrelloList.scss";
import TrelloListMenu from "./TrelloListMenu/TrelloListMenu";

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
                <div className="trelloList__head">
                  <h4>{title}</h4>
                  <TrelloListMenu />
                </div>
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
