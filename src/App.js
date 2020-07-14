import React, {Component} from 'react';
import './App.css';
import CardList from './components/card-list/CardList'

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  render() {
    const { monsters, searchField } = this.state;
    // set filtered monsters array 
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase()
    .includes(searchField.toLowerCase()))

    return (

      <div className="App">
        <input type='search' placeholder="Search monsters" 
        // whenever we call setState() the render() recall itself to render updated state
        onChange={e => this.setState({searchField: e.target.value}, 
        // () => console.log(this.state)
        )} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
