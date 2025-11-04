import Popup from "../Popup/Popup";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function LoginPopup({
  isOpen,
  handleClosePopup,
  handleSignupPopupClick,
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
    values = { email: "", password: "" },
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation({ email: "", password: "" });

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
                Email *
                <input
                  onChange={handleChange}
                  type="email"
                  className="h-[50px] px-1"
                  name="email"
                  id="loginEmail"
                  placeholder="email"
                  value={values.email || ""}
                  required={true}
                  autoComplete="username"
                />
              </label>
              <span className="text-red-500 self-end justify-self-start">
                {errors.email}
              </span>
            </div>
            <div className="flex flex-col">
              <label className="form-label">
                Password *
                <input
                  onChange={handleChange}
                  type="password"
                  className="h-[50px] px-1"
                  id="loginPassword"
                  name="password"
                  placeholder="password"
                  value={values.password || ""}
                  required={true}
                  autoComplete="current-password"
                  minLength={8}
                />
              </label>
              <span className="text-red-500 self-end justify-self-start">
                {errors.password}
              </span>
            </div>
            <div className="w-[90%] h-[50px] flex justify-between">
              <button
                type="button"
                disabled={!isValid}
                onClick={() => {
                  handleLogin({
                    email: values.email,
                    password: values.password,
                    resetForm: resetForm,
                  });
                }}
                className={`${isValid ? "form-button" : "w-[40%] bg-gray-400 text-black rounded-md"}`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={handleSignupPopupClick}
                className="form-button"
              >
                or sign up
              </button>
            </div>
          </form>
        }
      ></Popup>
    </div>
  );
}

export default LoginPopup;
