import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageFour from './components/PageFour';

function App() {
  return (
    <div className="App">
        <Router>
          <PageOne path="/home" />
          <PageTwo path=":id" />
          <PageFour path="/:word/:color/:bg" />
        </Router>
    </div>
  );
}

export default App;
