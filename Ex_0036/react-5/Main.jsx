import React from "react";

function Main() {
    // This is a very basic, simplistic approach. The page reloads.
    // <form onSubmit={() => console.log("Form submitted")}

    // Disable page reload.
    // Read new ingredient's value

    // Use State to manage the array of ingredients
    const [ingredients, setIngredients] = React.useState(['Chicken', 'Oregano', 'Tomatoes']);
    // Remember - modifying state variable `ingredients` directly is not allowed.
    // We can do it by referring to `ingredients`:
    // setIngredients(Array.of(...ingredients, newIngredient));
    // We can also use a callback function, which receives the previous value of state:
    // setIngredients(previousIngredients => Array.of(...previousIngredients, newIngredient));
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

    function handleOnSubmit(evt) {
        evt.preventDefault();
        const formData = new FormData(evt.currentTarget);
        const newIngredient = formData.get("ingredient");
        // console.log( ...ingredients);
        console.log("Form submitted", newIngredient, Array.of(...ingredients, newIngredient));
        setIngredients(previousIngredients => Array.of(...previousIngredients, newIngredient));
    }

    return (
        <main>
            <form onSubmit={handleOnSubmit} className="add-ingredient-form">
                <input name="ingredient" type="text" placeholder="e.g. oregano" aria-label="Add ingredient"></input>
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredients.map((ingr, idx) => <li key={idx}>{ingr}</li>)}
            </ul>
        </main>
    );
}

export { Main };
