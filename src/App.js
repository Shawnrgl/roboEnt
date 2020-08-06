import React, { Component } from "react";
import CardList from "./CardList";
import Searchbox from "./SearchBox";
import Scroll from "./Scroll";
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      Robots: [],
      searchfield: "",
    };
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=> response.json())
    .then(users => this.setState({Robots : users}));

}

  onSearchChange = (event) =>{
    this.setState({searchfield : event.target.value})
  }

  render() { 
    const filteredRobots= this.state.Robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    if (filteredRobots.length === 0) {
      return (
      <div className="tc">
        <h2 className='f1 hd1'> Robot Enterprises</h2>
        <Searchbox searchChange={this.onSearchChange}/>       
        <h3>No Robots with that Name</h3>    
      </div>
      )
      
    }
else{
    return (
      <div className="tc">
        <h2 className='f1 hd1'> Robot Enterprises</h2>
        <Searchbox searchChange={this.onSearchChange}/>
        <Scroll>
        <CardList Robots={filteredRobots} />
        </Scroll>
      </div>
    );
}
  }
}

export default App;
