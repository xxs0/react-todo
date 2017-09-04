import React, {Component} from 'react'
import './App.css'
import SidebarExpand from "./SidebarExpand";
import TodoInput from "./TodoInput"
import TodoItems from './TodoItems'
import 'font-awesome/css/font-awesome.min.css'
import UserDialog from './UserDialog'
import {AV,getCurrentUser, signOut, TodoModel} from "./leanCloud"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: getCurrentUser() || {},
            showSidebar: true,
            newTodo: '',
            todoList: [],
            navTab: 0
        }
        let user = getCurrentUser()
        if (user) {
            TodoModel.getByUser(user, (todos) => {
                let stateCopy = JSON.parse(JSON.stringify(this.state))
                stateCopy.todoList = todos
                this.setState(stateCopy)
            })
        }
    }

    toggleSidebar() {
        this.setState({
            showSidebar: !this.state.showSidebar
        })
    }

    changeTitle(e) {
        console.log(e.target.value)
        this.setState({
            newTodo: e.target.value
        })
    }

    addTodo(e) {
        console.log('增加:', e.target.value, e)
        let newItem = {
            title: e.target.value,
            status: '',
            deleted: false
        }
        console.log('newItem', newItem)
        TodoModel.create(newItem, (id) => {
            newItem.id = id
            this.state.todoList.push(newItem)
            this.setState({
                newTodo: '',
                todoList: this.state.todoList
            })
            console.log('完成创建，', this.state)
        }, (error) => {
            console.log(error)
        })
    }

    toggleTodo(e) {
        console.log('标记todo', e)
        let oldStatus = e.status
        e.status = e.status === 'completed' ? '' : 'completed'

        TodoModel.update(e, () => {
            this.setState(this.state)
        }, (error) => {
            e.status = oldStatus
            this.setState(this.state)
        })
    }

    deleteTodo(e) {
        console.log('删除todo')
        TodoModel.destroy(e.id, () => {
            e.deleted = true
            this.setState(this.state)
        })
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
                return <TodoItems
                    todos={this.state.todoList.filter(todo => !todo.status && !todo.deleted)}
                    onToggle={this.toggleTodo.bind(this)}
                    onDelete={this.deleteTodo.bind(this)}/>
                break
            case 1:
                return <TodoItems
                    todos={this.state.todoList.filter(todo => todo.status && !todo.deleted)}
                    onToggle={this.toggleTodo.bind(this)}
                    onDelete={this.deleteTodo.bind(this)}/>
                break
            case 2:
                return <TodoItems
                    todos={this.state.todoList.filter(todo => !todo.deleted)}
                    onToggle={this.toggleTodo.bind(this)}
                    onDelete={this.deleteTodo.bind(this)}/>
                break
            default:
                break
        }
    }



    onSignUpOrSignIn(key, user) {
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.user = user
        if (key === 'signUp') {
            console.log('开始注册')
            this.setState(stateCopy)
        } else  if (key === 'signIn') {
            // this.fetchData.call(this)
            console.log('登录开始')
            TodoModel.getByUser(user, (todos) => {
                let stateCopy = JSON.parse(JSON.stringify(this.state))
                stateCopy.todoList = todos
                console.log(todos)
                this.setState(stateCopy)
            })
            let stateCopy = JSON.parse(JSON.stringify(this.state))
            stateCopy.user = getCurrentUser()
            this.setState(stateCopy)
        }
    }

    signOut() {
        signOut()
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.user = {}
        this.setState(stateCopy)
    }

    render() {
        return (
            <div className="App">
                <div className="App-sidebar">
                    {this.state.showSidebar &&
                    <SidebarExpand user={this.state.user}
                                   navTab={this.state.navTab}
                                   onTabChange={this.handleTabChange}

                                   lists={this.state.todoList}
                                   // content={this.state.newList}
                        // onChange={this.changeList.bind(this)}
                        // onSubmit={this.addList.bind(this)}
                                   onToggle={this.toggleSidebar.bind(this)}
                        // onChoose={this.changeCurrentList.bind(this)}
                        // onDelete={this.deleteList.bind(this)}
                                   onSwitch={this.switchList.bind(this)}
                                   onSignOut={this.signOut.bind(this)}/>}
                    {!this.state.showSidebar &&
                    <div className="sidebar-close">
                        <div className="name">{this.state.user.username.charAt(0)}</div>
                        <button onClick={this.toggleSidebar.bind(this)}>
                            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                        </button>
                    </div>
                    }
                </div>
                <div className="App-content">
                    <div className="App-content-header">
                        <h1>{this.state.user.username || '我'}的待办</h1>
                        <p>{new Date().getFullYear()}年 {new Date().getMonth()+1}月 {new Date().getDate()}日</p>
                    </div>

                    <TodoInput content={this.state.newTodo}
                               // category={this.state.currentList}
                               onChange={this.changeTitle.bind(this)}
                               onSubmit={this.addTodo.bind(this)}
                    />
                    {this.renderContent()}
                </div>
                {this.state.user.id ?
                    null : <UserDialog onSignUp={this.onSignUpOrSignIn.bind(this, 'signUp')}
                                       onSignIn={this.onSignUpOrSignIn.bind(this, 'signIn')}/>
                }
            </div>
        )
    }
}

export default App;
