import React from "react";
import { languages } from "./languages";
import { clsx } from "clsx";
import { getFarewellText } from "./utils";
import { words } from "./words";

function App() {
  const [currentWord, setCurrentWord] = React.useState('react');
  React.useEffect(
    () => {
      const wordSelected = words[Math.floor(Math.random() * words.length)];
      setCurrentWord(wordSelected);
    },
    []
  );
  const currentWordArr = Array.from(currentWord.toUpperCase()); // Their way: currentWord.split('')

  const [guessedLetters, setGuessedLetters] = React.useState([]);
  // console.log('* I * App, guessedLetters', guessedLetters);

  const correctGuess = guessedLetters.filter(elem => elem.guess).map(elem => elem.character);
  const isGameWon =
    currentWordArr.map(letter => correctGuess.includes(letter)).filter(elem => !elem).length === 0;
  const wrongGuessCount = guessedLetters.filter(elem => !elem.guess).length;
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;
  const showFarewell = !(guessedLetters.length === 0 || guessedLetters[guessedLetters.length - 1]['guess']);
  const farewellMessage = !isGameOver && wrongGuessCount > 0 && !guessedLetters[guessedLetters.length - 1]['guess'] ? getFarewellText(languages[wrongGuessCount - 1]['name']) : '';
  // console.log('* I * App, isGameWon, isGameLost, isGameOver', isGameWon, isGameLost, isGameOver);
  // console.log('* I * App, wrongGuessCount, farewellMessage', wrongGuessCount, farewellMessage);

  function handleLetterGuess(evt) {
    // console.log('* I * handleLetterGuess', evt.target.innerText);
    setGuessedLetters(prev =>
      prev.map(elem => elem.character).includes(evt.target.innerText) ? prev : [
        ...prev, { character: evt.target.innerText, guess: currentWordArr.includes(evt.target.innerText) }
      ]
    );
  }

  return (
    <main>
      <HeaderSection />
      <StatusSection farewellMessage={farewellMessage} gameOver={isGameOver} gameLost={isGameLost} gameWon={isGameWon} />
      <LanguageChipsSection wrongCount={wrongGuessCount} />
      <WordSection currWA={currentWordArr} gLetters={guessedLetters} />
      <KeyboardSection gameOver={isGameOver} gLetters={guessedLetters} handler={handleLetterGuess} />
      {isGameOver && <NewGameSection />}
    </main>
  );
}

function HeaderSection() {
  return (
    <header>
      <h1>Assembly: Endgame</h1>
      <p>Guess the word in under {languages.length - 1} attempts to keep the programming world safe from Assembly!</p>
    </header>
  );
}

function StatusSection(props) {
  // This design creates an empty section element, which does not size properly, but it is negligible.
  const className = `game-status ${props.gameWon ? 'won' : ''} ${props.gameLost ? 'lost' : ''} ${props.farewellMessage.length > 0 ? 'farewell' : ''}`;
  // const className = `game-status ${props.gameWon ? 'won' : ''} ${props.gameLost ? 'lost' : ''}  farewell`;
  return (
    <section className={className}>
      {props.gameWon ? <h2>You win!</h2> : null}
      {props.gameWon ? <p>Well done</p> : null}
      {props.gameLost ? <h2>Game over!</h2> : null}
      {props.gameLost ? <p>You lose! Better start learning Assembly</p> : null}
      {props.farewellMessage.length > 0 ? <p className="farewell-message">{props.farewellMessage}</p> : null}
    </section>
  );

  // This is filnal else, but it is not really necessary, because section formatting ensures space taken.
  /*
    return (
      <section className="game-status" style={{visibility:"hidden"}}>
        <h2>Game over!</h2>
        <p>You lose! Better start learning Assembly</p>
      </section>
    );
  */
  // This, however, means that we can perhaps further simplify the code:
  /*
    if( props.gameWon ) {
    return (
      <section className="game-status won">
        <h2>You win!</h2>
        <p>Well done</p>
      </section>
    );
  } else if(props.gameLost) {
    return (
      <section className="game-status lost">
        <h2>Game over!</h2>
        <p>You lose! Better start learning Assembly</p>
      </section>
    );
  } else {
    return (
      <section className="game-status">
      </section>
    );
  }
  */
}

function LanguageChipsSection(props) {
  // Note that the value of style in JSX is a JS object. We could avoid shortcut by coding:
  // const styles = { backgroundColor: chip.backgroundColor, color: chip.color }
  // style={styles}
  const languageChips = languages.map(
    (chip, index) => {
      const className = clsx({
        lost: index < props.wrongCount,
        chip: true
      });
      // Alternatively:
      // const className = `chip ${(index < props.wrongCount) && "lost"}`;
      // or
      // const className = clsx('chip', (index < props.wrongCount) && "lost");
      return (<span
        key={index}
        style={{ backgroundColor: chip.backgroundColor, color: chip.color }}
        className={className}
      >{chip.name}</span>);
    }
  );
  return (
    <section className="language-chips">
      {languageChips}
    </section>
  )
}

function WordSection(props) {
  const correctGuessed = props.gLetters.filter(elem => elem.guess).map(elem => elem.character);
  const letterChips = props.currWA.map(
    (letter, index) => <span key={index}>
      {correctGuessed.includes(letter) ? letter : " "}
    </span>
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
      disabled={props.gameOver}
      className={clsx({
        correct: correctGuessed.includes(charObj.character),
        wrong: incorrectGuessed.includes(charObj.character)
      })}
    >
      {charObj.character}
    </button>
  );
  // className={correctGuessed.includes(charObj.character) ? "correct" : (incorrectGuessed.includes(charObj.character) ? "wrong" : undefined)}
  // With clsx package:
  // className={clsx({correct:correctGuessed.includes(charObj.character), wrong:incorrectGuessed.includes(charObj.character) })}
  // can be further separated into individual expressions and lines of code
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