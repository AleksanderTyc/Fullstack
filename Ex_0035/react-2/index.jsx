import ReactDOM from "react-dom/client";
import { Header } from "./Header.jsx";
import { MainContent } from "./MainContent.jsx";
import { Footer } from "./Footer.jsx";

const rootElem = ReactDOM.createRoot(document.getElementById('root'));

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
