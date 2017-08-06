import React from 'react'

export default function({todos, onToggle}) {
    console.log(todos)
    return (
        <ol className="App-content-todoitem">
            {
                todos.map(todo =>
                    <li key={todo.id} className="todoItem">
                        <input type="checkbox" checked={todo.status === 'completed'}
                               onChange={onToggle.bind(null, todo)}
                        />
                        <span>{todo.title}</span>
                        <button>删除</button>
                    </li>
                )
            }
        </ol>
    )

}