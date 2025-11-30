import reactLogo from "/src/assets/react.svg";

function Header() {
    return (
        <header className="header-cnt">
            <img className="header-react-logo" src={reactLogo} alt="React Logo"></img>
            <nav>
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export { Header };
