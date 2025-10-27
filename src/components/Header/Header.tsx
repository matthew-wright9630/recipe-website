function Header({
  handleLoginPopupClick,
  handleSignupPopupClick,
}: {
  handleLoginPopupClick: any;
  handleSignupPopupClick: any;
}) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl dark:bg-slate-800 dark:shadow-none">
        The Wright Recipe List!
      </h1>
      <div className="w-[100%] my-10 flex items-center text-xl">
        <nav className="w-[70%] flex justify-center gap-2.5 ">
          <ul className="cursor-pointer transition-all underline duration-500 text-blue-700 hover:text-blue-400">
            Homepage
          </ul>
          <ul className="cursor-pointer transition-all underline duration-500 text-blue-700 hover:text-blue-400">
            About
          </ul>
          {/* <ul className="cursor-pointer transition-all underline duration-500 text-blue-700 hover:text-blue-400">
            Shopping List
          </ul> */}
        </nav>
        <div className="w-[30%] ml-auto">
          <button
            onClick={handleLoginPopupClick}
            className="rounded-md bg-gray-400 transition-all duration-500 hover:bg-gray-600"
          >
            Login
          </button>{" "}
          /{" "}
          <button
            onClick={handleSignupPopupClick}
            className="rounded-md bg-gray-400 transition-all duration-500 hover:bg-gray-600"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
