import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { Recipe } from "../../types/recipe";
import "./App.css";
import RecipePopup from "../RecipePopup/RecipePopup";
import LoginPopup from "../LoginPopup/LoginPopup";
import SignupPopup from "../SignupPopup/SignupPopup";
import { createContext } from "react";
import { User } from "../../types/user";
import Profile from "../Profile/Profile";
// import SignupPopup from "../SignupPopup/SignupPopup";

function App() {
  const CurrentUserContext = createContext({});
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<User>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const [recipePopupInformation, setRecipePopupInformation] =
    useState<Recipe | null>(null);

  const [recipeCards, setRecipeCards] = useState<Recipe[]>([
    {
      name: "Buckeyes",
      shortDescription: "Peanut butter and chocolate dessert",
      image: "",
      directions: [
        "Thoroughly mix all the ingredients except for the chocolate.",
        "Add more powdered sugar (up to 1 cup) if it is too sticky. Chill 2 hours. ",
        "Roll into 1 inch balls.",
        "Dip each ball into melted chocolate, leaving a nickel sized spot bare.",
        "Place on wax paper and chill until the chocolate is set.",
      ],
      ingredients: [
        { name: "butter", amount: 6, unitOfMeasure: "tbsp" },
        { name: "peanut butter", amount: 0.5, unitOfMeasure: "cup" },
        { name: "crushed graham crackers", amount: 1, unitOfMeasure: "cup" },
        { name: "vanilla", amount: 0.5, unitOfMeasure: "tsp" },
        {
          name: "powdered sugar",
          amount: 1,
          unitOfMeasure: "cup",
        },
        {
          name: "coconut",
          amount: 0.75,
          unitOfMeasure: "cup",
          notes: "(optional)",
        },
        { name: "melting chocolate", amount: 10, unitOfMeasure: "oz" },
      ],
      recipeHeader: {
        servings: "16",
        prepTime: "10 mins",
        cookTime: "30 mins",
      },
      notes:
        "Use a tootpick to dip the balls into the chocolate. if the balls are too soft to dip, freeze them for 15 minutes.",
      author: "Laura Wright",
    },

    {
      name: "Second Test",
      shortDescription: "This is the second card.",
      image: "",
      directions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      ],
      ingredients: [],
      recipeHeader: { servings: "", prepTime: "", cookTime: "" },
      notes: "",
      author: "",
    },

    {
      name: "test",
      shortDescription: "This is a shortDescription used for testing purposes.",
      image: "",
      directions: [""],
      ingredients: [],
      recipeHeader: { servings: "", prepTime: "", cookTime: "" },
      notes: "",
      author: "",
    },
    {
      name: "test",
      shortDescription: "New Test",
      image: "",
      directions: [""],
      ingredients: [],
      recipeHeader: { servings: "", prepTime: "", cookTime: "" },
      notes: "",
      author: "",
    },
    {
      name: "Second Test",
      shortDescription: "This is the second card.",
      image: "",
      directions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      ],
      ingredients: [],
      recipeHeader: { servings: "", prepTime: "", cookTime: "" },
      notes: "",
      author: "",
    },
    {
      name: "test",
      shortDescription: "This is a shortDescription used for testing purposes.",
      image: "",
      directions: [""],
      ingredients: [],
      recipeHeader: { servings: "", prepTime: "", cookTime: "" },
      notes: "",
      author: "",
    },
  ]);

  function addRecipe() {
    console.log(...recipeCards)
    setRecipeCards([...recipeCards, {
      name: "test",
      shortDescription: "This is a shortDescription used for testing purposes.",
      image: "",
      directions: [""],
      ingredients: [],
      recipeHeader: { servings: "", prepTime: "", cookTime: "" },
      notes: "",
      author: "",
    }])
  }

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

    //This will send a request to the middleware, and on a success it will allow the user to login.
    //For dev purposes, I have defined a specific user to login as.

    if (email === "test@test.com") {
      setCurrentUser({ userName: "test" });
      setIsLoggedIn(true);
    }

    resetForm();
    handleClosePopup();
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
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
      setError("Passwords do not match");
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
      document.body.style.marginRight = `${scrollbarWidth}px`;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.body.style.marginRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.marginRight = "";
    };
  }, [activePopup]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div
        className={`min-h-screen mx-auto bg-gradient-to-b from-orange-500 to-green-700 p-6 text-white`}
      >
        <button
        className="rounded-md bg-gray-400 transition-all duration-500 hover:bg-gray-600"
        onClick={addRecipe}
      >
        Test Game Card
      </button>
        <Header
          handleLoginPopupClick={handleLoginPopupClick}
          handleSignupPopupClick={handleSignupPopupClick}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
          user={currentUser}
        />
        <Routes>
          <Route
            path="/"
            element={<Main handlePopupClick={handleRecipePopupClick} recipeCards={recipeCards} />}
          />
          <Route path="/profile"
            element={<Profile />}
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
    </CurrentUserContext.Provider>
  );
}

export default App;
