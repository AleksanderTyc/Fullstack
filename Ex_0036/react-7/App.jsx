import { useState } from 'react'
import padsData from './pads.js';

function Pad({ colour, toggle }) {

  const [localState, setLocalState] = useState(toggle);

  function toggleButton() {
    console.log(`* I * toggleButton clicked, colour: ${colour}`);
    setLocalState(prev => !prev);
  }

  return (
    <button
      style={{ backgroundColor: colour }}
      className={localState ? 'on' : undefined}
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
