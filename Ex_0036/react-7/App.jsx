import { useState } from 'react'
import padsData from './pads.js';

function App(props) {
  const [pads, setPads] = useState(padsData);
  return (
    <main style={props.darkMode ? { backgroundColor: "#222" } : { backgroundColor: "#ccc" }}>
      <div className='pad-container'>
        {pads.map(pad => {
          return (<button style={{ backgroundColor: pad.color }} key={pad.id}></button>);
        })}
      </div>
    </main>
  );
}

export default App
