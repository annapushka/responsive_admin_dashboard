// @flow
import * as React from "react";
import { observer } from "mobx-react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import listsStore from "../../../store/listsStore";

import "./ToDoList.scss";

import TrelloActionButton from "./TrelloActionButton/TrelloActionButton";
import TrelloList from "./TrelloList/TrelloList";

export const ToDoList = observer(() => {
  const { lists, sort } = listsStore;

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }
    sort(result);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="toDoList">
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="toDoList__lists">
              {lists.map((list, index) => (
                <TrelloList key={list.id} {...list} index={index} />
              ))}
              <TrelloActionButton list />
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
});
