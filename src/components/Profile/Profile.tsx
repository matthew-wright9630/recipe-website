import { Recipe } from "../../types/recipe";
import { User } from "../../types/user";
import RecipeCard from "../RecipeCard/RecipeCard";

function Profile({
  handlePopupClick,
  handleAddToGroupPopupClick,
  recipeCards,
  user,
  isLoggedIn,
}: {
  handlePopupClick: (recipe: Recipe) => void;
  handleAddToGroupPopupClick: (recipe: Recipe) => void;
  recipeCards: Array<Recipe>;
  user: User;
  isLoggedIn: boolean;
}) {
  console.log(handlePopupClick, recipeCards, user, isLoggedIn);

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
    <div>
      {/* For each group that is shared with a user, a card is shown. If the user clicks on the group, it will enter that group. 
      It will look similar to the homepage, but only shows the recipes saved to that group. */}
      <div className="grid-items">
        {recipeCards?.map((card) => {
          const isLiked = checkIsLiked(card.id);
          {
            return isLiked ? (
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
            ) : null;
          }
        })}
      </div>
    </div>
  );
}

export default Profile;
