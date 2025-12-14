import React from "react";
import { ClaudeRecipe } from "./ClaudeRecipe";
import { IngredientsList } from "./IngredientsList";
import { getRecipeFromAI } from "./ai";


function Main() {
    // This is a very basic, simplistic approach. The page reloads.
    // <form onSubmit={() => console.log("Form submitted")}

    // Disable page reload.
    // Read new ingredient's value

    // Use State to manage the array of ingredients
    // const [ingredients, setIngredients] = React.useState(['Chicken', 'Oregano', 'Tomatoes']);
    // const [ingredients, setIngredients] = React.useState(['Egg', 'Bacon', 'Cream', 'Milk', 'Flour', 'Onion']);
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

    const [recipeContent, setRecipeContent] = React.useState('');
    const refReady = React.useRef(null); // Notice how we declare it as const, but we know that "it" can be reassigned.
    // In reality, refReady is an object, it contains a property "current", and this property is variable.
    // console.log('* I * refReady while rendering:', refReady);
    // We can see that it is null at first render and it becomes <div> when the IngredientsList component is first rendered.

    React.useEffect(() => { (refReady.current !== null) && refReady.current.scrollIntoView(); }, [recipeContent]);

    function handleGetRecipe() {
        const responseRecipe = getRecipeFromAI(ingredients);
        responseRecipe.then(answer => setRecipeContent(answer.choices[0].message.content));
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
            {ingredients.length > 0 && <IngredientsList readyRef={refReady} listIngredients={ingredients} handleGetRecipe={handleGetRecipe} />}
            {recipeContent && <ClaudeRecipe content={recipeContent} />}
        </main>
    );
}

export { Main };
