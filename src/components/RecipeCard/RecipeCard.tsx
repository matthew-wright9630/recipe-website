import { Recipe } from "../../types/recipe";
import testFoodImage from "../../assets/lily-banse--YHSwy6uqvk-unsplash.jpg";
import { HeartIcon } from "@heroicons/react/24/solid";
import { ShareIcon } from "@heroicons/react/24/solid";

type RecipeCardProps = Recipe & {
  handlePopupClick: (recipe: Recipe) => void;
  handleAddToGroupPopupClick: (recipe: Recipe) => void;
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
  handleAddToGroupPopupClick,
  handlePopupClick,
}: RecipeCardProps) {
  return (
    <div className="border relative">
      <button
        className="hover:opacity-70 transition-all flex flex-col h-full gap-3"
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
        <p className="text-lg text-center">{shortDescription}</p>
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <img
            className="mt-auto"
            src={testFoodImage}
            alt="No image - placeholder"
          ></img>
        )}
      </button>
      {isLoggedIn ? (
        <>
          <button>
            <HeartIcon
              className={`absolute bottom-0 right-0  w-[30px] h-[30px] hover:opacity-60 transition-opacity ${isLiked ? "fill-red-500" : "fill-transparent stroke-white"}`}
            />
          </button>
        </>
      ) : (
        ""
      )}
      <button
        onClick={() => {
          handleAddToGroupPopupClick({
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
        className="button absolute bottom-0 left-0 w-[30px] h-[30px] px-0 text-sm"
      >
        <ShareIcon className="w-full h-full p-1" />
      </button>
    </div>
  );
}

export default RecipeCard;
