import React, { Component } from "react";
import ContactList from "./ContactList";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5)
  };

  addRandom = () => {
    // we need to get a random element from the contacts.json and append it to the list of contacts in the state

    const randomIdx = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts[randomIdx];

    this.setState({
      //   contacts: this.state.contacts.concat(randomContact)
      contacts: [...this.state.contacts, randomContact]
    });
  };

  sortByName = () => {
    const sorted = [...this.state.contacts];
    sorted.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    this.setState({
      contacts: sorted
    });
  };

  sortByPop = () => {
    const sorted = [...this.state.contacts];
    sorted.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({
      contacts: sorted
    });
  };

  deleteContact = id => {
    //   remove an element from this.state.contacts using setState
    const filtered = this.state.contacts.filter(contact => {
      //   if (contact.id !== id) return true;
      return contact.id !== id;
    });

    this.setState({
      contacts: filtered
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPop}>Sort by popularity</button>
        <ContactList
          deleteContact={this.deleteContact}
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}

export default App;
