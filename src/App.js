import React, { useState } from 'react';
import './App.scss';
// MOCK DATA
import data from './data.json'
// COMPONENTS
import Header from './Components/Header/Header';
import ToDoList from './Components/ToDoList/ToDoList';
import ToDoForm from './Components/ToDoForm/ToDoForm';

function App() {

  const [toDoList, setToDoList] = useState(data)

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? {
        ...task,
        complete: !task.complete
      } :
      {...task}
    })
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    })
    setToDoList(filtered)
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      {id: toDoList.length + 1, task: userInput, complete: false}
    ]
    setToDoList(copy)
  }


  return (
    <div className="App">

        <Header className="taskContainer__title" />
        <ToDoForm addTask={addTask}/>
        <ToDoList toDoList={toDoList} handleFilter={handleFilter} handleToggle={handleToggle} />
    </div>
  );
}

export default App;
