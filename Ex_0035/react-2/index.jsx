import ReactDOM from "react-dom/client";
import reactLogo from "/src/assets/react.svg";

const rootElem = ReactDOM.createRoot(document.getElementById('root'));

function Page() {
    return(
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps</li>
        </ul>
    );
}

rootElem.render(
    <Page />
);
