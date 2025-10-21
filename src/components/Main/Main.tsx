import { useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

function Main() {
  // const [count, setCount] = useState(0);
  const [recipeCards, setRecipeCards] = useState([
    {
      name: "Test Card",
      description: "This is a description used for testing purposes.",
    },
  ]);

  function addRecipe() {
    setRecipeCards([
      { name: "test", description: "New Test" },
      { name: "Second Test", description: "This is the second card." },
      {
        name: "test",
        description: "This is a description used for testing purposes.",
      },
    ]);
  }

  return (
    <div className="">
      <button
        className="rounded-md bg-gray-400 transition-all duration-500 hover:bg-gray-600"
        onClick={addRecipe}
      >
        Test Game Card
      </button>
      <div className="grid grid-cols-3">
        {recipeCards?.map((card) => {
          return (
            <RecipeCard
              name={card.name}
              shortDescription={card.description}
              key={recipeCards.indexOf(card)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Main;
