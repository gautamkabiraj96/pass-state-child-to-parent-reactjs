import React from "react";

class TextInput extends React.Component {
  state = { searchText: "" };

  onInputSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.props.onSearchEnter(this.state.searchText);
    }
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Enter text"
        onKeyDown={this.onInputSubmit}
        onChange={(e) => this.setState({ searchText: e.target.value })}
      />
    );
  }
}

export default TextInput;
