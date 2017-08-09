import React from 'react'
import './TodoItems.css'
export default function({todos, onToggle, onDelete}) {
    console.log(todos)
    return (
        <ol className="App-content-todoitem">
            {
                todos.map(todo =>
                    <li key={todo.id} className="todoItem">
                        <div className="todoItem-body">
                            <div>
                                <input type="checkbox" checked={todo.status === 'completed'}
                                       onChange={onToggle.bind(null, todo)}
                                />
                            </div>

                            <div className="title-wrapper">
                                <span>{todo.title}</span>
                            </div>
                            <button onClick={onDelete.bind(null, todo)}>
                                <i className="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>
                    </li>
                )
            }
        </ol>
    )

}