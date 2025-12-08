import { useState } from 'react'
import padsData from './pads.js';

function Pad({ colour, toggle }) {
  function toggleButton() {
    console.log(`* I * toggleButton clicked, colour: ${colour}`);
  }
  return (
    <button
      style={{ backgroundColor: colour }}
      className={toggle ? 'on' : undefined}
      onClick={toggleButton}
    >
      {colour}
    </button>
  );
}

function App(props) {
  const [pads, setPads] = useState(padsData);
  return (
    <main style={props.darkMode ? { backgroundColor: "#222" } : { backgroundColor: "#ccc" }}>
      <div className='pad-container'>
        {pads.map(pad => <Pad key={pad.id} colour={pad.color} toggle={pad.on} />)}
      </div>
    </main>
  );
}

export default App
