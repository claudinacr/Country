import React, { Component } from 'react';
import Containercountry from './Components/Containercountry/index';
import Presentation from './Components/Containercountry/presentation';
import logo from './logo.svg';
import './App.css';
import './media.css';
import Containerinfo from './Components/Containercountry/Containerinput/Containerinfo';

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< Updated upstream
        <header className='header'></header>
        <Containercountry>
=======
        <presentation className='presentation' ></presentation>
        <header className='header'></header>
        <Containercountry className='Containercountry' >
>>>>>>> Stashed changes
        </Containercountry>
      </div>
    );
  }
}

export default App;
