import TaskItem from "./TaskItem";

export default function TaskList() {
  const taskItemTitle = ["TODO", "IN PROGRESS", "DONE"];
  return (
    <div className="grid grid-cols-3 gap-4">
      {taskItemTitle?.map((taskItem) => (
        <TaskItem key={taskItem} taskItem={taskItem} />
      ))}
    </div>
  );
}
