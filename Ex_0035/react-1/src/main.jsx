import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MainComponent() {
  return (
    <h1>React is Great!</h1>
  );
}

const anotherH1 = document.createElement("h1");
anotherH1.classList.add('header');
anotherH1.textContent = 'Some text Content';
document.getElementById('my-rubbish').appendChild(anotherH1);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainComponent />
    <App />
  </StrictMode>,
)

