import { useState } from 'react'
import padsData from './pads.js';

function Pad({ pad, toggle }) {

  console.log(`* I * Rendering id ${pad.id},colour ${pad.color}`);

  return (
    <button
      style={{ backgroundColor: pad.color }}
      className={pad.on ? 'on' : undefined}
      onClick={() => toggle(pad.id)}
    >
      {pad.color}
    </button>
  );
}

function App(props) {
  const [pads, setPads] = useState(padsData);

  function toggleButton(padId) {
    console.log(`* I * toggleButton clicked, id: ${padId}`);
    setPads(prev => prev.map((pad) => pad.id === padId ? {...pad, on: !pad.on} : pad ));
  }

  return (
    <main style={props.darkMode ? { backgroundColor: "#222" } : { backgroundColor: "#ccc" }}>
      <div className='pad-container'>
        {pads.map(pad => <Pad key={pad.id} pad={pad} toggle={toggleButton} />)}
      </div>
    </main>
  );
}

export default App
