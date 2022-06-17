import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list';
import { Search } from './components/search/search';
import './App.css';

class App extends Component {
  state = {
    monsters : [] ,
    searchFiled : ""
  };

  componentDidMount () {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters : users}));
  }

  handleChange = (e) => {
    this.setState({searchFiled : e.target.value});
  };

  render() {
    const {monsters , searchFiled} = this.state;
    const filterdMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchFiled.toLowerCase())
    );
    return (
      <div className='App'>
        <h1> Monsters Rolodex </h1>
        <Search 
        placeholder="search monster" 
        handleChange={this.handleChange}
        />
        <CardList monsters ={filterdMonster} />
      </div>
    )
  }
}

export default App;