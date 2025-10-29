import { Link } from "react-router-dom";
import { User } from "../../types/user";

function Header({
  handleLoginPopupClick,
  handleSignupPopupClick,
  isLoggedIn,
  handleLogout,
  user,
}: {
  handleLoginPopupClick: () => void;
  handleSignupPopupClick: () => void;
  isLoggedIn: boolean;
  handleLogout: () => void;
  user: User;
}) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl dark:bg-slate-800 dark:shadow-none">
        The Wright Recipe List!
      </h1>
      <div className="w-[100%] my-10 flex items-center text-xl">
        <nav className="w-[70%] flex justify-center gap-2.5 ">
          <ul className="cursor-pointer transition-all underline duration-500 text-blue-700 hover:text-blue-400">
            <Link to={"/"}>Homepage</Link>
          </ul>
          <ul className="cursor-pointer transition-all underline duration-500 text-blue-700 hover:text-blue-400">
            About
          </ul>
          {/* <ul className="cursor-pointer transition-all underline duration-500 text-blue-700 hover:text-blue-400">
            Shopping List
          </ul> */}
        </nav>
        <div className="w-[30%] ml-auto">
          {isLoggedIn ? (
            <>
              <Link to={"/profile"} className="button">
                {user.userName}
              </Link>{" "}
              / {/* <button className="button">{user.userName}</button> */}
              <button onClick={handleLogout} className="button">
                Logout
              </button>
            </>
          ) : (
            <>
              <button onClick={handleLoginPopupClick} className="button">
                Login
              </button>{" "}
              /{" "}
              <button onClick={handleSignupPopupClick} className="button">
                Signup
              </button>
            </>
          )}
        </div>

        {/* </div> */}
      </div>
    </div>
  );
}

export default Header;
