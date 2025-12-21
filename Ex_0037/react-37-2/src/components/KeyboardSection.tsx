import type { JSX } from 'react';
import type { LetterGuess } from '../App';

import { clsx } from "clsx";

function KeyboardSection(props: {
    gameOver: boolean,
    gLetters: Array<LetterGuess>
    handler: (evt: any) => void
}): JSX.Element {
    type CharacterObject = { idx: number, character: string };
    const alphabet: Array<CharacterObject> = [];
    for (let index: number = 65; index < 91; index++) {
        alphabet.push({
            idx: index,
            character: String.fromCharCode(index)
        });
    }
    const correctGuessed = props.gLetters
        .filter((elem: LetterGuess): boolean => elem.guess)
        .map((elem: LetterGuess): string => elem.character);
    const incorrectGuessed = props.gLetters
        .filter((elem: LetterGuess): boolean => !elem.guess)
        .map((elem: LetterGuess): string => elem.character);
    const keyboardButtons: Array<JSX.Element> = alphabet.map(
        (charObj: CharacterObject): JSX.Element => <button
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

export { KeyboardSection };
