import globeLogo from "/globe.png";

function Header() {
  return (
    <header>
        <img src={globeLogo} alt="Globe Logo"></img>
        <span>my travel journal</span>
    </header>
  );
}

export { Header };
