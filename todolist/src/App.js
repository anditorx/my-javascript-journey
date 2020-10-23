import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form'
import List from './components/List/List'
import { Provider } from 'react-redux'
import store from './store'
import NotesList from './components/NotesList/NotesList'

class App extends Component {

  render() {
    return (
      <Provider store={store} >
        <div className="App container">
          <Form />
          <List />
          <NotesList/>
        </div>
      </Provider>
    );
  }
}

export default App;
