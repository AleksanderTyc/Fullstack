import type { JSX } from 'react';
import type { Language } from '../languages';

import { clsx } from "clsx";

function LanguageChipsSection(
  props: {
    languages: Array<Language>,
    wrongCount: number
  }): JSX.Element {
  // Note that the value of style in JSX is a JS object. We could avoid shortcut by coding:
  // const styles = { backgroundColor: chip.backgroundColor, color: chip.color }
  // style={styles}
  const languageChips: Array<JSX.Element> = props.languages.map(
    (chip: Language, index: number): JSX.Element => {
      const className = clsx({
        lost: index < props.wrongCount,
        chip: true
      });
      // Alternatively:
      // const className = `chip ${(index < props.wrongCount) && "lost"}`;
      // or
      // const className = clsx('chip', (index < props.wrongCount) && "lost");

      // Also notice that the style={} value below is typed: Omit<Language, "name">
      return (<span
        key={index}
        style={{ backgroundColor: chip.backgroundColor, color: chip.color }
        }
        className={className}
      > {chip.name} </span>);
    }
  );
  return (
    <section className="language-chips" >
      {languageChips}
    </section>
  )
}

export { LanguageChipsSection };
