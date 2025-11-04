import { ReactNode } from "react";

type PopupProps = {
  children: ReactNode;
  title: string;
  onClose: () => void;
  isOpen: boolean;
};

function Popup({ children, title, onClose, isOpen }: PopupProps) {
  
  return (
    <div
      className={`fixed inset-0 w-full h-full top-[0] left-[0] bg-black/75 transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"} ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-300 text-black w-[75%] h-[85%] py-5 rounded-2xl"
      >
        <h2 className="text-3xl text-center mb-10">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="absolute text-3xl top-0 right-[10px] text-white hover:text-gray-400 transition-all"
        >
          {" "}
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default Popup;
