import Popup from "../Popup/Popup";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function SignupPopup({
  isOpen,
  handleClosePopup,
  handleLoginPopupClick,
  error,
  handleSignup,
}: {
  isOpen: boolean;
  error: string;
  handleClosePopup: () => void;
  handleLoginPopupClick: () => void;
  handleSignup: (args: {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    resetForm: () => void;
  }) => void;
}) {
  const {
    values = { email: "", password: "", confirmPassword: "", userName: "" },
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation({
    email: "",
    password: "",
    confirmPassword: "",
    userName: "",
  });

  return (
    <div className="">
      <Popup
        title={"Sign Up"}
        onClose={handleClosePopup}
        isOpen={isOpen}
        children={
          <form className="flex flex-col gap-5 mx-5 w-[50%] mx-auto">
            <div className="flex flex-col">
              <label className="form-label">
                User Name *
                <input
                  onChange={handleChange}
                  type="text"
                  className="h-[50px] px-1"
                  name="userName"
                  id="signupUsername"
                  placeholder="username"
                  value={values.userName || ""}
                  required={true}
                  autoComplete="name"
                />
              </label>
              <span className="text-red-500 self-end justify-self-start">
                {errors.userName}
              </span>
            </div>
            <div className="flex flex-col">
              <label className="form-label">
                Email *
                <input
                  onChange={handleChange}
                  type="email"
                  className="h-[50px] px-1"
                  name="email"
                  id="signupEmail"
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
                  id="signupPassword"
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
            <div className="flex flex-col">
              <label className="form-label">
                Confirm Password *
                <input
                  onChange={handleChange}
                  type="password"
                  className="h-[50px] px-1"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="confirm password"
                  value={values.confirmPassword || ""}
                  required={true}
                  autoComplete="current-password"
                  minLength={8}
                />
              </label>
              <span className="text-red-500 self-end justify-self-start">
                {errors.confirmPassword}
              </span>
            </div>
            <div className="w-[90%] h-[50px] flex justify-between">
              <button
                type="button"
                disabled={!isValid}
                onClick={() => {
                  handleSignup({
                    userName: values.userName,
                    email: values.email,
                    password: values.password,
                    confirmPassword: values.confirmPassword,
                    resetForm: resetForm,
                  });
                }}
                // className={`form-button`}
                className={`${isValid ? "form-button" : "w-[40%] bg-gray-400 text-black rounded-md"}`}
              >
                Sign up
              </button>
              <button
                type="button"
                onClick={handleLoginPopupClick}
                className={`form-button`}
              >
                or login
              </button>
            </div>
            <span className="text-red-500 self-end justify-self-start">
              {error}
            </span>
          </form>
        }
      ></Popup>
    </div>
  );
}

export default SignupPopup;
