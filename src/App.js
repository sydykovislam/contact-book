import React, { Component } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import AddContact from "./components/AddContact/AddContact";

// import What from './components/What/What';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddContact />
        <ContactList />
      </div>
    );
  }
}

export default App;
