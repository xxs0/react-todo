import React, { Component } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Content from './Content'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newList: 'test',
            showSidebar: true
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
  render() {
    return (
      <div className="App">
          <Sidebar showSidebar={this.state.showSidebar}
                   content={this.state.newList}
                   onToggle={this.toggleSidebar.bind(this)}
                   onChange={this.changeList.bind(this)}
          />
          <Content/>
      </div>
    )
  }
}

export default App;
