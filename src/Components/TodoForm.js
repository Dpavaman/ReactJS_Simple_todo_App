import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import '../Style.css'

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    })

    function handleInputChange(e) {
        setTodo({ ...todo, task: e.target.value });
    }

    function submitHandler(e) {
        e.preventDefault();

        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid() })

            setTodo({ ...todo, task: "" })
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <input name="task" type="text" value={todo.task} onChange={handleInputChange} />
            <button type="submit" > Add </button>
        </form>
    )
}


export default TodoForm