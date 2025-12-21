import type { JSX } from 'react';

// Alternatively:
/*
type StatusSectionProps = {
    farewellMessage: string,
    gameOver: boolean,
    gameLost: boolean,
    gameWon: boolean
};
function StatusSection(props: StatusSectionProps {
*/
// Notice the naming convention.

function StatusSection(props: {
    farewellMessage: string,
    gameOver: boolean,
    gameLost: boolean,
    gameWon: boolean
}): JSX.Element {
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

export { StatusSection };
