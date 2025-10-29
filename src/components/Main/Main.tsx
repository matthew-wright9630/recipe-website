import { useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import { Recipe } from "../../types/recipe";

function Main({
  handlePopupClick,
  recipeCards,
}: {
  handlePopupClick: (recipe: Recipe) => void;
  recipeCards: Array<Recipe>;
}) {
  function test() {
    console.log(recipeCards);
  }

  return (
    <div className="">
      <button onClick={test}>Test 2</button>
      <div className="grid grid-cols-3 gap-5">
        {recipeCards?.map((card) => {
          return (
            <RecipeCard
              name={card.name}
              shortDescription={card.shortDescription}
              image={card.image}
              directions={card.directions}
              ingredients={card.ingredients}
              recipeHeader={card.recipeHeader}
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
