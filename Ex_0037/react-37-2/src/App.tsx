import React from "react";
import { languages } from "./languages";
import { getFarewellText, getRandomWord } from "./utils";

import { HeaderSection } from "./components/HeaderSection";
import { StatusSection } from "./components/StatusSection";
import { LanguageChipsSection } from "./components/LanguageChipsSection";
import { WordSection } from "./components/WordSection";
import { KeyboardSection } from "./components/KeyboardSection";

type LetterGuess = { character: string, guess: boolean };

function App() {
  /*
  const [currentWord, setCurrentWord] = React.useState('react');
  React.useEffect(
    () => {
      const wordSelected = words[Math.floor(Math.random() * words.length)];
      setCurrentWord(wordSelected);
    },
    []
  );
  */
  // The above is an overkill, because useState initialises the state only once, at load.
  // It does not modify the state at rereder.
  // Their first approach:
  // const [currentWord, setCurrentWord] = React.useState(words[Math.floor(Math.random() * words.length)]);
  // Actually they wrapped the words[...] into another utils function and just call that function here.
  // What is wrong with this approach?
  // React evaluates the useState expression every time it renders the component,
  // but uses its value only on load.
  // To avoid that behaviour:
  // const [currentWord, setCurrentWord] = React.useState(() => getRandomWord());
  // Have a look at "Start a new game" functionality. I like the idea of a utility function more and more.
  const [currentWord, setCurrentWord] = React.useState<string>(''); // Explicitly typed - TS could infer it.
  // How to type an arrow function, e.g.
  // const [currentWord, setCurrentWord] = React.useState(() => getRandomWord());
  // This is how it is done:
  // const [currentWord, setCurrentWord] = React.useState(():string => getRandomWord());
  // It stipulates that getRandomWord() is a string, i.e. the unnamed arrow function returns a string.

  const [guessedLetters, setGuessedLetters] = React.useState<Array<LetterGuess>>([]); // Explicitly typed - TS could not infer it from empty array.
  // console.log('* I * App, guessedLetters', guessedLetters);

  function startNewGame() {
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
  }

  React.useEffect(() => startNewGame(), []);

  const currentWordArr: string[] = Array.from(currentWord.toUpperCase()); // Their way: currentWord.split('')

  const correctGuess: string[] = guessedLetters.filter(elem => elem.guess).map(elem => elem.character);
  const isGameWon: boolean =
    currentWordArr.map(letter => correctGuess.includes(letter)).filter(elem => !elem).length === 0;
  const wrongGuessCount: number = guessedLetters.filter(elem => !elem.guess).length;
  const isGameLost: boolean = wrongGuessCount >= languages.length - 1;
  const isGameOver: boolean = isGameWon || isGameLost;
  // const showFarewell = !(guessedLetters.length === 0 || guessedLetters[guessedLetters.length - 1]['guess']);
  const farewellMessage: string =
    !isGameOver && wrongGuessCount > 0 && !guessedLetters[guessedLetters.length - 1]['guess'] ?
      getFarewellText(languages[wrongGuessCount - 1]['name']) : '';
  // console.log('* I * App, isGameWon, isGameLost, isGameOver', isGameWon, isGameLost, isGameOver);
  // console.log('* I * App, wrongGuessCount, farewellMessage', wrongGuessCount, farewellMessage);

  function handleLetterGuess(evt: any): void {
    // console.log('* I * handleLetterGuess', evt.target.innerText);
    setGuessedLetters((prev: Array<LetterGuess>): Array<LetterGuess> =>
      prev.map(elem => elem.character).includes(evt.target.innerText) ? prev : [
        ...prev, { character: evt.target.innerText, guess: currentWordArr.includes(evt.target.innerText) }
      ]
    );
  }

  return (
    <main>
      <HeaderSection
        languages={languages}
      />
      <StatusSection
        farewellMessage={farewellMessage}
        gameOver={isGameOver}
        gameLost={isGameLost}
        gameWon={isGameWon}
      />
      <LanguageChipsSection
        languages={languages}
        wrongCount={wrongGuessCount}
      />
      <WordSection
        gameOver={isGameOver}
        currWA={currentWordArr}
        gLetters={guessedLetters}
      />
      <KeyboardSection
        gameOver={isGameOver}
        gLetters={guessedLetters}
        handler={handleLetterGuess}
      />
      {isGameOver && <NewGameSection handleNewGame={startNewGame} />}
    </main>
  );
}

function NewGameSection(props: { handleNewGame: () => void }) {
  return (
    <button onClick={props.handleNewGame} className="new-game">New Game</button>
  );
}

export type { LetterGuess };
export { App };
