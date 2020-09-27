import React from 'react'
import '../Style.css'

function Todo({ todo, clickComplete, removeItem }) {

    function listOnclickHandler() {
        clickComplete(todo.id)
    }

    function removeHandler() {
        removeItem(todo.id)
    }

    return (
        <div style={{ display: "flex" }}>
            <li onClick={listOnclickHandler} className="list" style={{
                textDecoration: todo.completed ? 'line-through' : null
            }}>{todo.task}</li>
            <button className="delete" onClick={removeHandler}>X</button>
        </div>
    )
}

export default Todo