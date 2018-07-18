import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './app.css';
class App extends Component {
  state = {
    robots: [],
    searchfield: ''
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => {this.setState({robots: users})})
  }
  onsearchChange = (event) =>{
    this.setState({searchfield: event.target.value})
  }
  render() {
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !robots.length ? <h1>...Loading</h1>:
    (
      <div className="tc">
         <h1 className="f1">Robots App</h1>
         <SearchBox searchChange={this.onsearchChange} />
         <Scroll>
           <CardList robots={filteredRobots} />
          </Scroll>
      
      </div>
    )
  }
}

export default App;
