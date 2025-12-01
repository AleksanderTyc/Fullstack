import reactLogo from "./assets/react.svg";

function Navbar() {
    return (
        <header>
            <nav>
            <img className="header-react-logo" src={reactLogo} alt="React Logo"></img>
            <span>ReactFacts</span>
            </nav>
        </header>
    );
}

export { Navbar };
