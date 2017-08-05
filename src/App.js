import React, { Component } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Content from './Content'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showSidebar: true
        }
    }

    toggleSidebar() {
        this.setState({
            showSidebar:!this.state.showSidebar
        })
    }
  render() {
    return (
      <div className="App">
          <Sidebar showSidebar={this.state.showSidebar} onToggle={this.toggleSidebar.bind(this)}/>
          <Content/>
      </div>
    )
  }
}

export default App;
