export default function Task(props) {
  return (
    <div
      className="task"
      style={{ backgroundColor: props.completed ? "green" : "white" }}
    >
      <h1>{props.taskName}</h1>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
      <button onClick={() => props.makeCompleted(props.id)}>Completed</button>
    </div>
  );
}
