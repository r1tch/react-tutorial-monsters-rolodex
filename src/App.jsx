import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { useEffect, useState } from "react";

const App = (props) => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
      console.log("fetch")
    }, []);
    
  

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  // const { searchField, monsters } = this.state;
  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLocaleLowerCase().includes(searchField)
  );

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder="Search monsters..."
        className="search monsters-search-box"
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
