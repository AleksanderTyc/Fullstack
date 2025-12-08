import { useState } from 'react'
import padsData from './pads.js';

function Pad({ colour }) {
  return (<button style={{ backgroundColor: colour }}>{colour}</button>);
}

function App(props) {
  const [pads, setPads] = useState(padsData);
  return (
    <main style={props.darkMode ? { backgroundColor: "#222" } : { backgroundColor: "#ccc" }}>
      <div className='pad-container'>
        {pads.map(pad => <Pad key={pad.id} colour={pad.color} />)}
      </div>
    </main>
  );
}

export default App
