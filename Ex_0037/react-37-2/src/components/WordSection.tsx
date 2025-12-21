import type { JSX } from 'react';
import type { LetterGuess } from '../App';

function WordSection(props: {
  gameOver: boolean,
  currWA: string[],
  gLetters: Array<LetterGuess>
}): JSX.Element {
  const correctGuessed: Array<string> = props.gLetters
    .filter((elem:LetterGuess):boolean => elem.guess)
    .map((elem:LetterGuess):string => elem.character);
  const letterChips: Array<JSX.Element> = props.currWA.map(
    (letter: string, index: number): JSX.Element => <span
      key={index}
      className={`${props.gameOver && !correctGuessed.includes(letter) ? 'missed-letter' : ''}`}
    >
      {props.gameOver || correctGuessed.includes(letter) ? letter : " "}
    </span>
  )
  return (
    <section className="word">
      {letterChips}
    </section>
  );
}

export { WordSection };
