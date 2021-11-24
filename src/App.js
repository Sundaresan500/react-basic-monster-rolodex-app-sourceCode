import './App.css';
import { Component } from 'react';
import {CardList} from './Components/Card-list/Card-list.Component';
import { SearchBox } from './Components/Search-box/Search-box.Component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:''
    }
  }

  componentDidMount()
  {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(Response => Response.json())
      .then(users => this.setState({monsters: users}))
  }
 
  handleChange = (e) =>
  {
    this.setState({searchField: e.target.value});
  }

  render() {

    const { monsters, searchField} = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <SearchBox placeholder='Search Monster' handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
