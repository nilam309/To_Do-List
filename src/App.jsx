import "./styles.css";
import { useEffect, useState } from "react";
import "./App.css";
import Task from "./Task";
import { Text } from "./Text";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Menu } from "./Pages/Menu";
import { Contact } from "./Pages/Contact";

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/Menu">Menu</Link>
          <Link to="/Contact">Contact</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<h1>Page Not Found</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );

  //Predicated Age Lecture
  // const [Name, setName] = useState("");
  // const [Age, setAge] = useState(null);
  // const fetchData = () => {
  //   axios.get(`https://api.agify.io/?name= ${Name}`).then((res) => {
  //     setAge(res.data);
  //   });
  // };
  // return (
  //   <div className="App">
  //     <input
  //       placeholder="Ex...Nilam"
  //       onChange={(event) => {
  //         setName(event.target.value);
  //       }}
  //     ></input>
  //     <button onClick={fetchData}>Predict Age</button>
  //     <h1>Name: {Age?.name} </h1>
  //     <h1>Predicted Age: {Age?.age} </h1>
  //     <h1>Count: {Age?.count} </h1>
  //   </div>
  // );
  //CatFact API using axios
  // fetch("https://catfact.ninja/fact")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   });
  // const fetchCatFact = () => {
  //   axios.get("https://catfact.ninja/fact").then((res) => {
  //     //console.log(res.data);
  //     setcatFact(res.data.fact);
  //   });
  // };
  // const [catFact, setcatFact] = useState("");
  // useEffect(() => {}, []);
  // return (
  //   <div className="App">
  //     <button onClick={fetchCatFact}>Generate Cat Fact</button>
  //     <p>{catFact}</p>
  //   </div>
  // );
  //useEffect Lecture
  // const [showText, setShowText] = useState(false);
  // return (
  //   <div className="App">
  //     <button onClick={() => setShowText(!showText)}>Show Text</button>
  //     {showText && <Text />}
  //   </div>
  // );
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
