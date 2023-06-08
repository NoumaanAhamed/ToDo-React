import "./App.css";
import { useState } from "react";
// import style from "./style.module.css"; //use {style.class_name} in classname
import { User } from "./User";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  // const [done, setDone] = useState(false);

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      status: false,
    };
    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);
  };

  const deleteTask = (id) => {
    setTodoList(
      todoList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const updateTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            status: !task.status, // Toggle the status of the task
          };
        }
        return task;
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list"></div>
      {todoList.map((task) => {
        return (
          <User
            taskName={task.taskName}
            id={task.id}
            status={task.status}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        );
      })}
    </div>
  );
}

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increment
//       </button>
//       <button
//         onClick={() => {
//           setCount(count > 0 ? count - 1 : 0);
//         }}
//       >
//         Decrement
//       </button>
//       <button
//         onClick={() => {
//           setCount(0);
//         }}
//       >
//         Reset
//       </button>
//       <h1>{count}</h1>
//     </div>
//   );
// }

// function App() {
//   const [text, setText] = useState(true);
//   const [textColor, setcolor] = useState("black");

//   console.log(text);
//   return (
//     <div className="Use">
//       <button
//         onClick={() => {
//           setText(!text);
//           setcolor(textColor === "black" ? "red" : "black");
//         }}
//       >
//         Show/Hide
//       </button>
//       {text && <h1 style={{ color: textColor }}>I'm Noumaan</h1>}
//     </div>
//   );
// }

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div className="App">
//       <input type="text" onChange={handleInputChange} />
//       <div>{inputValue}</div>
//     </div>
//   );
// }

// function App() {
//   const planets = [
//     { name: "Mars", isGasPlanet: false },
//     { name: "Earth", isGasPlanet: false },
//     { name: "Jupiter", isGasPlanet: true },
//     { name: "Venus", isGasPlanet: false },
//     { name: "Neptune", isGasPlanet: true },
//     { name: "Uranus", isGasPlanet: true },
//   ];
//   return (
//     <div className="App">
//       <GasPlanets planets={planets} />
//     </div>
//   );
// }
// const GasPlanets = (props) => {
//   const { planets } = props;
//   return (
//     <div>
//       {planets.map(
//         (planet, key) => planet.isGasPlanet && <h1>{planet.name}</h1> //implicit return
//       )}
//     </div>
//   );
// };

// function App() {
//   const age = 15;
//   const isGreen = false;
//   return (
//     <div className="App">
//       {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
//       <h1 style={{ color: isGreen ? "green" : "red" }}>This Has Color</h1>
//       {isGreen && <button>Click</button>}
//     </div>
//   );
// }

// const User = (props) => {
//   //react component in caps
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.age}</h2>
//       <h3>{props.email}</h3>
//     </div>
//   );
// };
// in return of app <User/ parameters = .....>

export default App;
