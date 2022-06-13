import "./styles.css";
import React from "react";
import TextInput from "./TextInput";

class App extends React.Component {
  onSearchEnter(searchTerm) {
    alert(`Entered text is: ${searchTerm}`);
  }

  render() {
    return (
      <div className="App">
        <TextInput onSearchEnter={this.onSearchEnter} />
      </div>
    );
  }
}

export default App;
