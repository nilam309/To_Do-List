import "./styles.css";
import { useState } from "react";
import "./App.css";
import Task from "./Task";
import { Text } from "./Text";
export default function App() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShowText(!showText)}>Show Text</button>

      {showText && <Text />}
    </div>
  );

  //to-di list-2
  // const [toDoList, setToDoList] = useState([]);
  // const [newTask, setNewTask] = useState("");
  // const handleChange = (event) => {
  //   setNewTask(event.target.value);
  // };
  // const addTask = () => {
  //   const task = {
  //     id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
  //     taskName: newTask,
  //     completed: false,
  //   };
  //   setToDoList([...toDoList, task]);
  // };
  // const deleteTask = (id) => {
  //   //const newToDoList = toDoList.filter((task) => task !== taskName);
  //   setToDoList(toDoList.filter((task) => task.id !== id));
  // };
  // const makeCompleted = (id) => {
  //   setToDoList(
  //     toDoList.map((task) => {
  //       if (task.id === id) {
  //         return { ...task, completed: true };
  //       } else {
  //         return task;
  //       }
  //     })
  //   );
  // };
  // return (
  //   <div className="App">
  //     <h1>MyTo-Do List</h1>
  //     <input type="text" onChange={handleChange} />
  //     <button onClick={addTask}>Add Task here</button>
  //     <div className="list">
  //       {toDoList.map((task) => {
  //         return (
  //           <Task
  //             taskName={task.taskName}
  //             id={task.id}
  //             completed={task.completed}
  //             deleteTask={deleteTask}
  //             makeCompleted={makeCompleted}
  //           />
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
  // //To-do List-1
  // const [todolist, setTodoList] = useState([]);
  // const [newTask, setNewTask] = useState("");
  // const handleChange = ({ target }) => {
  //   setNewTask(target.value);
  // };
  // const addTask = () => {
  //   //const newToDoList = [...todolist, newTask];
  //   setTodoList([...todolist, newTask]);
  // };
  // return (
  //   <div className="App">
  //     <div className="addTask">
  //       <input onChange={handleChange}></input>
  //       <button onClick={addTask}>Add task</button>
  //     </div>
  //     <div className="list">
  //       {todolist.map((task) => {
  //         return <h1>{task}</h1>;
  //       })}
  //     </div>
  //   </div>
  // );
  // const [newItem, setNewItem] = useState("");
  // return (
  //   <>
  //     <form className="new-item-form">
  //       <div className="form-row">
  //         <label htmlFor="item">New Item</label>
  //         <input
  //           type="text"
  //           id="item"
  //           value={newItem}
  //           onChange={(e) => setNewItem(e.target.value)}
  //         ></input>
  //       </div>
  //       <button className="btn">Add</button>
  //     </form>
  //     <h1 className="header">Todo List</h1>
  //     <ul className="list">
  //       <li>
  //         <label>
  //           <input type="checkbox" />
  //           Item 1
  //         </label>
  //         <button className="btn btn-danger">Delete</button>
  //       </li>
  //       <li>
  //         <label>
  //           <input type="checkbox" />
  //           Item 2
  //         </label>
  //         <button className="btn btn-danger">Delete</button>
  //       </li>
  //     </ul>
  //   </>
  // );
}
