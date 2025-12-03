import React from "react";

function Main() {
    // This is a very basic, simplistic approach. The page reloads.
    // <form onSubmit={() => console.log("Form submitted")}

    // Disable page reload.
    // Read new ingredient's value

    // Use State to manage the array of ingredients
    const [ingredients, setIngredients] = React.useState(['Chicken', 'Oregano', 'Tomatoes']);

    function handleOnSubmit(evt) {
        evt.preventDefault();
        const formData = new FormData(evt.currentTarget);
        const newIngredient = formData.get("ingredient");
        // console.log( ...ingredients);
        console.log("Form submitted", newIngredient, Array.of(...ingredients, newIngredient));
        setIngredients(Array.of(...ingredients, newIngredient));
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
