export const User = (props) => {
  return (
    <div>
      <h1 style={{ textDecoration: props.status ? "line-through" : "none" }}>
        {props.taskName}
      </h1>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
      <button onClick={() => props.updateTask(props.id)}>✐</button>
    </div>
  );
};
