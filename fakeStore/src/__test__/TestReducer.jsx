import React, { useReducer, useState } from "react";
import Button from "./Button";

const TaskList = ({ tasks, handleDel }) => {
  //task list generator
  const [edit,setEdit]=useState(true);
  return (
    <div className="flex flex-col  bg-cardbgColor px-10 py-3 gap-2">
      {tasks?.map((t) => (
        <div key={t.id} className="flex flex-row items-center justify-between">
          <p>{t.text}</p>
          <div className="flex flex-row w-fit gap-5">
            <Button>Edit</Button>
            <Button handleBtn={handleDel} text={t.id}>
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

const AddTask = ({ handleAdd }) => {
  const [text, setText] = useState();
  return (
    <div className="flex  flex-row gap-1  my-3 rounded py-2 px-2 border  border-black w-fit">
      <input
        type="text"
        placeholder="Insert Tasks"
        className="px-4 outline-none"
        onChange={(e) => setText(e.target.value)}
      />
      <Button handleBtn={handleAdd} text={text}>
        Add Task
      </Button>
    </div>
  );
};

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
let nextId = 3;
const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case "addT": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "deleteT": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};
const TestReducer = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  // const [tasks,setTasks]=useState(initialTasks);
  const handleAddTask = (text) => {
    dispatch({
      type: "addT",
      id: nextId++,
      text: text,
    });
  };
  const handleDelete = (id) => {
    dispatch({
      type: "deleteT",
      id: id,
    });
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <br />
      <AddTask handleAdd={handleAddTask}></AddTask>
      <TaskList tasks={tasks} handleDel={handleDelete}></TaskList>
    </div>
  );
};

export default TestReducer;
