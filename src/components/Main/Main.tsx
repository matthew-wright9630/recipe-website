import RecipeCard from "../RecipeCard/RecipeCard";
import { Recipe } from "../../types/recipe";
import { User } from "../../types/user";

function Main({
  handlePopupClick,
  handleAddToGroupPopupClick,
  recipeCards,
  user,
  isLoggedIn,
}: {
  handlePopupClick: (recipe: Recipe) => void;
  handleAddToGroupPopupClick: (recipe: Recipe) => void;
  recipeCards: Array<Recipe>;
  user?: User;
  isLoggedIn: boolean;
}) {

  function checkIsLiked(recipeId: string) {
    if (!user) {
      return false;
    }
    // if (user.likedRecipes.includes(recipeId)) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  return (
    <div className="">
      <div className="grid grid-cols-3 gap-5 place-cotent-stretch">
        {recipeCards?.map((card) => {
          const isLiked = checkIsLiked(card.id);
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
              id={card.id}
              isLiked={isLiked}
              isLoggedIn={isLoggedIn}
              handlePopupClick={handlePopupClick}
              handleAddToGroupPopupClick={handleAddToGroupPopupClick}
              key={recipeCards.indexOf(card)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Main;
