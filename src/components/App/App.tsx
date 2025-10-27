import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { Recipe } from "../../types/recipe";
import "./App.css";
import RecipePopup from "../RecipePopup/RecipePopup";
import LoginPopup from "../LoginPopup/LoginPopup";
// import SignupPopup from "../SignupPopup/SignupPopup";

function App() {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [recipePopupInformation, setRecipePopupInformation] =
    useState<Recipe | null>(null);

  function handleRecipePopupClick(recipe: Recipe) {
    setActivePopup("recipe-popup");
    setRecipePopupInformation(recipe);
  }

  function handleLoginPopupClick() {
    setActivePopup("login-popup");
  }

  function handleSignupPopupClick() {
    setActivePopup("signup-popup");
  }

  const isRecipePopupOpen = activePopup === "recipe-popup";
  const isLoginPopupOpen = activePopup === "login-popup";
  const isSignupPopupOpen = activePopup === "signup-popup";

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

  useEffect(() => {
    if (activePopup !== "") {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [activePopup]);

  return (
    <div
      className={`min-h-screen mx-auto bg-gradient-to-b from-orange-500 to-green-700 p-6 text-white`}
    >
      <Header
        handleLoginPopupClick={handleLoginPopupClick}
        handleSignupPopupClick={handleSignupPopupClick}
      />
      <Routes>
        <Route
          path="/"
          element={<Main handlePopupClick={handleRecipePopupClick} />}
        />
      </Routes>
      {/*Popups: */}
      <RecipePopup
        name={recipePopupInformation?.name}
        shortDescription={recipePopupInformation?.shortDescription}
        image={recipePopupInformation?.image}
        directions={recipePopupInformation?.directions}
        ingredients={recipePopupInformation?.ingredients}
        recipeHeader={recipePopupInformation?.recipeHeader}
        notes={recipePopupInformation?.notes}
        author={recipePopupInformation?.author}
        isOpen={isRecipePopupOpen}
        handleClosePopup={handleClosePopup}
      />
      <LoginPopup isOpen={isLoginPopupOpen} />
      {/* <SignupPopup isOpen={isSignupPopupOpen}/> */}
    </div>
  );
}

export default App;
