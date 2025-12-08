import { useState } from 'react'
import padsData from './pads.js';

function App() {
  const [pads, setPads] = useState(padsData);
  return(
<main>
  <div className='pad-container'>
    {pads.map(pad => {
      return( <button key={pad.id}></button> );
    })}
  </div>
</main>
  );
}

export default App
