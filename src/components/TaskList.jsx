import { DndContext } from "@dnd-kit/core";
import { Droppable } from "../drag/Droppable.jsx";
import TaskItem from "./TaskItem.jsx";
import { useState } from "react";

export default function TaskList() {
  const taskItemTitle = ["todo", "in_progress", "done"];
  const [parent, setParent] = useState(null);
  function handleDragEnd(event) {
    const { over } = event;
    setParent(over ? over.id : null);
  }
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Droppable id={"drop"}>
        <div className="grid grid-rows-3 lg:grid-cols-3 gap-4">
          {taskItemTitle?.map((taskItem) => (
            <TaskItem key={taskItem} taskItem={taskItem} />
          ))}
        </div>
      </Droppable>
    </DndContext>
  );
}
