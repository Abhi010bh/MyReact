import React from 'react'; // Import React
import logo from './logo.svg';
import './App.css';
import Comp1 from './components/comp1';

function App() {
  const header = () => (
    <div>Hello</div>
  );

  return (
    <div className="App">
      {header()} {/* Call the 'header' function */}
      <Comp1 />
    </div>
  );
}

export default App;
