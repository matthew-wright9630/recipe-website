function Popup({ children, title, onClose, isOpen }) {
  return (
    <div
      className={`fixed inset-0 w-full h-full  top-[0] left-[0] bg-black/75 transition-all ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-300 text-black w-[75%] h-[75%] overflow-y-auto overflow-x-hidden">
        <h2 className="text-3xl text-center mb-10">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="absolute text-3xl top-[-35px] right-[-35px] text-white hover:text-gray-400 transition-all"
        >
          {" "}
          X
        </button>
        {/* <form onSubmit={handleSubmit} className="modal__form"> */}
        {children}
        {/* <button
            type="submit"
            disabled={isDisabled}
            className={`modal__submit-button`}
          >
            {buttonText}
          </button> */}
        {/* </form> */}
      </div>
    </div>
  );
}

export default Popup;
