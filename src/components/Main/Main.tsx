import { useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

function Main({ handlePopupClick }) {
  const [recipeCards, setRecipeCards] = useState([
    {
      name: "Test Card",
      description: "This is a description used for testing purposes.",
      image: "",
      fullDescription: "",
    },
  ]);

  function addRecipe() {
    setRecipeCards([
      { name: "test", description: "New Test", image: "", fullDescription: "" },
      {
        name: "Second Test",
        description: "This is the second card.",
        image: "",
        fullDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      },
      {
        name: "test",
        description: "This is a description used for testing purposes.",
        image: "",
        fullDescription: "",
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
              image={card.image}
              fullDescription={card.fullDescription}
              handlePopupClick={handlePopupClick}
              key={recipeCards.indexOf(card)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Main;
