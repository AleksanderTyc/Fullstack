import ReactDOM from "react-dom/client";
import reactLogo from "/src/assets/react.svg";

const rootElem = ReactDOM.createRoot(document.getElementById('root'));

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

function MainContent() {
    return (
        <main>
            <h1>Reasons</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps</li>
            </ul>
        </main>
    );
}

function Footer() {
    return (
        <footer className="footer-cnt">
            <small>C 20xx Urlyk von Jungingen development.</small>
        </footer>
    );
}

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    );
}

rootElem.render(
    <Page />
);
