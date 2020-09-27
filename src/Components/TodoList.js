import React from 'react'
import Todo from './Todo'

function TodoList({ todos, clickComplete, removeItem }) {
    return (
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} clickComplete={clickComplete} removeItem={removeItem} />
            ))}
        </ul>
    )
}



export default TodoList;