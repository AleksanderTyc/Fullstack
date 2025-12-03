function Main() {
    const ingredients = ['Chicken', 'Oregano', 'Tomatoes'];

    // This is a very basic, simplistic approach. The page reloads.
    return (
        <main>
            <form onSubmit={() => console.log("Form submitted")} className="add-ingredient-form">
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
