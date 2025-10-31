import { Recipe } from "../../types/recipe";
import { User } from "../../types/user";
import Popup from "../Popup/Popup";

function AddToGroupPopup({
  handleClosePopup,
  isOpen,
  recipeInformation,
  user,
}: {
  handleClosePopup: () => void;
  isOpen: boolean;
  recipeInformation: Recipe;
  user: User
}) {
  return (
    <div>
      <Popup
        title={`Add "${recipeInformation?.name}" to a group?`}
        onClose={handleClosePopup}
        isOpen={isOpen}
        children={<div>
            
        </div>}
      />
    </div>
  );
}

export default AddToGroupPopup;
