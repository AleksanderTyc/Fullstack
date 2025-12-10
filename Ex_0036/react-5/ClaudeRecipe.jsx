import Markdown from 'react-markdown';

function ClaudeRecipe(props) {
    return (
        <section>
            <h2>Chef Claude Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
                <Markdown>{props.content}</Markdown>
            </article>
        </section>);
}

export { ClaudeRecipe };
