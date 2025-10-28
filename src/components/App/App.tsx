import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { Recipe } from "../../types/recipe";
import "./App.css";
import RecipePopup from "../RecipePopup/RecipePopup";
import LoginPopup from "../LoginPopup/LoginPopup";
import SignupPopup from "../SignupPopup/SignupPopup";
// import SignupPopup from "../SignupPopup/SignupPopup";

function App() {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [error, setError] = useState("");
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

  const handleLogin = ({
    email,
    password,
    resetForm,
  }: {
    email: string;
    password: string;
    resetForm: () => void;
  }) => {
    if (!email || !password) {
      return;
    }

    resetForm();
    handleClosePopup();
  };

  const handleSignup = ({
    userName,
    email,
    password,
    confirmPassword,
    resetForm,
  }: {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    resetForm: () => void;
  }) => {
    if (password !== confirmPassword) {
      setError("Passwords to not match");
      return;
    }
    if (!email || !password) {
      return;
    }

    console.log(email, password);
    resetForm();
    handleClosePopup();
    setError("");
  };

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
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [activePopup]);

  // useEffect(() => {
  //   if (activePopup !== "") {
  //     document.body.classList.add("overflow-hidden");
  //   } else {
  //     document.body.classList.remove("overflow-hidden");
  //   }

  //   return () => document.body.classList.remove("overflow-hidden");
  // }, [activePopup]);

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
      {recipePopupInformation && (
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
      )}
      <LoginPopup
        isOpen={isLoginPopupOpen}
        handleClosePopup={handleClosePopup}
        handleSignupPopupClick={handleSignupPopupClick}
        handleLogin={handleLogin}
      />
      <SignupPopup
        isOpen={isSignupPopupOpen}
        handleClosePopup={handleClosePopup}
        handleLoginPopupClick={handleLoginPopupClick}
        error={error}
        handleSignup={handleSignup}
      />
    </div>
  );
}

export default App;
