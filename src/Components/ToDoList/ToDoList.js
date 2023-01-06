import React from "react";
import ToDo from "../ToDo/ToDo";
import './ToDoList.scss'


const ToDoList = ({toDoList, handleToggle, handleFilter}) => {


    return(
        <div className="toDoListForm">
            <button
                className="toDoListForm__button"
                style={{margin: '20px'}}
                onClick={handleFilter}
            >
                Remove Finished Tasks
            </button>

            {toDoList.map(todo => {
                return (
                    <ToDo 
                        todo={todo} 
                        handleFilter={handleFilter} 
                        handleToggle={handleToggle} 
                    />
                )
            })}
        </div>
    )
}

export default ToDoList;