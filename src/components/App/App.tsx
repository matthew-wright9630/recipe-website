import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { Recipe } from "../../types/recipe";
import "./App.css";
import RecipePopup from "../RecipePopup/RecipePopup";

function App() {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [recipePopupInformation, setRecipePopupInformation] =
    useState<Recipe | null>(null);

  function handleRecipePopupClick(recipe: Recipe) {
    setActivePopup("recipe-popup");
    setRecipePopupInformation(recipe);
  }

  const isRecipePopupOpen = activePopup === "recipe-popup";

  function handleClosePopup() {
    setActivePopup("");
  }

  useEffect(() => {
    if (!activePopup) return;

    const handleEscPress = (evt: KeyboardEvent) => {
      if (evt.key === "Escape") {
        handleClosePopup();
      }
    };

    function handleOverlayClick(evt: MouseEvent) {
      const target = evt.target as HTMLElement;

      if (target.classList.contains("opacity-100")) {
        handleClosePopup();
      }
    }

    document.addEventListener("keydown", handleEscPress);
    document.addEventListener("mousedown", handleOverlayClick);

    return () => {
      document.removeEventListener("keydown", handleEscPress);
      document.removeEventListener("mousedown", handleOverlayClick);
    };
  }, [activePopup]);

  return (
    <div className="min-h-screen mx-auto bg-gradient-to-b from-orange-500 to-green-700 p-6 text-white">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Main handlePopupClick={handleRecipePopupClick} />}
        />
      </Routes>

      {recipePopupInformation ? (
        <RecipePopup
          name={recipePopupInformation.name}
          shortDescription={recipePopupInformation.shortDescription}
          image={recipePopupInformation.image}
          fullDescription={recipePopupInformation.fullDescription}
          isOpen={isRecipePopupOpen}
          handleClosePopup={handleClosePopup}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
