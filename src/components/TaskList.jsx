import TaskItem from "./TaskItem";

export default function TaskList() {
  const taskItemTitle = ["todo", "in_progress", "done"];
  return (
    <div className="grid grid-rows-3 lg:grid-cols-3 gap-4">
      {taskItemTitle?.map((taskItem) => (
        <TaskItem key={taskItem} taskItem={taskItem} />
      ))}
    </div>
  );
}
