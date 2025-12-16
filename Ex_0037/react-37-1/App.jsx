import React from "react";
import { languages } from "./languages";

function App() {
  return (
    <main>
      <HeaderSection />
      <StatusSection />
      <LanguageChipsSection />
      <WordSection />
      <KeyboardSection />
      <NewGameSection />
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

function LanguageChipsSection() {
  // Note that the value of style in JSX is a JS object. We could avoid shortcut by coding:
  // const styles = { backgroundColor: chip.backgroundColor, color: chip.color }
  // style={styles}
  const languageChips = languages.map(
    (chip, index) => <span
      key={index}
      style={{ backgroundColor: chip.backgroundColor, color: chip.color }}
      className="chip"
    >{chip.name}</span>
  );
  return (
    <section className="language-chips">
      {languageChips}
    </section>
  )
}

function WordSection() {
  const [currentWord, setCurrentWord] = React.useState('react');
  const currentWordArr = Array.from(currentWord.toUpperCase()); // Their way: currentWord.split('')
  console.log('* I * WordSection, currentWordArr:', currentWordArr);
  const letterChips = currentWordArr.map(
    (letter, index) => <span key={index}>{letter}</span>
  )
  return (
    <section className="word">
      {letterChips}
    </section>
  );
}

function KeyboardSection() {
  const alphabet = [];
  for (let index = 65; index < 91; index++) {
    alphabet.push({
      idx: index,
      character: String.fromCharCode(index)
    });
  }
  const keyboardButtons = alphabet.map(charObj => <button key={charObj.idx}>{charObj.character}</button>);
  return (
    <section className="keyboard">
      {keyboardButtons}
    </section>
  );
}

function NewGameSection() {
  return(
    <button className="new-game">New Game</button>
  );
}

export { App };