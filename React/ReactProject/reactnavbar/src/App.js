import React from 'react';
import NavBar from './components/NavBar';
import Input from './components/Input';
import FormWrapper from './components/FormWrapper';
import Wrapper from './components/Wrapper';
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <NavBar />
        <FormWrapper />
      </Wrapper>

      
    </div>
  );
}

export default App;
