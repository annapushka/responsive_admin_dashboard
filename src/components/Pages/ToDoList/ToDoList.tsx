// @flow
import * as React from "react";
import { observer } from "mobx-react";
import { DragDropContext } from "@hello-pangea/dnd";
import listsStore from "../../../store/listsStore";

import "./ToDoList.scss";

import TrelloActionButton from "./TrelloActionButton/TrelloActionButton";
import TrelloList from "./TrelloList/TrelloList";

export const ToDoList = observer(() => {
  const { lists } = listsStore;

  const onDragEnd = () => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="toDoList">
        {lists.map((list) => (
          <TrelloList key={list.id} {...list} />
        ))}
        <TrelloActionButton list />
      </div>
    </DragDropContext>
  );
});
