function App() {
  return (
    <main>
      <HeaderSection />
      <StatusSection />
    </main>
  );
}

function HeaderSection() {
  return (
    <header>
      <h1>Assembly: Endgame</h1>
      <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
    </header>
  );
}

function StatusSection() {
  return (
    <section className="game-status">
      <h2>Game over!</h2>
      <p>You lose! Better start learning Assembly</p>
    </section>
  );
}

export { App };