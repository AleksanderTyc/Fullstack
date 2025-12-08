import { useState } from 'react'
import padsData from './pads.js';

function Pad({ id, pads, handlePads }) {

  const padIndex = pads.findIndex(pad => pad.id === id);
  console.log(`* I * Rendering id ${id}, index ${padIndex}, colour ${pads[padIndex].color}`);

  // const [localState, setLocalState] = useState(toggle);

  function toggleButton() {
    console.log(`* I * toggleButton clicked, colour: ${pads[padIndex].color}`);
    // setLocalState(prev => !prev);
    handlePads(prev => {
      const newPads = prev.slice(0);
      newPads[padIndex].on = !newPads[padIndex].on;
      return newPads;
    });
    // Alternative:
    // handlePads(prev => prev.map((pad,index) => index === padIndex ? {...pad, on: !pad.on} : pad ));
  }

  return (
    <button
      style={{ backgroundColor: pads[padIndex].color }}
      className={pads[padIndex].on ? 'on' : undefined}
      onClick={toggleButton}
    >
      {pads[padIndex].color}
    </button>
  );
}

function App(props) {
  const [pads, setPads] = useState(padsData);
  return (
    <main style={props.darkMode ? { backgroundColor: "#222" } : { backgroundColor: "#ccc" }}>
      <div className='pad-container'>
        {pads.map(pad => <Pad key={pad.id} id={pad.id} pads={pads} handlePads={setPads} />)}
      </div>
    </main>
  );
}

export default App
