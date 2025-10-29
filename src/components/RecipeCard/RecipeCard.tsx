//This will have a name, a short description, an image, and a full description.
//Update: a recipe card will have the following: a name, a short description, an image, prep time/cook time/servings (optional), ingrediants, directions, and notes.
import { RecipeCardProps } from "../../types/recipe";
import testFoodImage from "../../assets/lily-banse--YHSwy6uqvk-unsplash.jpg";
import { HeartIcon } from "@heroicons/react/24/solid";

type RecipeCardPropsWithLikes = RecipeCardProps & {
  isLiked: boolean;
  isLoggedIn: boolean;
};

function RecipeCard({
  name,
  shortDescription,
  image,
  directions,
  ingredients,
  recipeHeader,
  notes,
  author,
  id,
  isLiked,
  isLoggedIn,
  handlePopupClick,
}: RecipeCardPropsWithLikes) {
  return (
    <div className="border relative">
      <button
        className="hover:opacity-50 transition-all"
        onClick={() => {
          handlePopupClick({
            name,
            shortDescription,
            image,
            directions,
            ingredients,
            recipeHeader,
            notes,
            author,
            id,
          });
        }}
      >
        <h3 className="text-3xl text-center">{name}</h3>
        <p className="text-xl text-center">{shortDescription}</p>
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <img src={testFoodImage} alt="No image - placeholder"></img>
        )}
      </button>
      {isLoggedIn ? (
        <button>
          <HeartIcon
            className={`absolute bottom-0 right-0  w-[30px] h-[30px] ${isLiked ? "fill-red-500" : "fill-transparent stroke-white"}`}
          />
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default RecipeCard;
