function Main() {
    const ingredients = ['Chicken', 'Oregano', 'Tomatoes'];

    // This is a very basic, simplistic approach. The page reloads.
    // <form onSubmit={() => console.log("Form submitted")}

    // Disable page reload.
    function handleOnSubmit(evt) {
        evt.preventDefault();
        console.log("Form submitted", evt.target);
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
