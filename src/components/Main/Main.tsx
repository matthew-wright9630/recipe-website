import { useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import { Recipe } from "../../types/recipe";

function Main({ handlePopupClick, isOpen }) {
  const [recipeCards, setRecipeCards] = useState<Recipe[]>([
    {
      name: "Test Card",
      shortDescription: "This is a shortDescription used for testing purposes.",
      image: "",
      directions: [""],
      ingredients: [],
      cooktime: { servings: "", prepTime: "", cookTime: "" },
      notes: "",
      author: "",
    },
  ]);

  function addRecipe() {
    setRecipeCards([
      {
        name: "Buckeyes",
        shortDescription: "Peanut butter and chocolate dessert",
        image: "",
        directions: [
          "Thoroughly mix all the ingredients except for the chocolate.",
          "Add more powdered sugar (up to 1 cup) if it is too sticky. Chill 2 hours. ",
          "Roll into 1 inch balls.",
          "Dip each ball into melted chocolate, leaving a nickel sized spot bare.",
          "Place on was paper and chill until the chocolate is set.",
        ],
        ingredients: [
          { name: "butter", amount: 6, unitOfMeasure: "tbsp" },
          { name: "peanut butter", amount: 0.5, unitOfMeasure: "cup" },
          { name: "crushed graham crackers", amount: 1, unitOfMeasure: "cup" },
          { name: "vanilla", amount: 0.5, unitOfMeasure: "tsp" },
          {
            name: "powdered sugar",
            amount: 1,
            unitOfMeasure: "cup",
          },
          {
            name: "coconut",
            amount: 0.75,
            unitOfMeasure: "cup",
            notes: "(optional)",
          },
          { name: "melting chocolate", amount: 10, unitOfMeasure: "oz" },
        ],
        cooktime: { servings: "16", prepTime: "10 mins", cookTime: "30 mins" },
        notes:
          "Use a tootpick to dip the balls into the chocolate. if the balls are too soft to dip, freeze them for 15 minutes.",
        author: "Laura Wright",
      },

      {
        name: "Second Test",
        shortDescription: "This is the second card.",
        image: "",
        directions: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
        ],
        ingredients: [],
        cooktime: { servings: "", prepTime: "", cookTime: "" },
        notes: "",
        author: "",
      },

      {
        name: "test",
        shortDescription:
          "This is a shortDescription used for testing purposes.",
        image: "",
        directions: [""],
        ingredients: [],
        cooktime: { servings: "", prepTime: "", cookTime: "" },
        notes: "",
        author: "",
      },
      {
        name: "test",
        shortDescription: "New Test",
        image: "",
        directions: [""],
        ingredients: [],
        cooktime: { servings: "", prepTime: "", cookTime: "" },
        notes: "",
        author: "",
      },
      {
        name: "Second Test",
        shortDescription: "This is the second card.",
        image: "",
        directions: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
        ],
        ingredients: [],
        cooktime: { servings: "", prepTime: "", cookTime: "" },
        notes: "",
        author: "",
      },
      {
        name: "test",
        shortDescription:
          "This is a shortDescription used for testing purposes.",
        image: "",
        directions: [""],
        ingredients: [],
        cooktime: { servings: "", prepTime: "", cookTime: "" },
        notes: "",
        author: "",
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
      <div className="grid grid-cols-3 gap-5">
        {recipeCards?.map((card) => {
          return (
            <RecipeCard
              name={card.name}
              shortDescription={card.shortDescription}
              image={card.image}
              directions={card.directions}
              ingredients={card.ingredients}
              cooktime={card.cooktime}
              notes={card.notes}
              author={card.author}
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
