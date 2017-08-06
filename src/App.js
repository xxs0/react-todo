import React, { Component } from 'react'
import './App.css'
import SidebarExpand from "./SidebarExpand";
import TodoInput from "./TodoInput"
import ContentNav from './ContentNav'
import TodoItems from './TodoItems'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newList: '列表',
            showSidebar: true,
            newTodo: 'todo',
            catgory: [
                '家务'
            ],
            todoList: [
                {id: 1, title: 'test', status: '', delete:false, catgory:''}
            ],
            navTab: 0
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
    addList(e){
        let list = e.target.value
        this.state.catgory.push(list)
        this.setState({
            newList: '',
            catgory: this.state.catgory
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
        console.log(this.state)
    }
    toggleTodo(e){
        console.log('标记todo')
        e.status = e.status === 'completed' ? '' : 'completed'
        this.setState(this.state)
    }
    filter () {
    }

    handleTabChange = (index) => {
        this.setState({
            navTab: index
        })
        console.log('tab切换：', this.state.navTab)
    }
    renderContent() {
        switch (this.state.navTab) {
            case 0:
                return <TodoItems todos={this.state.todoList}
                                  onToggle={this.toggleTodo.bind(this)}
                />
                break
            case 1:
                return <TodoItems todos={this.state.todoList.filter(todo => !todo.status)}
                                  onToggle={this.toggleTodo.bind(this)}
                />
                break
            case 2:
                return <TodoItems todos={this.state.todoList.filter(todo => todo.status)}
                                  onToggle={this.toggleTodo.bind(this)}
                />
            default: break
        }
    }
  render() {
    return (
      <div className="App">
          <div className="App-sidebar">
              { this.state.showSidebar &&
              <SidebarExpand lists={this.state.catgory}
                             content={this.state.newList}
                             onChange={this.changeList.bind(this)}
                             onSubmit={this.addList.bind(this)}
                             onToggle={this.toggleSidebar.bind(this)}
              />}
              {!this.state.showSidebar &&
              <div className="sidebar-close">
                  <span>图像</span>
                  <button onClick={this.toggleSidebar.bind(this)}>展开</button>
              </div>
              }
          </div>
          <div className="App-content">
              <h1>我的待办</h1>
              <h4>工作</h4>
              <TodoInput content={this.state.newTodo}
                         onChange={this.changeTitle.bind(this)}
                         onSubmit={this.addTodo.bind(this)}
              />
              {/*<ContentTodoItemContainer todos={this.state.todoList}*/}
                               {/*content={this.state.newTodo}*/}
                               {/*onChange={this.changeTitle.bind(this)}*/}
                               {/*onSubmit={this.addTodo.bind(this)}*/}
                               {/*onToggle={this.toggleTodo.bind(this)}*/}
              {/*/>*/}

              <ContentNav navTab={this.state.navTab}
                          onTabChange={this.handleTabChange}
              />
              {this.renderContent()}
          </div>
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
