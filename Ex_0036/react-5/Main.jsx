import React from "react";

function Main() {
    // This is a very basic, simplistic approach. The page reloads.
    // <form onSubmit={() => console.log("Form submitted")}

    // Disable page reload.
    // Read new ingredient's value

    // Use State to manage the array of ingredients
    // const [ingredients, setIngredients] = React.useState(['Chicken', 'Oregano', 'Tomatoes']);
    const [ingredients, setIngredients] = React.useState([]);
    // Remember - modifying state variable `ingredients` directly is not allowed.
    // We can do it by referring to `ingredients`:
    // setIngredients(Array.of(...ingredients, newIngredient));
    // We can also use a callback function, which receives the previous value of state:
    // setIngredients(previousIngredients => Array.of(...previousIngredients, newIngredient));
    // Simplified: setIngredients(previousIngredients => [...previousIngredients, newIngredient]);
    // Initially I thought that the callback's argument is different from the state itself, so this should work:
    // setIngredients(previousIngredients => {
    //     previousIngredients.push(newIngredient);
    //     return previousIngredients;
    // });
    // But it does not. Also what does not work is:
    // setCount(count => count++);
    // where count is integer.
    // Difference:
    // setCount(count +1);
    // setCount(count +1);
    // As we know it "executes" only once. Whereas:
    // setCount(count => count+1);
    // setCount(count => count+1);
    // will result in count increase of 2.
    // The course seems to suggest against using the state directly. Instead, if we need the previous state
    // to determine the new state, we should use callback function.

    // Similarly to setIngredients(previousIngredients => [...previousIngredients, newIngredient]);
    // we can also update the state of an object, where only a particular property requires changing:
    // setContact(prevContact => {...prevContact, prevContact.email: newEmail});
    // setContact(prevContact => {...prevContact, prevContact.isFavourite: !prevContact.isFavourite});

    const ingredientsListItems = ingredients.map((ingr, idx) => <li key={idx}>{ingr}</li>);

    const [recipeShown, setRecipeShown] = React.useState(false);

    function handleGetRecipe() {
        setRecipeShown(true);
    }

    function handleOnSubmit(formData) {
        // evt.preventDefault();
        // const formData = new FormData(evt.currentTarget);
        const newIngredient = formData.get("ingredient");
        // console.log( ...ingredients);
        console.log("Form submitted", newIngredient, Array.of(...ingredients, newIngredient));
        setIngredients(previousIngredients => Array.of(...previousIngredients, newIngredient));
    }

    return (
        <main>
            <form action={handleOnSubmit} className="add-ingredient-form">
                <input name="ingredient" type="text" placeholder="e.g. oregano" aria-label="Add ingredient"></input>
                <button>Add ingredient</button>
            </form>
            {ingredientsListItems.length > 0 && <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                {ingredientsListItems.length > 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={handleGetRecipe}>Get a recipe</button>
                </div>}
            </section>}
            {recipeShown && <section>
                <h2>Chef Claude Recommends:</h2>
                <article className="suggested-recipe-container" aria-live="polite">
                    <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
                    <h3>Beef Bolognese Pasta</h3>
                    <strong>Ingredients:</strong>
                    <ul>
                        <li>1 lb. ground beef</li>
                        <li>1 onion, diced</li>
                        <li>3 cloves garlic, minced</li>
                        <li>2 tablespoons tomato paste</li>
                        <li>1 (28 oz) can crushed tomatoes</li>
                        <li>1 cup beef broth</li>
                        <li>1 teaspoon dried oregano</li>
                        <li>1 teaspoon dried basil</li>
                        <li>Salt and pepper to taste</li>
                        <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
                    </ul>
                    <strong>Instructions:</strong>
                    <ol>
                        <li>Bring a large pot of salted water to a boil for the pasta.</li>
                        <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
                        <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
                        <li>Stir in the tomato paste and cook for 1 minute.</li>
                        <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
                        <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
                        <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
                        <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
                        <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
                    </ol>
                </article>
            </section>}
        </main>
    );
}

export { Main };
