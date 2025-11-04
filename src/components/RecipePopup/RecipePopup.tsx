import Popup from "../Popup/Popup";
import { Recipe } from "../../types/recipe";
import testFoodImage from "../../assets/lily-banse--YHSwy6uqvk-unsplash.jpg";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/solid";
import { ShareIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";

type RecipePopupProps = Recipe & {
  isOpen: boolean;
  isLoggedIn: boolean;
  isLiked?: boolean;
  scrollRef: React.RefObject<HTMLDivElement>;
  handleClosePopup: () => void;
  handleAddToGroupPopupClick: (recipe: Recipe) => void;
  handleOpenOverlayPopup: () => void;
};

function RecipePopup({
  name,
  shortDescription,
  image,
  directions,
  ingredients,
  recipeHeader,
  author,
  notes,
  isOpen,
  isLoggedIn,
  id,
  isLiked,
  scrollRef,
  handleAddToGroupPopupClick,
  handleClosePopup,
  handleOpenOverlayPopup,
}: RecipePopupProps) {
  if (!name) {
    return;
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // useEffect(() => {
  //   const el = scrollRef.current;
  //   if (!el) return;
  //   const log = () => console.log("scrollTop:", el.scrollTop);
  //   el.addEventListener("scroll", log);
  //   return () => el.removeEventListener("scroll", log);
  // }, [scrollRef]);

  return (
    <div className="">
      <Popup
        title={name}
        onClose={handleClosePopup}
        isOpen={isOpen}
        children={
          <div ref={scrollRef} className="flex flex-col gap-5 h-[90%] mx-5 overflow-y-auto">
            <button className="absolute top-[50px] right-[5px] hover:opacity-70 transition-all">
              <ArrowTopRightOnSquareIcon className="w-7 h-7" />
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
            <div className="self-end flex gap-3 border border-black">
              <p className="text-lg">Servings: {recipeHeader.servings}</p>
              <p className="text-lg">Prep Time: {recipeHeader.prepTime}</p>
              <p className="text-lg">Cook Time: {recipeHeader.cookTime}</p>
            </div>
            <div className="">
              <h3 className="text-2xl my-2">Ingredients:</h3>
              {ingredients?.map((item) => {
                return (
                  <p className="text-lg" key={item.name}>
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
                return (
                  <p className="text-lg" key={directions.indexOf(step)}>
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
            <div className={`flex ${isLoggedIn ? "justify-around" : ""}`}>
              <button
                onClick={() => {
                  handleOpenOverlayPopup();
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
                className="button w-[30px] h-[30px] px-0 text-sm"
              >
                <ShareIcon className="w-full h-full p-1" />
                <div className="h-[30px]"></div>
              </button>
              {isLoggedIn ? (
                <>
                  <button>
                    <HeartIcon
                      className={` w-[30px] h-[30px] hover:opacity-60 transition-opacity ${isLiked ? "fill-red-500" : "fill-transparent stroke-white"}`}
                    />
                  </button>
                </>
              ) : (
                ""
              )}
            </div>
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
