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
  fullDescription,
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
          <div className="flex flex-col items-center gap-5 h-[100%]">
            <button className="absolute top-0 right-0 hover:opacity-70 transition-all">
              <ArrowTopRightOnSquareIcon className=" w-7 h-7" />
            </button>
            <p className="text-xl">{shortDescription}</p>
            {image ? (
              <img src={image} alt={name} />
            ) : (
              <img className="w-[90%] h-1/2" src={testFoodImage} alt="No image - placeholder"></img>
            )}
            <p className="text-xl">{fullDescription}</p>
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
