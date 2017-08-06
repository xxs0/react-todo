import React, {Component} from 'react'
import TodoItem from "./TodoItem";
import ContentNav from './ContentNav'

export default class ContentTodoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navTab: 0
        }
    }
    changeTitle(e) {
        this.props.onChange(e)
    }
    submit(e) {
        console.log('新增')
        if (e.key === 'Enter') {
            this.props.onSubmit(e)
        }
    }
    toggle(e) {
        console.log(this.props)
        this.props.onToggle(e, this.props.todo)
    }


    render() {
        let todos = this.props.todos.map((todo, index) => {
            return (
                <li key={index}>
                    <TodoItem todo={todo}
                               onToggle={this.props.onToggle}
                    />
                </li>
            )
        })
        return (
            <div>
                <ContentNav/>
                <ol className="App-content-todoitem">
                    {todos}
                </ol>
            </div>
        )
    }
}