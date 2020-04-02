import React from 'react';
// import HelloWorld from './components/HelloWorld';
// import PersonCard from './components/PersonCard';
//import FunctionalComponents from './components/FunctionalComponents';
//import ReactForm from './components/ReactForm';
import BoxGenerator from './components/BoxGenerator';
import './App.css';

function App() {
  return (
    <div className="App" id="root"> 
      {/* <PersonCard firstName="Doe" lastName="Jane" age={45} hairColor="Black" />
      <PersonCard firstName="Smith" lastName="John" age={88} hairColor="Brown" />
      <PersonCard firstName="Donald" lastName="Duck" age={20} hairColor="yellow" />
      <PersonCard firstName="Mickey" lastName="Mouse" age={25} hairColor="Black" /> */}
{/* 
      <FunctionalComponents firstName="Doe" lastName="Jane" age={45} hairColor="Black" />
      <FunctionalComponents firstName="Smith" lastName="John" age={88} hairColor="Brown" />
      <FunctionalComponents firstName="Donald" lastName="Duck" age={20} hairColor="yellow" />
      <FunctionalComponents firstName="Mickey" lastName="Mouse" age={25} hairColor="Black" /> */}
      {/* <ReactForm/> */}
      <BoxGenerator />
      {/* ReactDOM.render(<BoxGenerator />, document.getElementById("root")); */}

    </div>
  );
}

export default App;
