import React, { Component } from 'react'
import './App.css'
import SidebarExpand from "./SidebarExpand";
import TodoInput from "./TodoInput"
import ContentNav from './ContentNav'
import TodoItems from './TodoItems'
import 'font-awesome/css/font-awesome.min.css'
import UserDialog from './UserDialog'
import {getCurrentUser, signOut} from "./leanCloud"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: getCurrentUser() || {},
            newList: '列表',
            showSidebar: true,
            newTodo: 'todo',
            catgory:  ['家务'],
            todoList: [],
            currentList:'',
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
    changeCurrentList(e) {
        console.log(e)
        this.setState({
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
        console.log('增加:', e.target.value, e)
        let todo = {
            id: idMaker(),
            title: e.target.value,
            status: '',
            delete: false,
            catgory: this.state.currentList
        }
        this.state.todoList.push(todo)
        this.setState({
            newTodo: '',
            todoList: this.state.todoList
        })
        console.log(this.state)
    }
    toggleTodo(e, todo){
        console.log('标记todo',todo)
        console.log(todo.target.parentElement)
        let input = todo.target.parentElement
        id = input.parentElement.querySelector('.title-wrapper')
        e.status = e.status === 'completed' ? '' : 'completed'
        this.setState(this.state)

    }
    deleteTodo(e){
        console.log('删除todo')
        e.delete = true
        this.setState(this.state)
    }
    deleteList(e){
        console.log(e)
        let catgoryLength = this.state.catgory.length
        if (catgoryLength >= 1) {
            if (catgoryLength === 1) {
                alert('请保留至少一个待办事项列表')
                return
            } else {
                if (window.confirm('您的操作将会删除该组下所有待办事项，确认继续？')) {
                    let number = this.state.catgory.indexOf(e)
                    this.state.catgory.splice(number, 1)
                    this.setState(this.state)
                }
            }
        }
    }
    filter () {
    }
    switchList(e) {
        this.state.currentList = e;
        this.setState(this.state)
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
                return <TodoItems todos={this.state.todoList.filter(todo => todo.catgory === this.state.currentList && !todo.delete)}
                                  onToggle={this.toggleTodo.bind(this)}
                                  onDelete={this.deleteTodo.bind(this)}/>
                break
            case 1:
                return <TodoItems todos={this.state.todoList.filter(todo => todo.catgory === this.state.currentList && !todo.status && !todo.delete)}
                                  onToggle={this.toggleTodo.bind(this)}
                                  onDelete={this.deleteTodo.bind(this)}/>
                break
            case 2:
                return <TodoItems todos={this.state.todoList.filter(todo => todo.catgory === this.state.currentList && todo.status && !todo.delete)}
                                  onToggle={this.toggleTodo.bind(this)}
                                  onDelete={this.deleteTodo.bind(this)}/>
                break
            default: break
        }
    }

  componentDidUpdate() {
  }
  init() {
        this.setState({
            currentList: this.state.catgory[0]
        })
  }
  componentWillMount() {
      this.init()
  }
  onSignUpOrSignIn(user) {
      let stateCopy = JSON.parse(JSON.stringify(this.state))
      stateCopy.user = user
      this.state(stateCopy)
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
                             onChoose={this.changeCurrentList.bind(this)}
                             onDelete={this.deleteList.bind(this)}
                             onSwitch={this.switchList.bind(this)}
              />}
              {!this.state.showSidebar &&
              <div className="sidebar-close">
                  <div className="name">M</div>
                  <button onClick={this.toggleSidebar.bind(this)}>
                      <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                  </button>
              </div>
              }
          </div>
          <div className="App-content">
              <h1>我的待办</h1>
              {/*<h4>工作</h4>*/}
              <TodoInput content={this.state.newTodo}
                         catgory={this.state.currentList}
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
                          onTabChange={this.handleTabChange}/>
              {this.renderContent()}
          </div>
          {this.state.user.id ? null : <UserDialog onSignUp={this.onSignUpOrSignIn.bind(this)}
                                                   onSignIn={this.onSignUpOrSignIn.bind(this)}
          />}
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
