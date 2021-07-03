import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import React from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      monsters: [
        {
          name: "m1",
          id: "m1",
        },
        {
          name: "m2",
          id: "m2",
        },
      ],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));

  }

  render() {
    const { searchField, monsters } = this.state;
    let filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monsters..."
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

/*

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> {state}</p>
        <button onClick={() => this.setState({string: "Hello"});} </button>
       
      </header>
    </div>
  );
}
*/

export default App;
