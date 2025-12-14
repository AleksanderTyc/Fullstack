function IngredientsList(props) {
    const ingredientsListItems = props.listIngredients.map((ingr, idx) => <li key={idx}>{ingr}</li>);
    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
            {ingredientsListItems.length > 3 && <div className="get-recipe-container">
                <div ref={props.readyRef}>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.handleGetRecipe}>Get a recipe</button>
            </div>}
        </section>);
}

export { IngredientsList };
