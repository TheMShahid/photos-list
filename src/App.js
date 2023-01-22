import React from "react";
import CardList from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      albums: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((photos) => this.setState({ albums: photos }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { albums, searchField } = this.state;
    const filterAlbums = albums.filter((album) =>
      album.title.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="app">
        <h1>Photos List</h1>
        <SearchBox
          placeholder="search photos"
          handleChange={this.handleChange}
        />
        <CardList albums={filterAlbums} />
      </div>
    );
  }
}

export default App;
