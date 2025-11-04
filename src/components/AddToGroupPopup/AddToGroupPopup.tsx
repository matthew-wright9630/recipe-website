import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { Recipe } from "../../types/recipe";
import { User } from "../../types/user";
import Popup from "../Popup/Popup";

function AddToGroupPopup({
  handleClosePopup,
  isOpen,
  recipeInformation,
  user,
  isLoggedIn,
}: {
  handleClosePopup: () => void;
  isOpen: boolean;
  recipeInformation: Recipe;
  user: User;
  isLoggedIn?: boolean;
}) {
  const {
    values = { email: "", password: "" },
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation({ email: "", password: "" });

  return (
    <div>
      <Popup
        title={`Add "${recipeInformation?.name}" to a group?`}
        onClose={handleClosePopup}
        isOpen={isOpen}
        children={
          <div className={`${isLoggedIn ? "" : "h-[85%]"}`}>
            <form className={`flex flex-col gap-5 mx-5 w-[50%] mx-auto ${isLoggedIn ? "" : "h-full"}`}>
              <div className={`flex flex-col gap-2 ${isLoggedIn ? "" : "my-auto"}`}>
                <label className="form-label">
                  Share via email:
                  <input
                    onChange={handleChange}
                    type="email"
                    className="h-[50px] px-1"
                    name="email"
                    id="shareEmail"
                    placeholder="email"
                    value={values.email || ""}
                    required={true}
                    autoComplete="username"
                  />
                </label>
                <span className="text-red-500 self-end justify-self-start">
                  {errors.email}
                </span>
                <button className="button mx-auto w-1/2 h-[40px]">Send Recipe</button>
              </div>
            </form>
            {isLoggedIn ? (
                <div className="grid-items">
                  {/* This section will allow users to save the recipe to specific groups. The intention is to be a sort of checkbox, where users can save it to multiple groups.*/}
                </div>
            ) : (
              ""
            )}
          </div>
        }
      />
    </div>
  );
}

export default AddToGroupPopup;
