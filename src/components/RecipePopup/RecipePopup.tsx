import Popup from "../Popup/Popup";
import { Recipe } from "../../types/recipe";
import testFoodImage from "../../assets/lily-banse--YHSwy6uqvk-unsplash.jpg";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

type RecipePopupProps = Recipe & {
  isOpen: boolean;
  handleClosePopup: (recipe: Recipe) => void;
};

function RecipePopup({
  name,
  shortDescription,
  image,
  directions,
  ingredients,
  cooktime,
  author,
  notes,
  isOpen,
  handleClosePopup,
}: RecipePopupProps) {
  return (
    <div className="">
      <Popup
        title={name}
        onClose={handleClosePopup}
        isOpen={isOpen}
        children={
          <div className="flex flex-col gap-5 h-[90%] mx-5">
            <button className="absolute top-0 right-0 hover:opacity-70 transition-all">
              <ArrowTopRightOnSquareIcon className=" w-7 h-7" />
            </button>
            <p className="text-xl self-center">{shortDescription}</p>
            {image ? (
              <img src={image} alt={name} />
            ) : (
              <img
                className="w-[100%] h-1/2"
                src={testFoodImage}
                alt="No image - placeholder"
              ></img>
            )}
            <div className="">
              <h3 className="text-2xl my-2">Ingredients:</h3>
              {ingredients?.map((item) => {
                console.log(ingredients);
                return (
                  <p className="text-lg">
                    {ingredients.indexOf(item) + 1}. {item.amount}{" "}
                    {item.unitOfMeasure} of {item.name}{" "}
                    {item.notes ? item.notes : ""}
                  </p>
                );
              })}
            </div>
            <div>
              <h3 className="text-2xl my-2">Directions:</h3>
              {directions?.map((step) => {
                console.log(ingredients);
                return (
                  <p className="text-lg">
                    {directions.indexOf(step) + 1}. {step}
                  </p>
                );
              })}
            </div>
            {notes ? (
              <div>
                <h3 className="text-2xl my-2">Notes</h3>
                <p className="text-lg">{notes}</p>
              </div>
            ) : (
              ""
            )}
            <div className="h-10 self-center">Authored by: {author}</div>
          </div>
        }
      ></Popup>
    </div>
  );
  {
    /* <h3 className="text-3xl text-center">{name}</h3>
      <p className="text-xl text-center">{shortDescription}</p>
      {image ? <img src={image} alt={name} /> : ""} */
  }
}

export default RecipePopup;
