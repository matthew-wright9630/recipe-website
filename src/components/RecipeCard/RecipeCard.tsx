//This will have a name, a short description, an image, and a full description.
//Update: a recipe card will have the following: a name, a short description, an image, prep time/cook time/servings (optional), ingrediants, directions, and notes.
import { RecipeCardProps } from "../../types/recipe";
import testFoodImage from "../../assets/lily-banse--YHSwy6uqvk-unsplash.jpg";

function RecipeCard({
  name,
  shortDescription,
  image,
  directions,
  ingredients,
  recipeHeader,
  notes,
  author,
  handlePopupClick,
}: RecipeCardProps) {
  return (
    <div className="border">
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
    </div>
  );
}

export default RecipeCard;
