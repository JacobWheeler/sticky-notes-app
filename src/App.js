import React, { Component } from 'react';
import StickynoteForm from './StickynoteForm';
import StickynoteList from './StickynoteList';
import Footer from './Footer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StickynoteForm />
        <StickynoteList />
        <Footer />
        </div>
       
    );
  }
}

export default App;
