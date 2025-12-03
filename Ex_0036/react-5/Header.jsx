import chefLogo from "./images/chef-claude-icon.png";

function Header() {
    return (
        <header>
            <img src={chefLogo} alt="Chef Claude Logo"></img>
            <span>Chef Claude</span>
        </header>
    );
}

export { Header };
