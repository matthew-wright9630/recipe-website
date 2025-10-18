function Header() {
  return (
    <div className="">
      <h1 className="dark:bg-slate-800 dark:shadow-none">
        The Wright Recipe List!
      </h1>
      <div className=" mx-auto flex items-center">
        <nav className="w-[70%] flex justify-center gap-2.5">
          <p>Homepage</p>
          <p>About</p>
          <p>Shopping List</p>
        </nav>
        <div className="w-[30%] ml-auto">New Test</div>
      </div>
    </div>
  );
}

export default Header;
