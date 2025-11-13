import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import Popup from "../Popup/Popup";

function AddRecipePopup({
  isOpen,
  handleClosePopup,
  handleLogin,
}: {
  isOpen: boolean;
  handleClosePopup: () => void;
  handleSignupPopupClick: () => void;
  handleLogin: (args: {
    email: string;
    password: string;
    resetForm: () => void;
  }) => void;
}) {
  //   if (!isOpen) return null;

  const {
    values = { recipeName: "", description: "" },
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation({ recipeName: "", description: "" });

  return (
    <div className="">
      <Popup
        title={"Login"}
        onClose={handleClosePopup}
        isOpen={isOpen}
        children={
          <form className="flex flex-col gap-5 mx-5 w-[50%] mx-auto overflow-y-auto overflow-x-hidden">
            <div className="flex flex-col">
              <label className="form-label">
                Recipe Name
                <input
                  onChange={handleChange}
                  type="text"
                  className="h-[50px] px-1"
                  name="recipeName"
                  id="recipeName"
                  placeholder="Recipe Name"
                  value={values.recipeName || ""}
                  required={true}
                  autoComplete=""
                />
              </label>
              <span className="text-red-500 self-end justify-self-start">
                {errors.recipeName}
              </span>
            </div>
            <div className="flex flex-col">
              <label className="form-label">
                Description
                <input
                  onChange={handleChange}
                  type="text"
                  className="h-[50px] px-1"
                  id="description"
                  name="description"
                  placeholder="Description"
                  value={values.description || ""}
                  required={true}
                  autoComplete=""
                  minLength={8}
                />
              </label>
              <span className="text-red-500 self-end justify-self-start">
                {errors.description}
              </span>
            </div>
            <div className="w-[90%] h-[50px] flex justify-between"></div>
          </form>
        }
      ></Popup>
      <button
        type="button"
        disabled={!isValid}
        onClick={() => {}}
        className={`${isValid ? "form-button" : "w-[40%] bg-gray-400 text-black rounded-md"}`}
      >
        Create Recipe
      </button>
    </div>
  );
}

export default AddRecipePopup;
