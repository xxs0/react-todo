import React, { Component } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Content from './Content'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newList: '',
            showSidebar: true,
            newTodo: '',
            todoList: []
        }
    }
    toggleSidebar() {
        this.setState({
            showSidebar:!this.state.showSidebar
        })
    }
    changeList(e) {
        console.log(e.target.value)
        this.setState({
            newList: e.target.value
        })
    }
    changeTitle(e) {
        console.log(e.target.value)
        this.setState({
            newTodo:e.target.value
        })
    }
    addTodo(e) {
        console.log('增加:', e.target.value)
        let todo = {
            id: idMaker(),
            title: e.target.value,
            status: '',
            delete: false
        }
        this.state.todoList.push(todo)
        this.setState({
            newTodo: '',
            todoList: this.state.todoList
        })
    }
  render() {
    let todos = this.state.todoList
    return (
      <div className="App">
          <Sidebar showSidebar={this.state.showSidebar}
                   content={this.state.newList}
                   onToggle={this.toggleSidebar.bind(this)}
                   onChange={this.changeList.bind(this)}
          />
          <Content content={this.state.newTodo}
                   todos={todos}
                   onChange={this.changeTitle.bind(this)}
                   onSubmit={this.addTodo.bind(this)}
          />
      </div>
    )
  }
}

let id = 0
function idMaker() {
    id += 1
    return id
}
export default App;
