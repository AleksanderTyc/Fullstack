import React from "react";
import { languages } from "./languages";

function App() {
  const [currentWord, setCurrentWord] = React.useState('react');
  const currentWordArr = Array.from(currentWord.toUpperCase()); // Their way: currentWord.split('')

  const [guessedLetters, setGuessedLetters] = React.useState([]);
  // console.log('* I * App, guessedLetters', guessedLetters);

  function handleLetterGuess(evt) {
    // console.log('* I * handleLetterGuess', evt.target.innerText);
    setGuessedLetters(prev =>
      prev.includes(evt.target.innerText) ? prev : [
        ...prev, { character: evt.target.innerText, guess: currentWordArr.includes(evt.target.innerText) }
      ]
    );
  }

  return (
    <main>
      <HeaderSection />
      <StatusSection />
      <LanguageChipsSection />
      <WordSection currWA={currentWordArr} />
      <KeyboardSection gLetters={guessedLetters} handler={handleLetterGuess} />
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

function WordSection(props) {
  const letterChips = props.currWA.map(
    (letter, index) => <span key={index}>{letter}</span>
  )
  return (
    <section className="word">
      {letterChips}
    </section>
  );
}

function KeyboardSection(props) {
  // gLetters={guessedLetters} handler
  const alphabet = [];
  for (let index = 65; index < 91; index++) {
    alphabet.push({
      idx: index,
      character: String.fromCharCode(index)
    });
  }
  const correctGuessed = props.gLetters.filter(elem => elem.guess).map(elem => elem.character);
  const incorrectGuessed = props.gLetters.filter(elem => !elem.guess).map(elem => elem.character);
  const keyboardButtons = alphabet.map(
    charObj => <button
      key={charObj.idx}
      onClick={props.handler}
      className={correctGuessed.includes(charObj.character) ? "correct" : (incorrectGuessed.includes(charObj.character) ? "wrong" : undefined)}
    >
      {charObj.character}
    </button>
  );
  return (
    <section className="keyboard">
      {keyboardButtons}
    </section>
  );
}

function NewGameSection() {
  return (
    <button className="new-game">New Game</button>
  );
}

export { App };