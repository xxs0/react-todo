import React, {Component} from 'react'
import TodoItems from "./TodoItems";
import ContentNav from './ContentNav'

export default class ContentTodoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navTab: 0
        }
    }
    handleTabChange = (index) => {
        this.setState({
            navTab: index
        })
    }
    renderContent() {
        switch (this.state.navTab) {
            case 0:
                return <TodoItems todos={this.props.todos}
                                  onToggle={this.props.onToggle.bind(this)}
                />
                break
            case 1:
                return <TodoItems todos={this.props.todos.filter(todo => !todo.status)}/>
                break
            case 2:
                return <TodoItems todos={this.props.todos.filter(todo => todo.status)}/>
            default: break
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


    render() {
        return (
            <div>
                <ContentNav navTab={this.state.navTab}
                            onTabChange={this.handleTabChange}
                />
                {this.renderContent()}
            </div>
        )
    }
}