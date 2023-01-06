import React, {useState} from "react";
import './ToDoForm.scss'

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState ('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                value={userInput}
                type="text"
                onChange={handleChange}
                placeholder="enter task here"
            />
            <button>Submit</button>
        </form>
    )
}

export default ToDoForm;