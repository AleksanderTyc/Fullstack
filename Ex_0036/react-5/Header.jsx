import chefLogo from "./images/chef-claude-icon.png";

function Header() {
    return (
        <header>
            <img onMouseLeave={e => console.log('onMouseLeave')} onMouseEnter={e => console.log('onMouseEnter')} src={chefLogo} alt="Chef Claude Logo"></img>
            <span>Chef Claude</span>
        </header>
    );
}

export { Header };
