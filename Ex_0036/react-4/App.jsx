import { Header } from "./components/Header.jsx";
import { Entry } from "./components/Entry.jsx";
import journalData from "./data.js";

const geoData = {
  image: "aditya-anjagi-KZSDCocsOEE-unsplash.jpg",
  location: "Japan",
  title: "Mount Fuji",
  googleMapsLink: "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu",
  dates: "12 Jan, 2021 - 24 Jan, 2021",
  text: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
};

function App() {
  // const ninja = ['Donatello', 'Michaelangelo', 'Rafael', 'Loenardo'];
  // const turtles = ninja.map(elem => <h2>{elem}</h2>);
  const journalJSX = journalData.map(location => <Entry
    key={location.id}
    image={location.img}
    // image={{ src: geoData.image, alt: geoData.title }}
    title={location.title}
    location={location.country}
    googleMapsLink={location.googleMapsLink}
    dates={location.dates}
    text={location.text}
  />
  );
  return (
    <>
      {/* {turtles} */}
      <Header />
      {journalJSX}
    </>
  )
}

export { App };

/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
