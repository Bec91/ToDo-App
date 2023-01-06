import React from "react";
import './ToDo.scss'

const ToDo = ({todo, handleToggle}) => {
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }
    return(
            <div
                className={todo.complete ? "strike" : "todo"}
                id={todo.id}
                key={todo.id + todo.task}
                name="todo"
                value={todo.id}
                onClick={handleClick}
            >
                {todo.task}
            </div>
    )
}

export default ToDo;