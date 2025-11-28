import ReactDOM from "react-dom/client";
import reactLogo from "/src/assets/react.svg";

const rootElem = ReactDOM.createRoot(document.getElementById('root'));

rootElem.render(
    <div>
        <img src={reactLogo} alt="React logo"></img>
        <h1>Fun Facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps</li>
        </ul>
    </div>
);
