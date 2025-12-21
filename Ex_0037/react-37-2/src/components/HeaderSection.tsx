import type { JSX } from 'react';
import type { Language } from '../languages';

function HeaderSection(props : {languages:Array<Language>}): JSX.Element {
    return (
        <header>
            <h1>Assembly: Endgame</h1>
            <p>Guess the word in under {props.languages.length - 1} attempts to keep the programming world safe from Assembly!</p>
        </header>
    );
}

// Alternative syntax, not recommended here:
// const HeaderSection: React.FC<props> = () => {...};

// It may happen that a function does not return JSX.Element, but a null instead, e.g. conditionally.
// function HeaderSection(props): JSX.Element | null {
// Used in Confettin scenario:
/*
import Confetti from 'react-confetti;
import {JSX} from 'react';
function ConfettiContainer({isGameWon} : {isGameWon:boolean}) : JSX.Element | null {
if( !isGameWon) { return null; }
else {return (<Confetti recycle={false} numberOfPieces={1000} />);}
}
*/


export { HeaderSection };
